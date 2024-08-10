import { STR_KEYS, StrKey } from "@common/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { restoreToken } from "src/store/auth/authSlice";
import { useAppDispatch } from "src/store/hooks";

const useAuthBootstrapAsync = () => {
  const dispatch = useAppDispatch();
  const bootstrapAsync = async () => {
    try {
      const AsyncData = await AsyncStorage.multiGet([
        STR_KEYS.APP_LANG,
        STR_KEYS.USER_TOKEN,
        STR_KEYS.SIGN_TYPE,
      ]);
      // const storageKeys = Object.values(AsyncData);
      const storageKeys: StrKey = Object.fromEntries(AsyncData);
      const { USER_TOKEN, SIGN_TYPE } = {
        ...storageKeys,
      };
      dispatch(
        restoreToken({
          token: USER_TOKEN ? USER_TOKEN : null,
          signType: SIGN_TYPE ? SIGN_TYPE : null,
        })
      );
    } catch (e) {
      // Handle error if needed
    }
  };

  return bootstrapAsync; // You can return any value or null based on your needs
};

export default useAuthBootstrapAsync;
