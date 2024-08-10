import { IconView } from "@common/components/Icon";
import { TextView } from "@common/components/textView";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useStyles } from "./index.styles";
type VideoControlsProps = {
  onPressPlay: () => void;
  onRewind: () => void;
  onForward: () => void;
  onPressContainer: () => void;
  format: (seconds: number | undefined) => string | undefined;
  currentTime: number;
  seekableDuration: number;
  fullScreenHandle: () => void;
  fullScreen: boolean;
  paused: boolean;
};

const VideoControls: React.FC<VideoControlsProps> = ({
  onPressPlay,
  paused,
  onRewind,
  onForward,
  format,
  currentTime,
  seekableDuration,
  fullScreenHandle,
  fullScreen,
  onPressContainer,
}) => {
  const { styles, theme } = useStyles({});

  return (
    <TouchableOpacity onPress={onPressContainer} style={styles.controlShow}>
      <View style={styles.middle}>
        <TouchableOpacity style={styles.playback} onPress={onRewind}>
          <IconView
            name="play_back"
            size={26}
            color={theme.palette.cta.Filter_bg}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.play} onPress={onPressPlay}>
          <IconView
            name={paused ? "play_filled" : "pause"}
            size={36}
            color={theme.palette.cta.Filter_bg}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.playback} onPress={onForward}>
          <IconView
            name="play_fwd"
            size={26}
            color={theme.palette.cta.Filter_bg}
          />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.durationContain,
          fullScreen ? styles.durationContain1 : styles.durationContain2,
        ]}
      >
        <TextView style={styles.white}>{format(currentTime)}/</TextView>
        <TextView style={styles.white}>{format(seekableDuration)}</TextView>
      </View>

      <TouchableOpacity
        style={[styles.fullBtn, fullScreen ? styles.bottom1 : styles.bottom]}
        onPress={fullScreenHandle}
      >
        <IconView
          name="maximize"
          size={26}
          color={theme.palette.cta.Filter_bg}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.infoBtn, fullScreen ? styles.infoTop1 : styles.infoTop]}
      >
        <IconView
          name="bubble_chat"
          size={26}
          color={theme.palette.cta.Filter_bg}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default VideoControls;
