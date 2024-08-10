import React from "react";
import { HStack, VStack } from "react-native-flex-layout";
import { Skeleton } from "react-native-skeletons";
import { useStyles } from "./index.styles";

const ProfileLoader: React.FC = () => {
  const { styles } = useStyles({});
  const data = Array.from({ length: 5 });
  return (
    <VStack style={styles.rowStyle}>
      <Skeleton circle width={150} />

      <Skeleton style={styles.middle} width={"50%"} />

      {data.map((_, index) => (
        <HStack key={index} mt={50} style={styles.details}>
          <VStack spacing={5} style={styles.detailsInner}>
            <Skeleton width={"50%"} />
            <Skeleton width={"80%"} />
          </VStack>
          <VStack spacing={5} style={styles.detailsInner}>
            <Skeleton width={"50%"} />
            <Skeleton width={"80%"} />
          </VStack>
        </HStack>
      ))}
    </VStack>
  );
};

export default ProfileLoader;
