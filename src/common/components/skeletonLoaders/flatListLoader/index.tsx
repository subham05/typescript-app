import React from "react";
import { FlatList, ViewStyle } from "react-native";
type Props = {
  RenderItem: () => React.ReactNode;
  flatListStyle?: ViewStyle;
  count: number;
  ListHeaderComponent?: React.ComponentType | React.ReactElement | null;
};

const CustomFlatListLoader: React.FC<Props> = ({
  RenderItem,
  flatListStyle,
  count,
  ListHeaderComponent,
  ...props
}) => {
  const data = Array(count);
  return (
    <FlatList
      contentContainerStyle={flatListStyle}
      data={data}
      ListHeaderComponent={ListHeaderComponent}
      renderItem={() => <RenderItem />}
      keyExtractor={(_, index) => index.toString()}
      {...props}
    />
  );
};
export default CustomFlatListLoader;
