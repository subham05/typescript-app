import { TextView } from "@common/components/textView";
import React from "react";
import { Box } from "react-native-flex-layout";
import CheckBox from "../checkBox";
import { useStyles } from "./index.styles";
export type GoalsProps = {
  title?: string;
  date?: string;
  complete?: boolean;
  onPress?: () => void;
};
const GoalsCard: React.FC<GoalsProps> = ({
  title,
  date,
  onPress,
  complete,
}) => {
  const { styles } = useStyles({});
  return (
    <Box pv={9} style={styles.card}>
      <CheckBox check={complete} onPress={onPress} />
      <Box style={styles.right}>
        <TextView variant="medium" style={styles.subject}>
          {title}
        </TextView>
        <TextView variant="light" style={styles.dateComplete}>
          Completed by - {date}
        </TextView>
      </Box>
    </Box>
  );
};

export default GoalsCard;
