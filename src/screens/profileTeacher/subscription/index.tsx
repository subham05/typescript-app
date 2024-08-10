import { Container } from "@common/components/Container";
import Header from "@common/components/header";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { TextView } from "@common/components/textView";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, TouchableOpacity } from "react-native";
import { Box, VStack } from "react-native-flex-layout";
import { SignedInStackPrivateParamList } from "src/navigation/stacks/SignedInStackPrivate";
import { useStyles } from "./index.styles";

type Props = NativeStackScreenProps<
  SignedInStackPrivateParamList,
  "ProfileSubscription"
>;
const ProfileSubscription: React.FC<Props> = () => {
  const { styles } = useStyles({});
  const { t } = useTranslation();
  const { scrollY, handleScroll } = UseScrollAnimation();
  return (
    <Container noSpacing>
      <Header scroll={scrollY} title={"Subscription details"} />
      <ScrollView
        onScroll={handleScroll}
        contentContainerStyle={styles.contain}
        nestedScrollEnabled
      >
        <VStack spacing={42} ph={11}>
          <Box>
            <TextView style={styles.title}>Amount paid</TextView>
            <TextView style={styles.subTitle}>170$</TextView>
          </Box>
          <Box>
            <TextView style={styles.title}>Transaction ID</TextView>
            <TextView style={styles.subTitle}>1212121221</TextView>
          </Box>
          <Box>
            <TextView style={styles.title}>Date</TextView>
            <TextView style={styles.subTitle}>23/05/2023</TextView>
          </Box>
        </VStack>
      </ScrollView>
      <Box style={styles.fixed} ph={20}>
        <TouchableOpacity style={styles.secondaryBtn}>
          <TextView variant="medium" style={styles.secondaryTxt}>
            {t("common:cancel")}
          </TextView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.primaryBtn}>
          <TextView variant="medium" style={styles.primaryTxt}>
            {"Update"}
          </TextView>
        </TouchableOpacity>
      </Box>
    </Container>
  );
};

export default ProfileSubscription;
