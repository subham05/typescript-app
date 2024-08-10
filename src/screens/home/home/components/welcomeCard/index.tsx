import React from "react";
import { Box } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
import { TextView } from "@common/components/textView";
import { Image, ImageStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { imageSources } from "src/assets/images";
import SVGComponents from "src/assets/svg";
import moment from "moment";
import { DateTimeFormats } from "@common/utils/dateFormat/dateTimeFormats";
type WelcomeProps = {
  name?: string;
};
const WelcomeCard: React.FC<WelcomeProps> = ({ name }) => {
  const { styles, theme } = useStyles({});
  const currentMonth = moment().format(DateTimeFormats.longMonth).toUpperCase();
  const currentDate = moment().format(DateTimeFormats.date);
  const currentDay = moment().format(DateTimeFormats.day);
  return (
    <Box ph={20}>
      <Box style={styles.topDate}>
        <Box style={styles.month}>
          <TextView variant="medium" style={styles.monthText}>
            {currentMonth}
          </TextView>
        </Box>
        <TextView variant="bold" style={styles.dateText}>
          {currentDate}
        </TextView>
        <TextView variant="bold" style={styles.dayText}>
          {currentDay}
        </TextView>
      </Box>
      <LinearGradient
        colors={[
          `${theme.gradient.greetings.start}`,
          `${theme.gradient.greetings.end}`,
        ]}
        style={styles.welcome}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      >
        <SVGComponents.WelcomeWave style={styles.welcomeWave} />
        <TextView variant="bold" style={styles.welcomeText}>
          Hello,
        </TextView>
        <TextView variant="bold" style={styles.welcomeTextName}>
          {name}!!
        </TextView>
        <Image
          style={styles.welcomeImg as ImageStyle}
          source={imageSources.welcome}
        />
      </LinearGradient>
    </Box>
  );
};

export default WelcomeCard;
