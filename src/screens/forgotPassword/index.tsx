import { Container } from "@common/components/Container";
import { PrimaryButton } from "@common/components/buttons/primaryButton";
import { BackIconContainer } from "@common/components/header/components/backIcon";
import TextField from "@common/components/textField";
import { TextView } from "@common/components/textView";
import { regEx } from "@common/utils/regEx";
import { NavigationProp } from "@react-navigation/core";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Flex } from "react-native-flex-layout";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SVGComponents from "src/assets/svg";
import { AuthStackParamList } from "src/navigation/stacks/AuthStack";
import { useStyles } from "./index.styles";
type ForgotScreenProps = {
  navigation: NavigationProp<AuthStackParamList>;
};
const ForgotPassword: React.FC<ForgotScreenProps> = ({ navigation }) => {
  const { styles } = useStyles({});
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = () => {
    if (!regEx.email.test(email) || email == "") {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <Container noSpacing>
      <KeyboardAwareScrollView contentContainerStyle={[styles.container]}>
        <Flex direction="row" pl={10} pt={10}>
          <BackIconContainer onPress={() => navigation.goBack()} />
        </Flex>
        <Box style={styles.top}>
          <SVGComponents.ForgotPassword />
        </Box>
        <Box ph={20} pb={30}>
          <TextView variant="black" style={styles.heading}>
            {t("forgotPasswordPage:head")}
          </TextView>
          <TextView variant="light" style={styles.desc}>
            {t("forgotPasswordPage:subTitle")}
          </TextView>
          <TextField
            value={email}
            onPressIn={() => setError(false)}
            onChangeText={setEmail}
            keyboardType="email-address"
            label={t("common:emailLabel")}
            placeholder={t("common:emailPlaceholder")}
            isError={error}
            ErrorText={
              email == ""
                ? "Please enter email-address"
                : "Enter valid email-address"
            }
          />
        </Box>
        <Box ph={20} pb={50}>
          <PrimaryButton
            width={103}
            title={t("common:submit")}
            style={styles.btnLogin}
            onPress={() => {
              handleSubmit();
            }}
          />
        </Box>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default ForgotPassword;
