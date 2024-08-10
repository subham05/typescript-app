import { Container } from "@common/components/Container";

import Header from "@common/components/header";
import MultiSelectDropdown from "@common/components/multiSelectDropdown";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import TextField from "@common/components/textField";
import { TextView } from "@common/components/textView";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, TouchableOpacity } from "react-native";
import { Box, HStack, VStack } from "react-native-flex-layout";
import { SignedInStackPrivateParamList } from "src/navigation/stacks/SignedInStackPrivate";
import { useStyles } from "./index.styles";
import DataSelect from "@common/components/dateTimeSelect";
import { data, dataShare } from "./constants";

type Props = NativeStackScreenProps<
  SignedInStackPrivateParamList,
  "ScheduleClass"
>;
const ScheduleClass: React.FC<Props> = (props) => {
  const {
    route: {
      params: { Reschedule },
    },
  } = props;
  const { styles } = useStyles({});
  const { t } = useTranslation();
  const { scrollY, handleScroll } = UseScrollAnimation();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [courseName, setCourseName] = useState("");
  const [notes, setNotes] = useState("");
  const [session, setSession] = useState<(string & string[]) | undefined>(
    [] as unknown as string & string[]
  );
  const [shared, setShared] = useState<(string & string[]) | undefined>(
    [] as unknown as string & string[]
  );
  const dateSelected = useCallback((date: Date) => {
    setDate(date);
  }, []);
  const timeSelected = useCallback((date: Date) => {
    setTime(date);
  }, []);
  return (
    <Container noSpacing>
      <Header
        scroll={scrollY}
        title={Reschedule ? "Reschedule class" : "Schedule class"}
      />
      <ScrollView
        onScroll={handleScroll}
        contentContainerStyle={styles.contain}
        nestedScrollEnabled
      >
        <VStack spacing={42} pt={25}>
          <Box>
            <DataSelect
              date={date}
              placeholder="Select date"
              label="Date"
              onDateChange={dateSelected}
            />
            <HStack style={styles.timeSelect}>
              <DataSelect date={time} mode="TIME" onDateChange={timeSelected} />
              <Box style={styles.dash} />
              <DataSelect date={time} mode="TIME" onDateChange={timeSelected} />
            </HStack>
          </Box>
          {Reschedule && (
            <TextView variant="bold" style={styles.details}>
              Class Details
            </TextView>
          )}

          <TextField
            value={courseName}
            onChangeText={setCourseName}
            keyboardType="email-address"
            label={"Course name"}
            placeholder={"Enter course"}
          />
          <Box mt={42}>
            <MultiSelectDropdown
              label="Session"
              placeholder="Select Option"
              length={session?.length}
              value={session}
              data={data}
              onChange={(item) => {
                setSession(item as string & string[]);
              }}
            />
          </Box>
          <Box>
            <MultiSelectDropdown
              label="Share To"
              placeholder="Select Option"
              length={shared?.length}
              value={shared}
              data={dataShare}
              onChange={(item) => {
                setShared(item as string & string[]);
              }}
            />
          </Box>
          <TextField
            value={notes}
            onChangeText={setNotes}
            label={"Notes"}
            multiline
            placeholder={"Type..."}
          />
        </VStack>
      </ScrollView>
      <Box style={styles.fixed} ph={20}>
        <TouchableOpacity style={styles.secondaryBtn}>
          <TextView variant="medium" style={styles.secondaryTxt}>
            {t("common:cancel")}
          </TextView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.primaryBtn}>
          <TextView variant="medium" style={styles.primaryTxt}>
            {t("common:save")}
          </TextView>
        </TouchableOpacity>
      </Box>
    </Container>
  );
};

export default ScheduleClass;
