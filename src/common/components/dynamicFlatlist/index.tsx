import useScreenDimensions from "@common/utils/responsiveDimensions";
import { AnimatedFlashList, ListRenderItem } from "@shopify/flash-list";
import React, { useState } from "react";
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { Box, Spacer } from "react-native-flex-layout";
import EmptyText from "./emptyList";
import { useStyles } from "./index.styles";
type Props<T> = {
  data: T[];
  space?: number;
  renderItem: ListRenderItem<T>;
  loadingMore?: boolean;
  pullRefresh?: boolean;
  onRefresh?: () => void;
  onEnd?: () => void;
  emptyTextTitle?: string;
  itemHeight: number;
  onScrollHandler?: (event: {
    nativeEvent: { contentOffset: { y: number } };
  }) => void;
  containStyles?: StyleProp<ViewStyle>;
};
const DynamicFlatList = <T,>({
  data,
  renderItem,
  space,
  loadingMore = false,
  pullRefresh,
  onRefresh,
  onEnd,
  emptyTextTitle,
  onScrollHandler,
  containStyles,
  itemHeight,
}: Props<T>) => {
  const { styles, theme } = useStyles({});
  const [refreshing, setRefreshing] = useState(false);
  const handleRefresh = () => {
    setRefreshing(true);
    if (onRefresh) onRefresh();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };
  const { height } = useScreenDimensions();
  return (
    <Box style={{ height: height - 140 }}>
      <AnimatedFlashList
        data={data}
        estimatedItemSize={itemHeight}
        ListEmptyComponent={() => (
          <EmptyText visible={!loadingMore} title={emptyTextTitle} />
        )}
        contentContainerStyle={StyleSheet.flatten([
          styles.containList,
          containStyles,
        ])}
        ItemSeparatorComponent={() => <Spacer p={space} />}
        renderItem={renderItem}
        keyExtractor={(_, index) => `${index}`}
        onRefresh={pullRefresh ? () => handleRefresh() : undefined}
        refreshing={refreshing}
        onScroll={onScrollHandler}
        onEndReachedThreshold={0.8}
        onEndReached={!loadingMore && onEnd ? () => onEnd() : null}
        ListFooterComponent={
          <ActivityIndicator
            color={theme.palette.decorative.primary_indigo}
            style={[styles.loader, !loadingMore && styles.disable]}
          />
        }
      />
    </Box>
  );
};

export default DynamicFlatList;
