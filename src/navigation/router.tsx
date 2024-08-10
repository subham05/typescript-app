import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect } from "react";
import BootSplash from "react-native-bootsplash";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import useAuthBootstrapAsync from "./hooks";
import { NetworkProvider } from "./networkProvider";
import { ProviderWrapper } from "./provider";
import { AuthStack } from "./stacks/AuthStack";
import { SignedInStackSchool } from "./stacks/SignedInStackSchool";
import { SignedInStackPrivate } from "./stacks/SignedInStackPrivate";
import { WalkthroughStack } from "./stacks/WalkthroughStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STR_KEYS } from "@common/storage";
import { walkThroughDone } from "src/store/walkthrough/walkthroughSlice";
const Router = () => {
  const dispatch = useAppDispatch();
  const authContextState = useAppSelector((state) => state.authReducer);
  const walkthroughContextState = useAppSelector(
    (state) => state.walkthroughReducer
  );
  const PRIVATE = "private";
  const { userToken, signType } = authContextState;
  const { isWalkthroughDone } = walkthroughContextState;

  useEffect(() => {
    AsyncStorage.getItem(STR_KEYS.IS_WALKTHROUGH_DONE).then((res) => {
      if (res) {
        const isWalkthroughDone = JSON.parse(res!);
        dispatch(walkThroughDone({ isDone: isWalkthroughDone }));
      }
    });
  }, []);

  const bootstrapAsync = useAuthBootstrapAsync();
  useEffect(() => {
    bootstrapAsync();
  }, []);
  const { isLoading } = useAppSelector((state) => state.authReducer);
  useEffect(() => {
    setTimeout(() => !isLoading && BootSplash.hide({ fade: true }), 2000);
  }, [isLoading]);

  return (
    <NetworkProvider>
      <ProviderWrapper>
        {!isLoading && (
          <NavigationContainer>
            {!isWalkthroughDone ? (
              <WalkthroughStack />
            ) : userToken == null ? (
              <AuthStack />
            ) : signType === PRIVATE ? (
              <SignedInStackPrivate />
            ) : (
              <SignedInStackSchool />
            )}
          </NavigationContainer>
        )}
      </ProviderWrapper>
    </NetworkProvider>
  );
};

export default Router;
