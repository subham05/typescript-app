export type Data = {
  data: {
    accessToken: string;
    refreshToken: string;
  };
};

export type RootObject = {
  success: boolean;
  message: string;
  data: Data;
};
