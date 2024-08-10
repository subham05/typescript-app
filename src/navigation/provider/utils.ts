// authContextFunctions.ts
import { STR_KEYS } from "@common/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppDispatch } from "src/store/hooks";
import {
  signIn as signInFunc,
  signOut as signOutFunc,
} from "../../store/auth/authSlice";
import { walkThroughDone as walkthroughDoneFunc } from "../../store/walkthrough/walkthroughSlice";
export type SignInParams = {
  token: string;
  signType: string;
};
export type WalkthroughParams = {
  isDone: boolean;
};
const useAuthProvider = () => {
  const dispatch = useAppDispatch();

  // Sign In
  const signIn = async ({ token, signType }: SignInParams) => {
    await AsyncStorage.setItem(STR_KEYS.USER_TOKEN, token);
    await AsyncStorage.setItem(STR_KEYS.SIGN_TYPE, signType);
    dispatch(signInFunc({ token, signType }));
  };

  // Sing Out
  const signOut = async () => {
    await AsyncStorage.removeItem(STR_KEYS.USER_TOKEN);
    dispatch(signOutFunc());
  };

  return { signIn, signOut };
};
const useWalkthroughProvider = () => {
  const dispatch = useAppDispatch();

  // Done Walkthrough
  const walkthroughDone = async () => {
    await AsyncStorage.setItem(STR_KEYS.IS_WALKTHROUGH_DONE, "true");
    dispatch(walkthroughDoneFunc({ isDone: true }));
  };

  return { walkthroughDone };
};

export { useAuthProvider, useWalkthroughProvider };
