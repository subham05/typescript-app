import { Container } from "@common/components/Container";
import { IconView } from "@common/components/Icon";
import Header from "@common/components/header";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { TextView } from "@common/components/textView";
import {
  checkCameraPermission,
  getCameraPermission,
} from "@common/utils/permissions/ReadCamera";
import { AlertPermission } from "@common/utils/permissions/alert";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { useTranslation } from "react-i18next";
import { Image, ImageStyle, Platform, TouchableOpacity } from "react-native";
import { Box, VStack } from "react-native-flex-layout";
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from "react-native-image-picker";
import Animated from "react-native-reanimated";
import { imageSources } from "src/assets/images";
import { BottomTabParamList } from "src/navigation/stacks/MainTabNavigation";
import { SignedInStackPrivateParamList } from "src/navigation/stacks/SignedInStackPrivate";
import { useStyles } from "./index.styles";
type ProfileScreenProps = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList>,
    StackNavigationProp<SignedInStackPrivateParamList>
  >;
};
const ProfileTeacher: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const { styles } = useStyles({});
  const { t } = useTranslation();
  const { scrollY, handleScroll } = UseScrollAnimation();
  const takePermissionCamera = () => {
    checkCameraPermission().then((res) => {
      const version = Platform.Version;
      if (Number(version) >= 33) {
        chooseFileCamera();
      } else {
        if (!res.isPermissionGranted) {
          if (res.result === "denied") {
            getCameraPermission().then((resp) => {
              const { statuses, isPermissionGranted } = resp;
              (statuses["ios.permission.CAMERA"] === "blocked" ||
                statuses["android.permission.CAMERA"] === "blocked") &&
                AlertPermission(t("common:camera"));
              isPermissionGranted && chooseFileCamera();
            });
          } else if (res.result === "blocked") {
            AlertPermission(t("common:camera"));
          }
        } else {
          chooseFileCamera();
        }
      }
    });
  };
  const chooseFileCamera = () => {
    const option: ImageLibraryOptions = {
      mediaType: "photo",
    };
    launchImageLibrary(option, () => {});
  };
  return (
    <Container noSpacing>
      <Header scroll={scrollY} title={t("profilePage:navigationHeading")} />
      <Animated.ScrollView
        contentContainerStyle={styles.listContain}
        onScroll={handleScroll}
      >
        <Box style={styles.profileContain}>
          <Image
            style={styles.groupImg as ImageStyle}
            source={imageSources.profile}
          />
          <TouchableOpacity
            onPress={() => takePermissionCamera()}
            style={styles.edit}
          >
            <IconView name="edit" size={24} />
          </TouchableOpacity>
        </Box>
        <TextView style={styles.name} variant="bold">
          Dianne Russell
        </TextView>
        <VStack spacing={16}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ProfileGeneral")}
            style={styles.card}
          >
            <TextView variant="medium" style={styles.textCard}>
              General
            </TextView>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ProfileAddress")}
            style={styles.card}
          >
            <TextView variant="medium" style={styles.textCard}>
              Address
            </TextView>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ProfileSubscription")}
            style={styles.card}
          >
            <TextView variant="medium" style={styles.textCard}>
              Subscription details
            </TextView>
          </TouchableOpacity>
        </VStack>
      </Animated.ScrollView>
    </Container>
  );
};

export default ProfileTeacher;
