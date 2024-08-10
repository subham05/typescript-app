import React from "react";
import { HStack, VStack } from "react-native-flex-layout";
import { Skeleton } from "react-native-skeletons";
import { useStyles } from "./index.styles";
import { ScrollView } from "react-native";

const AgendaLoader: React.FC = () => {
  const { styles, theme } = useStyles({});
  const {
    palette: {
      decorative: { skeleton_bg },
    },
  } = theme;
  const data = Array.from({ length: 8 });
  return (
    <ScrollView contentContainerStyle={styles.listStyle}>
      <VStack spacing={6} mb={16}>
        <Skeleton color={skeleton_bg} width={"40%"} />
        <Skeleton color={skeleton_bg} width={"20%"} />
      </VStack>
      {data.map((_, index) => (
        <HStack mv={5} key={index} style={styles.rowListStyle}>
          <Skeleton color={skeleton_bg} circle width={60} />
          <VStack pl={10} spacing={5} style={styles.full}>
            <Skeleton color={skeleton_bg} width={"90%"} />
            <Skeleton color={skeleton_bg} width={"60%"} />
          </VStack>
        </HStack>
      ))}
    </ScrollView>
  );
};

export default AgendaLoader;
