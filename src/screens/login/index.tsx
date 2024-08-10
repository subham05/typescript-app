import { Container } from "@common/components/Container";
import { IconView } from "@common/components/Icon";
import { PrimaryButton } from "@common/components/buttons/primaryButton";
import TextField from "@common/components/textField";
import { TextView } from "@common/components/textView";
import { showToast } from "@common/components/toastMessage";
import { regEx } from "@common/utils/regEx";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";
import { Box } from "react-native-flex-layout";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SVGComponents from "src/assets/svg";
import { AuthContext } from "src/navigation/provider";
import { AuthStackParamList } from "src/navigation/stacks/AuthStack";
import { useStyles } from "./index.styles";

type Props = NativeStackScreenProps<AuthStackParamList, "Login">;
const Login: React.FC<Props> = (props) => {
  const {
    route: {
      params: { type },
    },
  } = props;
  const { styles, theme } = useStyles({});
  const { t } = useTranslation();
  const [lock, setLock] = useState(true);
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const handleSubmit = () => {
    if (email === "" && password === "") {
      setError(true);
      setErrorPassword(true);
    } else if (!regEx.email.test(email) || email === "") {
      setError(true);
    } else if (password === "") {
      setErrorPassword(true);
    } else if (!regEx.password.test(password)) {
      setErrorPassword(true);
    } else {
      setError(false);
      signIn({ token: "dummy-auth-token", signType: type });
      showToast("Log in successful !!");
    }
  };

  return (
    <Container noSpacing>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.container}
        overScrollMode="never"
      >
        <Box style={styles.top}>
          <SVGComponents.LoginMain style={styles.main} />
          <SVGComponents.LoginCover style={styles.back} />
        </Box>
        <Box style={styles.mainBox}>
          <Box ph={20} pb={20}>
            <TextView variant="black" style={styles.heading}>
              {t("loginPage:head")}
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
            <Box mt={30}>
              <TextField
                value={password}
                onChangeText={setPassword}
                onPressIn={() => setErrorPassword(false)}
                label={t("common:passwordLabel")}
                placeholder={t("common:passwordPlaceholder")}
                isPassword={lock}
                isError={errorPassword}
                ErrorText={
                  password == ""
                    ? "Please enter password"
                    : "Password not strong"
                }
                RenderRightContainer={() => (
                  <TouchableOpacity
                    style={password == "" && styles.disable}
                    onPress={() => setLock(!lock)}
                  >
                    <IconView
                      name={lock ? "view_off" : "eye"}
                      color={theme.palette.text.secondary}
                      size={24}
                    />
                  </TouchableOpacity>
                )}
              />
            </Box>

            <TouchableOpacity
              style={styles.forgotBtn}
              onPress={() => props.navigation.navigate("ForgotPassword")}
            >
              <TextView style={styles.forgot}>
                {t("loginPage:forgotPassword")}
              </TextView>
            </TouchableOpacity>
          </Box>
          <Box ph={20} pb={50}>
            <PrimaryButton
              width={92}
              title={t("loginPage:btnText")}
              style={styles.btnLogin}
              onPress={() => handleSubmit()}
            />
          </Box>
        </Box>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default Login;
