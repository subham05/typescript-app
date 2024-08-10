import { Container } from "@common/components/Container";
import { IconView } from "@common/components/Icon";
import Header from "@common/components/header";
import ImageSelect from "@common/components/imageSelect";
import ProfileLoader from "@common/components/skeletonLoaders/profileLoader";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { TextView } from "@common/components/textView";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CompositeNavigationProp } from "@react-navigation/native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Image, ImageStyle, TouchableOpacity } from "react-native";
import { Box, HStack, VStack } from "react-native-flex-layout";
import { ImagePickerResponse } from "react-native-image-picker";
import Animated from "react-native-reanimated";
import { imageSources } from "src/assets/images";
import { DrawerNavParamList } from "src/navigation/stacks/DrawerNavigation";
import { BottomTabParamList } from "src/navigation/stacks/MainTabNavigation";
import {
  useGetProfileQuery,
  useUploadImageMutation,
} from "src/store/services/profile";
import { useStyles } from "./index.styles";

type ProfileScreenProps = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList>,
    DrawerNavigationProp<DrawerNavParamList>
  >;
};
const Profile: React.FC<ProfileScreenProps> = () => {
  const { styles } = useStyles({});
  const { t } = useTranslation();
  const [isModalVisible, setModalVisible] = useState(false);
  const { scrollY, handleScroll } = UseScrollAnimation();
  const { data: profileData, isLoading } = useGetProfileQuery();
  const [uploadImage, { data }] = useUploadImageMutation();
  const handleUploadImage = (selectedImage: ImagePickerResponse) => {
    if (selectedImage?.assets && selectedImage.assets.length > 0) {
      const formData = new FormData();
      formData.append("image", {
        uri: selectedImage.assets[0].uri,
        // type: selectedImage.assets[0].type,
        // name: selectedImage.assets[0].fileName,
      });
      uploadImage(formData);
    }
  };
  return (
    <Container noSpacing>
      <Header scroll={scrollY} title={t("profilePage:navigationHeading")} />
      <Animated.ScrollView
        contentContainerStyle={styles.listContain}
        onScroll={handleScroll}
      >
        {isLoading ? (
          <ProfileLoader />
        ) : (
          <>
            <Box style={styles.profileContain}>
              <Image
                style={styles.groupImg as ImageStyle}
                source={data ? { uri: data.data.url } : imageSources.profile}
              />
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
                style={styles.edit}
              >
                <IconView name="edit" size={24} />
              </TouchableOpacity>
            </Box>
            <TextView style={styles.name} variant="bold">
              {profileData?.data?.firstName} {profileData?.data?.lastName}
            </TextView>
            <VStack spacing={29}>
              <HStack spacing={42}>
                <Box>
                  <TextView variant="light" style={styles.subtitle}>
                    {t("profilePage:class")}
                  </TextView>
                  <TextView variant="medium" style={styles.values}>
                    {profileData?.data?.class}
                  </TextView>
                </Box>
                <Box>
                  <TextView variant="light" style={styles.subtitle}>
                    {t("profilePage:schoolId")}
                  </TextView>
                  <TextView variant="medium" style={styles.values}>
                    {profileData?.data?.schoolId}
                  </TextView>
                </Box>
              </HStack>
              <Box>
                <TextView variant="light" style={styles.subtitle}>
                  {t("profilePage:email")}
                </TextView>
                <TextView variant="medium" style={styles.values}>
                  {profileData?.data?.email}
                </TextView>
              </Box>
              <Box>
                <TextView variant="light" style={styles.subtitle}>
                  {t("profilePage:address")}
                </TextView>
                <TextView variant="medium" style={styles.values}>
                  {profileData?.data?.address}
                </TextView>
              </Box>
            </VStack>
          </>
        )}
      </Animated.ScrollView>
      <ImageSelect
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onImageSelected={handleUploadImage}
      />
    </Container>
  );
};

export default Profile;
