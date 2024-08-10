import { PrimaryButton } from "@common/components/buttons/primaryButton";
import { IconView } from "@common/components/Icon";
import { TextView } from "@common/components/textView";
import React from "react";
import { useTranslation } from "react-i18next";
import { Image, ImageProps, ImageStyle } from "react-native";
import { HStack, VStack } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
export type MarketPlaceCardProps = {
  title?: string;
  description?: string;
  authorName?: string;
  time?: string;
  rating?: string;
  price?: string;
  thumbnail?: ImageProps | string;
  onPress: () => void;
};
const MarketPlaceCard: React.FC<MarketPlaceCardProps> = ({
  title,
  description,
  authorName,
  time,
  rating,
  onPress,
  price,
  thumbnail,
}) => {
  const { styles, theme } = useStyles({});
  const { t } = useTranslation();
  const {
    palette: {
      decorative: { tertiary_mustard },
    },
  } = theme;
  return (
    <VStack style={styles.card}>
      <Image
        style={styles.thumbnail as ImageStyle}
        source={thumbnail as ImageProps}
      />
      <TextView variant="medium" style={styles.heading}>
        {title}
      </TextView>
      <TextView style={styles.desc}>{description}</TextView>
      <TextView style={styles.author}>
        {t("common:by")} {authorName}
      </TextView>
      <TextView style={styles.time}>{time}</TextView>
      <HStack style={styles.rating}>
        <TextView variant="medium" style={styles.ratingText}>
          {rating}
        </TextView>
        <IconView name="star_filled" size={16} color={tertiary_mustard} />
      </HStack>
      <HStack style={styles.bottom}>
        <TextView variant="medium" style={styles.price}>
          {price}
        </TextView>
        <PrimaryButton
          style={styles.btn}
          title="View Details"
          onPress={onPress}
        />
      </HStack>
    </VStack>
  );
};

export default MarketPlaceCard;
