import { TextView } from "@common/components/textView";
import React from "react";
import { useTranslation } from "react-i18next";
import { Image, ImageProps, ImageStyle, TouchableOpacity } from "react-native";
import { Box } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
type headerProps = {
  chatTitle?: string;
  groupImage?: ImageProps;
  participant?: string;
  onPressGroupInfo?: () => void;
};
const HeaderChat: React.FC<headerProps> = ({
  chatTitle,
  groupImage,
  participant,
  onPressGroupInfo,
}) => {
  const { styles } = useStyles({});
  const { t } = useTranslation();
  return (
    <TouchableOpacity onPress={onPressGroupInfo} style={styles.head}>
      <Box style={styles.innerBox}>
        <Image style={styles.profileImage as ImageStyle} source={groupImage} />
        <Box pl={17}>
          <TextView style={styles.headText} variant="medium">
            {chatTitle}
          </TextView>
          <TextView style={styles.participantText} variant="light">
            {participant} {t("chattingPage:participants")}
          </TextView>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default HeaderChat;
