import { Container } from "@common/components/Container";
import { NavigationProp } from "@react-navigation/core";
import React from "react";
import { AuthStackParamList } from "src/navigation/stacks/AuthStack";
import { useStyles } from "./index.styles";
import { TextView } from "@common/components/textView";
import { Box, Flex, VStack } from "react-native-flex-layout";
import { Image, ImageStyle, ScrollView, TouchableOpacity } from "react-native";
import { imageSources } from "src/assets/images";
import { useTranslation } from "react-i18next";

type LoginOptionProps = {
  navigation: NavigationProp<AuthStackParamList>;
};
const LoginOption: React.FC<LoginOptionProps> = ({ navigation }) => {
  const { t } = useTranslation();
  const { styles } = useStyles({});

  return (
    <Container noSpacing>
      <ScrollView>
        <VStack p={60} spacing={60}>
          <Flex direction="row">
            <TextView variant="bold" style={styles.heading}>
              {t("loginOptionPage:loginFor")}
            </TextView>
          </Flex>

          <Box>
            <TouchableOpacity
              style={styles.schoolCard}
              onPress={() => navigation.navigate("Login", { type: "school" })}
            >
              <Box style={styles.circleTop} />
              <Box style={styles.circleBottom} />
              <Image
                style={styles.imageSchool as ImageStyle}
                source={imageSources.school}
              />
            </TouchableOpacity>
            <TextView style={styles.name} variant="medium">
              {t("loginOptionPage:school")}
            </TextView>
          </Box>
          <Box>
            <TouchableOpacity
              style={styles.tuitionCard}
              onPress={() => navigation.navigate("Login", { type: "private" })}
            >
              <Box style={[styles.circleTop, styles.custom]} />
              <Box style={[styles.circleBottom, styles.custom]} />
              <Image
                style={styles.imageSchool as ImageStyle}
                source={imageSources.tuition}
              />
            </TouchableOpacity>
            <TextView style={styles.name} variant="medium">
              {t("loginOptionPage:privateTuition")}
            </TextView>
          </Box>
        </VStack>
      </ScrollView>
    </Container>
  );
};

export default LoginOption;
