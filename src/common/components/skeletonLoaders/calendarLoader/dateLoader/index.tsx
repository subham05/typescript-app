import React from "react";
import { HStack } from "react-native-flex-layout";
import { Skeleton } from "react-native-skeletons";
import { useStyles } from "./index.styles";

const CalendarDateLoader: React.FC = () => {
  const { styles, theme } = useStyles({});
  const {
    palette: {
      decorative: { skeleton_bg },
    },
  } = theme;
  const data = Array.from({ length: 6 });
  return (
    <HStack style={styles.rowStyle} spacing={10} mb={26} mt={8}>
      {data.map((_, index) => (
        <Skeleton
          key={index}
          color={skeleton_bg}
          borderRadius={20}
          width={58}
          height={76}
        />
      ))}
    </HStack>
  );
};

export default CalendarDateLoader;
