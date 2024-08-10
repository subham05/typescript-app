import { IconView } from "@common/components/Icon";
import { TextView } from "@common/components/textView";
import useScreenDimensions from "@common/utils/responsiveDimensions";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  TouchableOpacity,
} from "react-native";
import { Box } from "react-native-flex-layout";
import LinearGradient from "react-native-linear-gradient";
import { SignedInStackPrivateParamList } from "src/navigation/stacks/SignedInStackPrivate";
import { useStyles } from "./index.styles";

interface recordingProps {
  title?: string;
  thumbnail?: ImageSourcePropType;
  start: string;
  end: string;
  navigate?: string;
}
type ItemNavigationProp = NavigationProp<SignedInStackPrivateParamList>;
const PrivateHomeCard: React.FC<recordingProps> = ({
  title,
  thumbnail,
  start,
  end,
  navigate,
}) => {
  const { styles } = useStyles({});
  const { width } = useScreenDimensions();
  const navigation = useNavigation<ItemNavigationProp>();
  const onPressHandler = () => {
    switch (navigate) {
      case "Quizzes":
        navigation.navigate("Quiz");
        break;
      case "PrivateTeachers":
        navigation.navigate("PrivateTeachers");
        break;
      default:
        break;
    }
  };
  return (
    <TouchableOpacity onPress={onPressHandler} style={{ width: width / 1.6 }}>
      <LinearGradient
        colors={[`${start}`, `${end}`]}
        style={styles.btn}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <Box style={styles.btnImgContain}>
          <Image style={styles.btnImg as ImageStyle} source={thumbnail} />
        </Box>
        <Box style={styles.rightBox}>
          <TextView variant="medium" style={styles.ctaHeading}>
            {title}
          </TextView>
          <Box style={styles.cta}>
            <IconView name="arrow_right" />
          </Box>
        </Box>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PrivateHomeCard;
