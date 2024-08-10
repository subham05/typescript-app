import { Container } from "@common/components/Container/index.tsx";
import { TextView } from "@common/components/textView/index.tsx";
import { STR_KEYS } from "@common/storage/index.ts";
import i18n from "@common/translation/localization.ts";
import { Language } from "@common/translation/utils/constants.ts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, I18nManager, Image, ImageStyle } from "react-native";
import { Spacer } from "react-native-flex-layout";
import RNRestart from "react-native-restart";
import { imageSources } from "src/assets/images/index.ts";
import { WalkthroughContext } from "src/navigation/provider/index.tsx";
import { AuthStackParamList } from "src/navigation/stacks/AuthStack.tsx";
import { WalkthroughStackParamList } from "src/navigation/stacks/WalkthroughStack.tsx";
import LanguageCard from "./components/languageCard";
import { Languages } from "./constants.ts";
import { useStyles } from "./index.styles";

type LanguageScreenProps = CompositeScreenProps<
  NativeStackScreenProps<WalkthroughStackParamList, "SelectLanguage">,
  NativeStackScreenProps<AuthStackParamList>
>;
const SelectLanguage: React.FC<LanguageScreenProps> = () => {
  const { walkthroughDone } = useContext(WalkthroughContext);
  const { styles } = useStyles({});

  const handleLanguage = async (lngCode: string) => {
    if (i18n.language === lngCode) {
      i18n.changeLanguage(lngCode);
      await AsyncStorage.setItem(STR_KEYS.APP_LANG, lngCode);
      walkthroughDone({ isDone: true });
      // navigation.navigate("LoginOption");
    } else {
      i18n.changeLanguage(lngCode);
      await AsyncStorage.setItem(STR_KEYS.APP_LANG, lngCode);
      I18nManager.forceRTL(
        lngCode === Language.Arabic || lngCode === Language.Pakistan
          ? true
          : false
      );
      RNRestart.Restart();
    }
  };
  const { t } = useTranslation();
  return (
    <Container noSpacing>
      <FlatList
        contentContainerStyle={styles.container}
        keyExtractor={(item) => item.index.toString()}
        ItemSeparatorComponent={() => <Spacer p={8} />}
        data={Languages}
        ListHeaderComponent={() => (
          <>
            <Image
              style={styles.img as ImageStyle}
              source={imageSources.languageCover}
            />
            <TextView variant="bold" style={styles.text}>
              {t("demoPage:head")}
            </TextView>
          </>
        )}
        renderItem={({ item }) => (
          <LanguageCard
            onPress={() => handleLanguage(item.flagName)}
            flagName={item.flagName}
            title={item.language}
          />
        )}
      />
    </Container>
  );
};

export default SelectLanguage;
