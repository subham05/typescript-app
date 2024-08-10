import { TextView } from "@common/components/textView";
import React from "react";
import { Box, HStack, VStack } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
import { TouchableOpacity } from "react-native";
type ScheduleItem = {
  index: number;
  name: string | undefined;
  time?: string | undefined;
  duration: number;
};
type WeekCardProps = {
  index: number;
  timeStart?: string;
  timeEnd?: string;
  classes: ScheduleItem[];
  onPress?: () => void;
};
const WeekCard: React.FC<WeekCardProps> = ({ classes, onPress }) => {
  const { styles } = useStyles({});

  return (
    <Box style={styles.container}>
      <VStack p={2}>
        {classes.map(({ index, name, time, duration }) =>
          name === "WeekOff" ? (
            <Box
              key={index}
              style={[styles.weekOffStyle, { height: duration * 70 }]}
            >
              <TextView style={styles.rotated} variant="medium">
                Week off
              </TextView>
            </Box>
          ) : name === "Recess" || name === undefined ? (
            <Box
              key={index}
              style={[styles.recessContainer, { height: duration * 70 }]}
            >
              {name && (
                <Box style={styles.recessTag}>
                  <TextView variant="medium" style={styles.recessText}>
                    RECESS
                  </TextView>
                </Box>
              )}
            </Box>
          ) : (
            <TouchableOpacity
              onPress={onPress}
              key={index}
              style={[
                styles.subjectCardStyle,
                name === "Webinar" && styles.yellow,
                name === "Mathematics Exam" && styles.blush,
                { height: duration * 68 },
              ]}
            >
              <HStack style={styles.full}>
                <Box
                  style={[
                    styles.innerCardLine,
                    name === "Webinar" && styles.yellowLine,
                    name === "Mathematics Exam" && styles.blushLine,
                  ]}
                />
                <VStack pv={4} justify="between">
                  <TextView variant="light" style={styles.subjectStyle}>
                    {name}
                  </TextView>
                  <TextView variant="light" style={styles.timeStyle}>
                    {time}
                  </TextView>
                </VStack>
              </HStack>
            </TouchableOpacity>
          )
        )}
      </VStack>
    </Box>
  );
};

export default WeekCard;
