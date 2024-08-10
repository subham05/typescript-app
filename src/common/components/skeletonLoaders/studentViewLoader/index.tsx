import React from "react";
import { HStack, VStack } from "react-native-flex-layout";
import { Skeleton } from "react-native-skeletons";
import { useStyles } from "./index.styles";

const StudentViewLoader: React.FC = () => {
  const { styles } = useStyles({});
  const data = Array.from({ length: 3 });
  return (
    <VStack style={styles.rowStyle}>
      <Skeleton circle width={150} />

      {data.map((_, index) => (
        <HStack key={index} mt={50} style={styles.details}>
          <VStack spacing={5} style={styles.detailsInner}>
            <Skeleton width={index == 0 ? "50%" : "70%"} />
            <Skeleton width={index == 0 ? "80%" : "100%"} />
          </VStack>
          {index == 0 && (
            <VStack spacing={5} style={styles.detailsInner}>
              <Skeleton width={"50%"} />
              <Skeleton width={"80%"} />
            </VStack>
          )}
        </HStack>
      ))}
    </VStack>
  );
};

export default StudentViewLoader;
