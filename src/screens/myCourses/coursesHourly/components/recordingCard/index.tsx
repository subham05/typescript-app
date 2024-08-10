import { TextView } from "@common/components/textView";
import CustomFilterCard from "@common/components/filter/customFilterCard";
import { SelectDropdown } from "@common/components/filter/selectDropdown";
import { recordDrop } from "@screens/recordings/constants";
import React from "react";
import { Image, ImageProps, ImageStyle, TouchableOpacity } from "react-native";
import { Box } from "react-native-flex-layout";
import { useStyles } from "./index.styles";

type RecordingCardProps = {
  id?: number;
  thumbnail?: ImageProps;
  duration?: string;
  title?: string;
  time?: string;
  uploadedBy?: string;
  uploadedTime?: string;
  onPress?: () => void;
  onChange?: (id: number, change: string) => void;
};

const RecordingCard: React.FC<RecordingCardProps> = ({
  id,
  thumbnail,
  duration,
  title,
  time,
  uploadedTime,
  onChange,
  onPress,
}) => {
  const { styles } = useStyles({});

  const handleSelect = (id: number | undefined, change: string) => {
    if (id !== undefined && onChange) {
      onChange(id, change);
    }
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Box style={styles.cardImg}>
        <Image style={styles.imgSize as ImageStyle} source={thumbnail} />
        <SelectDropdown
          containerStyle={styles.customDropStyle}
          style={styles.filter}
          data={recordDrop}
          renderItem={(item) => <CustomFilterCard title={item.label} />}
          onChange={(item) => {
            handleSelect(id, item.value);
          }}
        />
        <Box pv={8} ph={12} style={styles.cardDuration}>
          <TextView style={styles.duration}>{duration}</TextView>
        </Box>
        <Box pv={20} ph={22} style={styles.cardOverlap}>
          <Box style={styles.cardBottom}>
            <TextView variant="medium" style={styles.title}>
              {title}
            </TextView>
          </Box>
          <Box style={styles.moreInfo}>
            <TextView style={styles.name}>
              {time} {uploadedTime}
            </TextView>
          </Box>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default RecordingCard;
