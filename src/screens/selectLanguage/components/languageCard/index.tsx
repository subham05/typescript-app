import { TextView } from "@common/components/textView";
import { Language } from "@common/translation/utils/constants";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Flex } from "react-native-flex-layout";
import SVGComponents from "src/assets/svg";
import { useStyles } from "./index.styles";
interface LanguageCardProps {
  flagName?: string;
  title?: string;
  onPress?: () => void;
}
const LanguageCard: React.FC<LanguageCardProps> = ({
  flagName,
  title,
  onPress,
}) => {
  const { styles } = useStyles({});
  const renderFlagComponent = () => {
    switch (flagName) {
      case Language.English:
        return <SVGComponents.Gb />;
      case Language.Arabic:
        return <SVGComponents.Jo />;
      case Language.Spanish:
        return <SVGComponents.Es />;
      case Language.French:
        return <SVGComponents.Fr />;
      case Language.Pakistan:
        return <SVGComponents.Pk />;
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Flex p={20} style={styles.cardStyle}>
        {renderFlagComponent()}
        <TextView variant="medium" style={styles.text}>
          {title}
        </TextView>
      </Flex>
    </TouchableOpacity>
  );
};

export default LanguageCard;
