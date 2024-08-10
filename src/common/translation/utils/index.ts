import i18n from "../localization";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Translate = (key: any) => {
  const result = i18n.t(key);
  return result;
};

export default Translate;
