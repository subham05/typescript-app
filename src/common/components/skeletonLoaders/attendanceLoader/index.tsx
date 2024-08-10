import React from "react";
import { HStack, Stack, VStack } from "react-native-flex-layout";
import { Skeleton } from "react-native-skeletons";
import { useStyles } from "./index.styles";
import { ScrollView } from "react-native";

const AttendanceLoader: React.FC = () => {
  const { styles, theme } = useStyles({});
  const {
    palette: {
      decorative: { skeleton_bg },
    },
  } = theme;
  const data = Array.from({ length: 12 });
  return (
    <ScrollView contentContainerStyle={styles.listStyle}>
      <VStack style={styles.rowStyle}>
        <HStack style={styles.topCards}>
          <Skeleton
            color={skeleton_bg}
            borderRadius={42}
            height={156}
            width={"48%"}
          />
          <Skeleton
            color={skeleton_bg}
            borderRadius={42}
            height={156}
            width={"48%"}
          />
        </HStack>
        <Stack mt={30} w={"100%"}>
          <Skeleton color={skeleton_bg} width={"55%"} />
        </Stack>
        <HStack mt={10} style={styles.topCards}>
          {data.map((_, index) => (
            <VStack key={index} spacing={5} style={styles.smallBox}>
              <Skeleton color={skeleton_bg} width={"90%"} />
              <Skeleton color={skeleton_bg} width={"60%"} />
              <Skeleton color={skeleton_bg} width={"60%"} />
              <Skeleton color={skeleton_bg} width={"90%"} />
            </VStack>
          ))}
        </HStack>
      </VStack>
    </ScrollView>
  );
};

export default AttendanceLoader;
