import React from "react";
import { ScrollView } from "react-native";
import { HStack, VStack } from "react-native-flex-layout";
import { Skeleton } from "react-native-skeletons";
import { useStyles } from "./index.styles";

const VideoLoader: React.FC = () => {
  const { styles, theme } = useStyles({});
  const {
    palette: {
      decorative: { skeleton_bg },
    },
  } = theme;
  return (
    <ScrollView contentContainerStyle={styles.listStyle}>
      <VStack spacing={20} mt={10} style={styles.full}>
        <HStack spacing={10} mt={10}>
          <VStack spacing={10} w={"100%"}>
            <Skeleton color={skeleton_bg} width={"100%"} />
            <Skeleton color={skeleton_bg} width={"85%"} />
            <Skeleton color={skeleton_bg} width={"70%"} />
          </VStack>
        </HStack>
        <HStack mt={10} spacing={12}>
          <Skeleton
            color={skeleton_bg}
            borderRadius={8}
            width={100}
            height={30}
          />
          <Skeleton
            color={skeleton_bg}
            borderRadius={8}
            width={100}
            height={30}
          />
        </HStack>
        <HStack mt={20}>
          <Skeleton color={skeleton_bg} width={"40%"} />
        </HStack>

        <HStack style={styles.rowStyle}>
          <VStack spacing={5} style={styles.full}>
            <Skeleton
              color={skeleton_bg}
              borderRadius={16}
              width={"100%"}
              height={200}
            />
            <HStack mt={5} spacing={5} justify="between">
              <Skeleton color={skeleton_bg} width={"50%"} />
              <Skeleton color={skeleton_bg} width={"10%"} />
            </HStack>
            <HStack mt={5} spacing={5} justify="between">
              <Skeleton color={skeleton_bg} width={"30%"} />
              <Skeleton color={skeleton_bg} width={"20%"} />
            </HStack>
          </VStack>
        </HStack>
        <HStack style={styles.rowStyle}>
          <VStack spacing={5} style={styles.full}>
            <Skeleton
              color={skeleton_bg}
              borderRadius={16}
              width={"100%"}
              height={200}
            />
            <HStack mt={5} spacing={5} justify="between">
              <Skeleton color={skeleton_bg} width={"50%"} />
              <Skeleton color={skeleton_bg} width={"10%"} />
            </HStack>
            <HStack mt={5} spacing={5} justify="between">
              <Skeleton color={skeleton_bg} width={"30%"} />
              <Skeleton color={skeleton_bg} width={"20%"} />
            </HStack>
          </VStack>
        </HStack>
      </VStack>
    </ScrollView>
  );
};

export default VideoLoader;
