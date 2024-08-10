import React from "react";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "react-native-linear-gradient";
import { IconView } from "@common/components/Icon";
import { useStyles } from "./index.styles";

type AudioButtonProps = {
  isPlay?: boolean;
  type?: "PLAY" | "SKIP";
  skip?: "LEFT" | "RIGHT";
  onPress: () => void;
};

const AudioButton: React.FC<AudioButtonProps> = ({
  isPlay,
  onPress,
  type = "PLAY",
  skip,
}) => {
  const { styles, theme } = useStyles({});

  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[
          theme.gradient.dark_button.start,
          theme.gradient.dark_button.end,
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <IconView
          name={
            type == "PLAY"
              ? isPlay
                ? "pause"
                : "play_filled"
              : skip === "LEFT"
              ? "play_back"
              : "play_fwd"
          }
          color={theme.palette.background.section_bg}
          size={24}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default AudioButton;
