import { IconView } from "@common/components/Icon";
import { TextView } from "@common/components/textView";
import React from "react";
import { Box } from "react-native-flex-layout";
import LinearGradient from "react-native-linear-gradient";
import { useStyles } from "./index.styles";

interface recordingProps {
  title?: string;
  start: string;
  end: string;
  navigate?: string;
  earning: string;
  width: number;
}
const EarningCard: React.FC<recordingProps> = ({
  title,
  earning,
  start,
  end,
  width,
}) => {
  const { styles, theme } = useStyles({});
  const {
    palette: {
      background: { section_bg },
    },
  } = theme;

  return (
    <Box style={{ width: width / 3.2 }}>
      <LinearGradient
        colors={[`${start}`, `${end}`]}
        style={styles.btn}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <Box style={styles.cta}>
          <IconView name="courses" size={24} color={section_bg} />
        </Box>
        <TextView variant="bold" style={styles.value}>
          {earning}
        </TextView>
        <TextView style={styles.ctaHeading}>{title}</TextView>
      </LinearGradient>
    </Box>
  );
};

export default EarningCard;
