import { Container } from "@common/components/Container";

import { IconView } from "@common/components/Icon";
import DataSelect from "@common/components/dateTimeSelect";
import Header from "@common/components/header";
import MultiSelectDropdown from "@common/components/multiSelectDropdown";
import SelectInputDropdown from "@common/components/selectInputDropdown";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import TextField from "@common/components/textField";
import { TextView } from "@common/components/textView";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, TouchableOpacity } from "react-native";
import { Box, VStack } from "react-native-flex-layout";
import { SignedInStackPrivateParamList } from "src/navigation/stacks/SignedInStackPrivate";
import { data, data1 } from "./constants";
import { useStyles } from "./index.styles";
import uploadFile from "./util";
import DocumentCard from "./components/documentCard";
import ToggleSwitch from "@common/components/toggleSwitch";

type Props = NativeStackScreenProps<
  SignedInStackPrivateParamList,
  "CreateQuiz"
>;
type FileObject = {
  name: string | null;
  uri: string;
};
const CreateQuiz: React.FC<Props> = () => {
  const { styles, theme } = useStyles({});
  const {
    palette: {
      decorative: { primary_indigo },
    },
  } = theme;
  const { t } = useTranslation();
  const { scrollY, handleScroll } = UseScrollAnimation();
  const [date, setDate] = useState(new Date());
  const [quizTitle, setQuizTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [toggle, setToggle] = useState(true);
  const [files, setFiles] = useState<FileObject[]>([]);
  const [course, setCourse] = useState<(string & string[]) | undefined>(
    [] as unknown as string & string[]
  );
  const [session1, setSession1] = useState<string>("");
  const dateSelected = useCallback((date: Date) => {
    setDate(date);
  }, []);
  const handleUpload = async () => {
    const selected = await uploadFile();
    setFiles((prevState) => [...prevState, ...selected]);
  };
  const handleRemove = (item: FileObject) => {
    const updatedFiles = files.filter((file) => file.uri !== item.uri);
    setFiles(updatedFiles);
  };
  return (
    <Container noSpacing>
      <Header scroll={scrollY} title={"Create quiz"} />
      <ScrollView
        onScroll={handleScroll}
        contentContainerStyle={styles.contain}
        nestedScrollEnabled
      >
        <ToggleSwitch check={toggle} onPress={() => setToggle(!toggle)} />
        <VStack spacing={42} pt={26}>
          <Box>
            <SelectInputDropdown
              label="Quiz type"
              placeholder="Select Quiz type"
              value={session1}
              data={data1}
              onChange={(item) => setSession1(item.value)}
            />
          </Box>
          <Box>
            <MultiSelectDropdown
              label="Courses"
              placeholder="Enter courses"
              length={course?.length}
              value={course}
              data={data}
              onChange={(item) => {
                setCourse(item as string & string[]);
              }}
            />
          </Box>
          <Box>
            <TextField
              value={quizTitle}
              onChangeText={setQuizTitle}
              label={"Quiz title"}
              placeholder={"Enter Quiz title"}
            />
          </Box>

          <Box>
            <DataSelect
              date={date}
              placeholder="Select date"
              label="Submission date"
              onDateChange={dateSelected}
            />
          </Box>

          <TextField
            value={notes}
            onChangeText={setNotes}
            label={"Note (Optional)"}
            multiline
            placeholder={"Type..."}
          />
          <Box mt={42}>
            <TextView style={styles.attachLabel}>{"Attach file"}</TextView>
            <TouchableOpacity
              onPress={() => handleUpload()}
              style={styles.uploadBox}
            >
              <VStack center mh={20}>
                <Box style={styles.iconContainer}>
                  <IconView name="upload" size={24} color={primary_indigo} />
                </Box>
                <TextView variant="light" style={styles.uploadInner}>
                  {"Upload"}
                </TextView>
              </VStack>
              <VStack center mh={20}>
                <Box style={styles.iconContainer}>
                  <IconView name="attach" size={24} color={primary_indigo} />
                </Box>
                <TextView variant="light" style={styles.uploadInner}>
                  {"Link"}
                </TextView>
              </VStack>
            </TouchableOpacity>
          </Box>
          <Box>
            {files.length > 0 && (
              <TextView style={styles.attachLabel}>{"Attachment"}</TextView>
            )}

            <VStack mt={16} style={styles.list}>
              {files.map((item, index) => (
                <DocumentCard
                  key={index}
                  fileUrl={item.name}
                  onPress={() => handleRemove(item)}
                />
              ))}
            </VStack>
          </Box>
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
            {"Create"}
          </TextView>
        </TouchableOpacity>
      </Box>
    </Container>
  );
};

export default CreateQuiz;
