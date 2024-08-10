import { PrimaryButton } from "@common/components/buttons/primaryButton";
import { TextView } from "@common/components/textView";
import React from "react";
import { useTranslation } from "react-i18next";
import { Image, ImageProps, ImageStyle } from "react-native";
import { Box } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
export type NotificationProps = {
  message?: string;
  messageHighlight?: string;
  time?: string;
  join?: boolean;
  view?: boolean;
  thumbnail?: ImageProps;
  onPress: () => void;
};
const NotificationCard: React.FC<NotificationProps> = ({
  message,
  messageHighlight,
  time,
  join,
  view,
  thumbnail,
  onPress,
}) => {
  const { styles } = useStyles({});
  const { t } = useTranslation();
  return (
    <Box style={styles.card}>
      <Image style={styles.imgSize as ImageStyle} source={thumbnail} />
      <Box style={styles.right}>
        <TextView style={styles.messageStyle} variant="light">
          <TextView variant="medium">{messageHighlight} </TextView>
          {message}
        </TextView>
        <TextView style={styles.timing} variant="light">
          {time}
        </TextView>
        {join && (
          <PrimaryButton
            width={141}
            styleText={styles.btnText}
            title={t("common:joinNow")}
            style={styles.btn}
            onPress={onPress}
          />
        )}
        {view && (
          <PrimaryButton
            width={141}
            styleText={styles.btnText}
            title={t("common:viewNow")}
            style={styles.btn}
            onPress={onPress}
          />
        )}
      </Box>
    </Box>
  );
};

export default NotificationCard;
