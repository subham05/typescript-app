import { IconView } from "@common/components/Icon";
import { TextView } from "@common/components/textView";
import useScreenDimensions from "@common/utils/responsiveDimensions";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  TouchableOpacity,
} from "react-native";
import { Box } from "react-native-flex-layout";
import LinearGradient from "react-native-linear-gradient";
import { useStyles } from "./index.styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { SignedInStackParamList } from "src/navigation/stacks/SignedInStackSchool";

interface recordingProps {
  title?: string;
  thumbnail?: ImageSourcePropType;
  start: string;
  end: string;
  navigate?: string;
}
type ItemNavigationProp = NavigationProp<SignedInStackParamList>;
const HomeCard: React.FC<recordingProps> = ({
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
      case "ImportantAnnouncement":
        navigation.navigate("ImportantAnnouncement");
        break;
      case "UpcomingEvents":
        navigation.navigate("UpcomingEvents");
        break;
      case "PrivateTeachers":
        navigation.navigate("PrivateTeachers");
        break;
      case "UpcomingExams":
        navigation.navigate("UpcomingExams");
        break;
      default:
        break;
    }
  };
  return (
    <TouchableOpacity onPress={onPressHandler} style={{ width: width / 2.5 }}>
      <Box ml={16} style={styles.btnImgContain}>
        <Image style={styles.btnImg as ImageStyle} source={thumbnail} />
      </Box>
      <LinearGradient
        colors={[`${start}`, `${end}`]}
        style={styles.btn}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <TextView variant="medium" style={styles.ctaHeading}>
          {title}
        </TextView>
        <Box style={styles.cta}>
          <IconView name="arrow_right" />
        </Box>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default HomeCard;
