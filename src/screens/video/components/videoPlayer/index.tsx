import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  AppState,
  Platform,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Box } from "react-native-flex-layout";
import Orientation from "react-native-orientation-locker";
import PipHandler from "react-native-pip-android";
import Video, { VideoRef } from "react-native-video";
import ProgressBar from "../progressBar";
import VideoControls from "../videoControls";
import { useStyles } from "./index.styles";
interface CustomVideoPlayerProps {
  videoUrl: string;
  onFullScreen: (data: boolean) => void;
  onPip: (data: boolean) => void;
}

interface ProgressState {
  currentTime?: number;
  playableDuration?: number;
  seekableDuration: number;
}

const VideoPlayer: React.FC<CustomVideoPlayerProps> = ({
  videoUrl,
  onFullScreen,
  onPip,
}) => {
  const { styles } = useStyles({});
  const bufferProgressRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [appState, setAppState] = useState<string>(AppState.currentState);
  const [clicked, setClicked] = useState<boolean>(false);
  const [paused, setPaused] = useState<boolean>(false);
  const [progress, setProgress] = useState<ProgressState | null>(null);
  const [opacity, setOpacity] = useState(1);
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const _videoRef = useRef<VideoRef>(null);

  useEffect(() => {
    onFullScreen(fullScreen);
  }, [fullScreen]);

  useEffect(() => {
    const handleAppStateChange = (nextAppState: string) => {
      if (appState === "active" && nextAppState.match(/inactive|background/)) {
        if (Platform.OS === "android") {
          onPip(true);
          setClicked(false);
          PipHandler.enterPipMode(360, 214);
        }
        /* empty */
      }
      onPip(false);
      setAppState(nextAppState);
    };

    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );

    return () => {
      subscription.remove();
    };
  }, [appState]);
  useEffect(() => {
    handleButtonClick();
  }, [clicked]);
  const handleButtonClick = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setClicked(false);
      bufferProgressRef.current = 0;
    }, 10000);
  };

  const onBuffer = ({ isBuffering }: { isBuffering: boolean }) => {
    if (isBuffering) {
      setOpacity(1);
    } else setOpacity(0);
  };

  const onLoad = () => {
    setOpacity(0);
  };

  const onLoadStart = () => {
    setOpacity(1);
  };

  const onEnd = useCallback(() => {
    _videoRef?.current?.seek(0);
    setTimeout(() => {
      setPaused(true);
    }, 100);
  }, []);

  useEffect(() => {
    if (fullScreen === true) {
      Orientation.lockToLandscape();
    } else {
      Orientation.lockToPortrait();
    }
  }, [fullScreen]);

  const fullScreenHandle = () => {
    if (!_videoRef.current) return;

    const method = fullScreen
      ? "dismissFullscreenPlayer"
      : "presentFullscreenPlayer";
    _videoRef.current[method]();
    setFullScreen(!fullScreen);
  };

  const handleRewindForward = (secondsOffset: number) => {
    if (progress?.currentTime !== undefined && _videoRef.current != null) {
      _videoRef.current.seek(progress?.currentTime + secondsOffset);
    }
    handleButtonClick();
  };

  const formatTime = (seconds: number | undefined) => {
    if (seconds !== undefined) {
      const mins = Math.floor(seconds / 60)
        .toString()
        .padStart(2, "0");
      const secs = (Math.trunc(seconds) % 60).toString().padStart(2, "0");
      return `${mins}:${secs}`;
    }
  };
  const handleProgress = (x: {
    currentTime: number;
    playableDuration: number;
    seekableDuration: number;
  }) => {
    setProgress(x);
    const { currentTime, playableDuration } = x;
    if (playableDuration !== undefined && currentTime !== undefined) {
      const bufferValue =
        playableDuration > 0 ? currentTime / playableDuration : 0;
      bufferProgressRef.current = bufferValue;
    }
  };

  const getVideoStyle = () => {
    if (fullScreen) {
      return styles.videoStyle1;
    } else if (appState === "background") {
      return styles.videoStyle2;
    } else {
      return styles.videoStyle3;
    }
  };
  return (
    <>
      <Box>
        <TouchableWithoutFeedback
          style={[
            styles.controlContainer,
            fullScreen ? styles.heightFull : styles.heightSmall,
          ]}
          onPress={() => {
            if (opacity == 0) setClicked(true);
          }}
        >
          <Video
            onBuffer={onBuffer}
            onLoad={onLoad}
            onLoadStart={onLoadStart}
            pictureInPicture={true}
            preventsDisplaySleepDuringVideoPlayback={true}
            playInBackground={true}
            paused={paused}
            resizeMode={appState == "active" ? "contain" : "cover"}
            source={{ uri: videoUrl }}
            ref={_videoRef}
            onProgress={handleProgress}
            onEnd={onEnd}
            style={[styles.videoStyle, getVideoStyle()]}
          />
        </TouchableWithoutFeedback>
        {opacity == 1 && (
          <ActivityIndicator
            animating
            size="large"
            color={"white"}
            style={styles.loader}
          />
        )}
        {clicked && opacity === 0 && (
          <VideoControls
            onPressContainer={() => setClicked(false)}
            onPressPlay={() => {
              setPaused(!paused);
              handleButtonClick();
            }}
            paused={paused}
            onRewind={() => handleRewindForward(-10)}
            onForward={() => handleRewindForward(10)}
            format={formatTime}
            currentTime={progress?.currentTime || 0}
            seekableDuration={progress?.seekableDuration || 0}
            fullScreenHandle={fullScreenHandle}
            fullScreen={fullScreen}
          />
        )}
      </Box>
      {clicked ? (
        <ProgressBar
          bufferProgressRef={bufferProgressRef}
          currentTime={progress?.currentTime || 0}
          seekableDuration={progress?.seekableDuration || 0}
          onSlidingStart={(x: number[]) => {
            if (_videoRef.current != null) _videoRef.current.seek(x[0]);
            handleButtonClick();
          }}
          onValueChange={(x: number[]) => {
            if (_videoRef.current != null) _videoRef.current.seek(x[0]);
            handleButtonClick();
          }}
          fullScreen={fullScreen}
        />
      ) : (
        <View style={styles.blank} />
      )}
    </>
  );
};

export default VideoPlayer;
