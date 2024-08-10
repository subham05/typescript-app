import i18n, { LanguageDetectorAsyncModule } from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "./ar";
import en from "./en";
import es from "./es";
import fr from "./fr";
import pk from "./pk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as RNLocalize from "react-native-localize";
import { STR_KEYS } from "@common/storage";
export const AVAILABLE_LANGUAGES = {
  en,
  ar,
  es,
  fr,
  pk,
};

const AVALAILABLE_LANG_CODES = Object.keys(AVAILABLE_LANGUAGES);

const languageDetector: LanguageDetectorAsyncModule = {
  type: "languageDetector",
  // If this is set to true, your detect function receives a callback function that you should call with your language,
  //useful to retrieve your language stored in AsyncStorage for example
  async: true,
  init: () =>
    // _services: Services,
    // _detectorOptions: object,
    // _i18nextOptions: InitOptions
    {
      /* use services and options */
    },
  detect: (callback: (lng: string) => void) => {
    AsyncStorage.getItem(
      STR_KEYS.APP_LANG,
      (err: undefined | Error | null, lng: string | null | undefined) => {
        //Handle error fetching stored data or no data found
        if (err || !lng) {
          const bestLng = RNLocalize.findBestLanguageTag(
            AVALAILABLE_LANG_CODES
          );

          callback(bestLng?.languageTag ?? "en");
          return;
        }
        callback(lng);
      }
    );
  },
  cacheUserLanguage: (lng: string) => {
    AsyncStorage.setItem(STR_KEYS.APP_LANG, lng);
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    compatibilityJSON: "v3",
    resources: AVAILABLE_LANGUAGES,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
    defaultNS: "common",
  });

export default i18n;
