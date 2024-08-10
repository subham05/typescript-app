import { TextView } from "@common/components/textView";
import React from "react";
import { useTranslation } from "react-i18next";
import { FlatList, ImageSourcePropType } from "react-native";
import { Spacer } from "react-native-flex-layout";
import ChatCard from "../chatCard";
import { useStyles } from "./index.styles";
type DataItem = {
  index: number;
  title: string;
  time: string;
  message: string;
  count: number;
  thumbnail: ImageSourcePropType;
  active: boolean;
};

type DataProps = {
  heading: string;
  data: DataItem[];
  onPress: () => void;
};
const MainChats: React.FC<DataProps> = ({ heading, data, onPress }) => {
  const { styles } = useStyles({});
  const { t } = useTranslation();

  return (
    <FlatList
      ListHeaderComponent={() => (
        <TextView style={styles.head}>{t(`chatPage:${heading}`)}</TextView>
      )}
      keyExtractor={(_, index) => index.toString()}
      data={data}
      ItemSeparatorComponent={() => <Spacer pt={18} />}
      renderItem={({ item }) => (
        <ChatCard
          onPress={onPress}
          active={item.active}
          name={item.title}
          message={item.message}
          count={item.count}
          image={item.thumbnail}
          time={item.time}
        />
      )}
    />
  );
};

export default MainChats;
