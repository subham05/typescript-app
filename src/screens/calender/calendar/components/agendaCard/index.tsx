import { TextView } from "@common/components/textView";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  I18nManager,
  Image,
  ImageProps,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { Box, Spacer } from "react-native-flex-layout";
import { useStyles } from "./index.styles";

interface recordingProps {
  index: number;
  subject?: string;
  timeStart?: string;
  timeEnd?: string;
  join: boolean;
  joinTime?: string;
  thumbnail?: ImageSourcePropType;
  completed: boolean;
  completedTime: string;
  onPress?: () => void;
}
const AgendaCard: React.FC<recordingProps> = ({
  index,
  subject,
  timeStart,
  timeEnd,
  joinTime,
  thumbnail,
  join,
  completed,
  completedTime,
  onPress,
}) => {
  const { styles } = useStyles({});
  const { t } = useTranslation();
  return (
    <Box style={styles.container}>
      <Box style={styles.leftTime}>
        {index == 0 ? (
          <TextView style={styles.start}>
            {I18nManager.isRTL ? `- ${timeStart}` : `${timeStart} -`}
          </TextView>
        ) : (
          <Spacer pt={8} />
        )}
        {index == 1 ? (
          <TextView variant="medium" style={styles.completed}>
            {completedTime}
          </TextView>
        ) : (
          <Box style={styles.line} />
        )}

        <TextView style={styles.end}>
          {I18nManager.isRTL ? `- ${timeEnd}` : `${timeEnd} -`}
        </TextView>
      </Box>
      <Box style={styles.right}>
        {index == 1 && <Box style={[styles.lineBold, styles.yellow1]}></Box>}
        {index != 1 && <Box style={styles.lineBold}></Box>}
        {completed && (
          <Box style={styles.complete}>
            <Box style={styles.dot} />
            <Box style={styles.strike} />
          </Box>
        )}

        <TouchableOpacity onPress={onPress} style={styles.cardInner}>
          {index == 0 && <Box style={[styles.changeColor, styles.indigo]} />}
          {index == 1 && <Box style={[styles.changeColor, styles.yellow]} />}

          <Box pl={11} style={styles.inner}>
            <Image style={styles.imgCard as ImageProps} source={thumbnail} />
            <Box pl={8}>
              <TextView
                variant="medium"
                numberOfLines={1}
                style={styles.subject}
              >
                {subject}
              </TextView>
              <TextView style={styles.times}>
                {timeStart} - {timeEnd}
              </TextView>
            </Box>
          </Box>
          <Box pr={11}>
            {join ? (
              <TouchableOpacity style={styles.join}>
                <TextView variant="bold" style={styles.joinText}>
                  {t("common:joinNow")}
                </TextView>
              </TouchableOpacity>
            ) : (
              <TextView variant="medium" style={styles.joinAt}>
                {joinTime}
              </TextView>
            )}
          </Box>
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default AgendaCard;
