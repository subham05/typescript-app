import { Slider } from "@miblanchard/react-native-slider";
import React from "react";
import { View } from "react-native";
import { Box } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
type ProgressBarProps = {
  bufferProgressRef: React.MutableRefObject<number>;
  currentTime: number;
  seekableDuration: number;
  onSlidingStart: (value: number[]) => void;
  onValueChange: (value: number[]) => void;
  fullScreen: boolean;
};
const ProgressBar: React.FC<ProgressBarProps> = ({
  bufferProgressRef,
  currentTime,
  seekableDuration,
  onSlidingStart,
  onValueChange,
  fullScreen,
}) => {
  const { styles, theme } = useStyles({});

  return (
    <View
      style={[
        styles.barContain,
        fullScreen ? styles.barWidth1 : styles.barWidth,
      ]}
    >
      <View style={styles.bufferBar}>
        <View
          style={[
            styles.bufferFill,
            { width: `${bufferProgressRef?.current * 100}%` },
          ]}
        ></View>
      </View>
      <View>
        <Slider
          value={currentTime}
          minimumValue={0}
          containerStyle={styles.sliderMain}
          minimumTrackTintColor={theme.palette.decorative.error_red}
          maximumValue={seekableDuration}
          thumbTintColor={theme.palette.decorative.error_red}
          renderThumbComponent={() => <Box style={styles.thumbCta} />}
          maximumTrackTintColor="transparent"
          onValueChange={onValueChange}
          onSlidingStart={onSlidingStart}
          trackMarks={[100.643992402562958, 190]}
          renderTrackMarkComponent={() => <Box style={styles.mark} />}
        />
      </View>
    </View>
  );
};

export default React.memo(ProgressBar);
