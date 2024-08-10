export enum STR_KEYS {
  APP_LANG = "APP_LANG",
  USER_TOKEN = "USER_TOKEN",
  SIGN_TYPE = "SIGN_TYPE",
  IS_WALKTHROUGH_DONE = "IS_WALKTHROUGH_DONE",
}
export type StrKey = { [key in STR_KEYS]?: string | null };
