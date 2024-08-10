import { TextView } from "@common/components/textView";
import React from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import { TouchableOpacity } from "react-native";
import { useStyles } from "./index.styles";
interface dayProps {
  day: Date;
  currentDate: Date;
  onPress?: () => void;
}
const DayCard: React.FC<dayProps> = ({ day, onPress, currentDate }) => {
  const { styles } = useStyles({});
  const { i18n } = useTranslation(); // Get the current i18n instance

  const currentLanguage = i18n.language;
  const formatDate = (date: Date) => {
    return date.toLocaleDateString(currentLanguage, { day: "numeric" });
  };
  const formatDay = (date: Date) => {
    return date.toLocaleDateString(currentLanguage, { weekday: "short" });
  };
  return (
    <I18nextProvider i18n={i18n}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.dayCard,
          day?.getDate() === currentDate.getDate() && styles.currentDate,
        ]}
      >
        <TextView
          style={[
            styles.day,
            day?.getDate() === currentDate.getDate() && styles.currentDateText,
          ]}
        >
          {formatDay(day)}
        </TextView>
        <TextView
          variant="bold"
          style={[
            styles.date,
            day?.getDate() === currentDate.getDate() && styles.currentDateText,
          ]}
        >
          {formatDate(day)}
        </TextView>
      </TouchableOpacity>
    </I18nextProvider>
  );
};

export default DayCard;
