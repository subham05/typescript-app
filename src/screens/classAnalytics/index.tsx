import { Container } from "@common/components/Container";
import Header from "@common/components/header";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import React from "react";
import { Box, HStack, Spacer } from "react-native-flex-layout";
import Animated from "react-native-reanimated";
import AnalyticsCard from "./components/analyticsCard";
import { dummyAnalytics } from "./constants";
import { useStyles } from "./index.styles";
import { TextView } from "@common/components/textView";

const ClassAnalytics = () => {
  const { styles } = useStyles({});
  const { scrollY, handleScroll } = UseScrollAnimation();
  return (
    <Container noSpacing>
      <Header title={"Class analytics"} scroll={scrollY} />
      <Animated.FlatList
        onScroll={handleScroll}
        data={dummyAnalytics}
        ListHeaderComponent={() => (
          <Box mb={27}>
            <TextView style={styles.head} variant="medium">
              Mathematics
            </TextView>
            <TextView>Arlene McCoy, 20/04/2023 ; 11:39 AM</TextView>
            <HStack mt={7}>
              <TextView variant="medium">Duration</TextView>
              <TextView> 00:01:15</TextView>
            </HStack>
          </Box>
        )}
        contentContainerStyle={styles.listContain}
        ItemSeparatorComponent={() => <Spacer pb={12} />}
        renderItem={({ item }) => (
          <AnalyticsCard
            name={item.name}
            attendance={item.attendance}
            onlineTime={item.onlineTime}
            talkTime={item.talkTime}
            webcamTime={item.webcamTime}
            raisedHand={item.raisedHand}
            messages={item.messages}
          />
        )}
      />
    </Container>
  );
};

export default ClassAnalytics;
