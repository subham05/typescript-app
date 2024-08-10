import { Container } from "@common/components/Container";
import { IconButton } from "@common/components/IconButton";
import BottomButtons from "@common/components/bottomButtons";
import Header from "@common/components/header";
import { TextView } from "@common/components/textView";
import React from "react";
import { useTranslation } from "react-i18next";
import { ScrollView } from "react-native";
import { Box, HStack, VStack } from "react-native-flex-layout";
import ScheduleCard from "./components/scheduleCard";
import { scheduleList } from "./constants";
import { useStyles } from "./index.styles";

const ViewSchedule = () => {
  const { styles } = useStyles({});
  const { t } = useTranslation();

  return (
    <Container noSpacing>
      <Header
        title={t("viewSchedulePage:navigationHeading")}
        RenderRightContainer={() => <IconButton name="share" size={24} />}
      />
      {/* <DetailsLoader /> */}
      <ScrollView contentContainerStyle={styles.contain} nestedScrollEnabled>
        <Box ph={20} pv={32} style={styles.whiteCard}>
          <HStack spacing={16}>
            <Box style={styles.block} />
            <Box style={styles.headingRight}>
              <TextView variant="medium" style={styles.heading}>
                Daily class
              </TextView>
              <TextView style={styles.time}>
                Posted on : 05/05/2023, 02:40 PM
              </TextView>
            </Box>
          </HStack>

          <VStack pt={46} style={styles.gap}>
            {scheduleList.map((item) => (
              <ScheduleCard
                key={item.index.toString()}
                title={item.title}
                subtitle={item.subtitle}
                index={item.index}
              />
            ))}
          </VStack>
        </Box>
      </ScrollView>
      <BottomButtons joinAt={true} joinTime={"09:05 AM"} />
    </Container>
  );
};

export default ViewSchedule;
