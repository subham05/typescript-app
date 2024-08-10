import { Container } from "@common/components/Container";
import DataSelect from "@common/components/dateTimeSelect";
import Header from "@common/components/header";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import TextField from "@common/components/textField";
import { TextView } from "@common/components/textView";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Box, HStack, VStack } from "react-native-flex-layout";
import { SignedInStackPrivateParamList } from "src/navigation/stacks/SignedInStackPrivate";
import { useStyles } from "./index.styles";
import SelectInputDropdown from "@common/components/selectInputDropdown";
import { data } from "./constants";
import { _isIOS } from "@common/utils/platformCheck";
import { IconView } from "@common/components/Icon";
import { IconButton } from "@common/components/IconButton";

type Props = NativeStackScreenProps<
  SignedInStackPrivateParamList,
  "ScheduleCourseClass"
>;

const ScheduleCourseClass: React.FC<Props> = () => {
  const { styles, theme } = useStyles({});
  const {
    palette: {
      background: { section_bg },
      decorative: { secondary_blush },
    },
  } = theme;
  const { t } = useTranslation();
  const { scrollY, handleScroll } = UseScrollAnimation();
  const [time, setTime] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [session, setSession] = useState<string>("");
  const [courseName, setCourseName] = useState("");
  const timeSelected = useCallback((date: Date) => {
    setTime(date);
  }, []);

  return (
    <Container noSpacing statusBarColor={section_bg} customBg={styles.customBg}>
      <Header
        scroll={scrollY}
        title={"Schedule class"}
        style={styles.customHeader}
        RenderRightContainer={() => <IconButton name="delete" />}
      />
      <KeyboardAvoidingView
        style={styles.keyBoardContainer}
        behavior={_isIOS ? "padding" : undefined}
      >
        <ScrollView
          onScroll={handleScroll}
          contentContainerStyle={styles.contain}
          nestedScrollEnabled
        >
          <VStack spacing={43} pt={10}>
            <VStack spacing={16}>
              <TextView style={styles.heading}>
                Monday, Repeats every week from
              </TextView>
              <HStack style={styles.timeSelect}>
                <DataSelect
                  date={time}
                  mode="TIME"
                  onDateChange={timeSelected}
                  customStyleTime={styles.customTime}
                  customStyleText={styles.customTimeText}
                />
                <Box style={styles.dash} />
                <DataSelect
                  date={time}
                  mode="TIME"
                  onDateChange={timeSelected}
                  customStyleTime={styles.customTime}
                  customStyleText={styles.customTimeText}
                />
              </HStack>
              <HStack>
                <IconView
                  name="help_circle"
                  color={secondary_blush}
                  size={16}
                />
                <TextView style={styles.note}>
                  Selected time is overlapping with other scheduled classes
                </TextView>
              </HStack>
            </VStack>
            <Box>
              <TextField
                value={courseName}
                onChangeText={setCourseName}
                label={"Course name"}
                placeholder={"Enter course"}
              />
            </Box>

            <Box>
              <SelectInputDropdown
                label="Session"
                placeholder="Select Session"
                value={session}
                data={data}
                onChange={(item) => setSession(item.value)}
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
      </KeyboardAvoidingView>
    </Container>
  );
};

export default ScheduleCourseClass;
