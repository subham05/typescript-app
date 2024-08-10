import { IconView } from "@common/components/Icon";
import { TextView } from "@common/components/textView";
import React from "react";
import { HStack } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
import { IconSetEnum } from "@common/components/Icon/enums";

type CustomProps = {
  title: string;
};

const iconMap: { [key: string]: string } = {
  Day: "day",
  Week: "week",
  Yearly: "year",
  Monthly: "month",
  Share: "share",
  Download: "download",
};

const CustomFilterCard: React.FC<CustomProps> = ({ title }) => {
  const { styles } = useStyles({});
  const iconName = iconMap[title] || "month";

  return (
    <HStack style={styles.customList}>
      <IconView name={iconName as keyof typeof IconSetEnum} />
      <TextView variant="medium" style={styles.customDropText}>
        {title}
      </TextView>
    </HStack>
  );
};

export default CustomFilterCard;
