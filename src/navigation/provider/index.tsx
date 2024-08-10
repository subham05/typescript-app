import React, { ReactNode, createContext, useMemo } from "react";
import {
  SignInParams,
  WalkthroughParams,
  useAuthProvider,
  useWalkthroughProvider,
} from "./utils";

interface IContextProps {
  signIn: ({ token, signType }: SignInParams) => void;
  signOut: () => void;
}

interface walkthroughContextProps {
  walkthroughDone: ({ isDone }: WalkthroughParams) => void;
}

export const AuthContext = createContext({} as IContextProps);
export const WalkthroughContext = createContext({} as walkthroughContextProps);

export const ProviderWrapper: React.FC<{ children: ReactNode }> = (props) => {
  const { signIn, signOut } = useAuthProvider();
  const { walkthroughDone } = useWalkthroughProvider();

  const authContext = useMemo(() => ({ signIn, signOut }), []);
  const walkthroughContext = useMemo(() => ({ walkthroughDone }), []);

  return (
    <WalkthroughContext.Provider value={walkthroughContext}>
      <AuthContext.Provider value={authContext}>
        {props.children}
      </AuthContext.Provider>
    </WalkthroughContext.Provider>
  );
};
