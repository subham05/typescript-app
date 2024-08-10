import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const AUTH = "auth";

interface AuthState {
  userToken: string | null;
  isLoading: boolean;
  isSignOut: boolean;
  signType: string | null;
}

const initialState: AuthState = {
  userToken: null,
  isLoading: true,
  isSignOut: false,
  signType: null,
};

export const authSlice = createSlice({
  name: AUTH,
  initialState,
  reducers: {
    signIn: (
      state,
      action: PayloadAction<{ token: string; signType: string }>
    ) => {
      state.userToken = action.payload.token;
      state.signType = action.payload.signType;
      state.isLoading = false;
    },
    signOut: (state) => {
      state.userToken = null;
      state.isSignOut = true;
      state.signType = null;
    },
    newToken: (state, action: PayloadAction<{ token: string }>) => {
      state.userToken = action.payload.token;
    },
    restoreToken: (
      state,
      action: PayloadAction<{ token: string | null; signType: string | null }>
    ) => {
      state.userToken = action.payload.token;
      state.signType = action.payload.signType;
      state.isLoading = false;
    },
  },
});

// Export actions
export const { signIn, signOut, restoreToken, newToken } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
