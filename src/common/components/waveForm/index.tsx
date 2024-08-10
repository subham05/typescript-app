import { useAudioRecord } from "@common/utils/useAudioRecord";
import { Slider } from "@miblanchard/react-native-slider";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Box, HStack } from "react-native-flex-layout";
import Modal from "react-native-modal";
import { TextView } from "../textView";
import AudioButton from "./buttons";
import { useStyles } from "./index.styles";
type AudioModalProps = {
  visible: boolean;
  onClose: () => void;
};

type WaveFormProps = {
  bufferData: number[];
  timeMS: number;
  waveFormUri?: string;
  hideIcon?: boolean;
  isAudioPlay?: boolean;
  id?: string;
  selectedNote?: string | null;
  setAudioPlay?: (value: null | string) => void;
  reducedLength?: number;
};

const WaveForm = ({
  visible,
  onClose,
  timeMS,
  waveFormUri,
  hideIcon,
  setAudioPlay,
  id,
  isAudioPlay,
  selectedNote = undefined,
}: AudioModalProps & WaveFormProps) => {
  const { styles, theme } = useStyles({});
  const [audioData, onStartPlay, onStopPlay, onSeekPlay, onPausePlay] =
    useAudioRecord();
  const { currentPosition, playTime, duration, lastPosition } = audioData;
  const [isPlay, setIsPlay] = useState(false);

  const handlePlaybackState = () => {
    if (selectedNote) {
      if (id === selectedNote) {
        onStopPlay();
        setIsPlay(true);
        onStartPlay(waveFormUri!);
      }
    } else if (selectedNote === null) {
      setIsPlay(false);
      onStopPlay();
    }
  };

  useEffect(() => {
    const currentPos = currentPosition;
    if (
      Math.trunc(currentPos) >= timeMS ||
      (waveFormUri && Math.round(currentPos / 100) >= timeMS / 100)
    ) {
      setIsPlay(false);
      setAudioPlay?.(null);
    }
  }, [currentPosition, timeMS]);

  useEffect(() => {
    handlePlaybackState();
  }, [selectedNote]);
  const skipBackward = () => {
    const newPosition = currentPosition - 10000; // 10 seconds backward
    if (newPosition < 0) return;
    onSeekPlay(newPosition);
  };

  const skipForward = () => {
    const newPosition = currentPosition + 10000; // 10 seconds forward

    if (newPosition > lastPosition) return;
    onSeekPlay(newPosition);
  };
  useEffect(() => {
    if (isAudioPlay && visible) {
      setIsPlay(true);
      waveFormUri ? onStartPlay(waveFormUri) : onStartPlay();
    } else {
      setIsPlay(false);
      onStopPlay();
    }
  }, [visible]);
  return (
    <Modal
      avoidKeyboard={true}
      isVisible={visible}
      style={styles.modalContainer}
      hasBackdrop={true}
      backdropOpacity={0.1}
      onBackdropPress={onClose}
      useNativeDriverForBackdrop
    >
      <View style={styles.modalBg}>
        <TextView variant="medium" style={styles.tile}>
          AUD-Webinar-CR005.mp3
        </TextView>
        <TextView variant="medium" style={styles.date}>
          24/04/2023, 15:57PM
        </TextView>
        <View style={styles.waveformView}>
          <Slider
            containerStyle={styles.slider}
            value={currentPosition / 100}
            minimumValue={0}
            maximumValue={lastPosition / 100}
            maximumTrackTintColor={theme.palette.border.Text_fields}
            minimumTrackTintColor={theme.palette.decorative.error_red}
            thumbTintColor={theme.palette.decorative.error_red}
            onSlidingComplete={(val) => {
              setIsPlay(true);
              setAudioPlay?.(null);
              onSeekPlay(val[0] * 100);
            }}
            renderThumbComponent={() => <Box style={styles.thumbCta} />}
          />
        </View>
        <HStack justify="between" mb={30}>
          <TextView style={styles.time}>{playTime}</TextView>
          <TextView style={styles.time}>{duration}</TextView>
        </HStack>
        <HStack justify="center">
          {!hideIcon && (
            <HStack style={styles.controlStyle}>
              <AudioButton
                type="SKIP"
                skip="LEFT"
                isPlay={isPlay}
                onPress={() => skipBackward()}
              />
              <AudioButton
                isPlay={isPlay}
                onPress={() => {
                  if (isPlay) {
                    setIsPlay(false);
                    onPausePlay();
                  } else {
                    setIsPlay(true);
                    waveFormUri ? onStartPlay(waveFormUri) : onStartPlay();
                  }
                }}
              />
              <AudioButton
                type="SKIP"
                skip="RIGHT"
                isPlay={isPlay}
                onPress={() => skipForward()}
              />
            </HStack>
          )}
        </HStack>
      </View>
    </Modal>
  );
};

export default WaveForm;
