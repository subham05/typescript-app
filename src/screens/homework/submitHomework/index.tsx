import { Container } from "@common/components/Container/index.tsx";
import { IconView } from "@common/components/Icon";
import BottomButtons from "@common/components/bottomButtons/index.tsx";
import Header from "@common/components/header/index.tsx";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import TextField from "@common/components/textField/index.tsx";
import { TextView } from "@common/components/textView/index.tsx";
import { showToast } from "@common/components/toastMessage/index.ts";
import { NavigationProp } from "@react-navigation/native";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, TouchableOpacity } from "react-native";
import { Box, VStack } from "react-native-flex-layout";
import { SignedInStackPrivateParamList } from "src/navigation/stacks/SignedInStackPrivate.tsx";
import { SignedInStackParamList } from "src/navigation/stacks/SignedInStackSchool.tsx";
import { useUploadHomeworkMutation } from "src/store/services/homework/index.ts";
import DocumentCard from "./components/documentCard";
import { useStyles } from "./index.styles";
import UploadFile from "./util/index.ts";
type FileObject = {
  name: string | null;
  uri: string;
};
type SubmitHomeworkProps = {
  navigation: NavigationProp<
    SignedInStackParamList & SignedInStackPrivateParamList
  >;
};
const SubmitHomeWork: React.FC<SubmitHomeworkProps> = ({ navigation }) => {
  const { styles, theme } = useStyles({});
  const {
    palette: {
      decorative: { primary_indigo },
    },
  } = theme;
  const { t } = useTranslation();
  const { scrollY, handleScroll } = UseScrollAnimation();
  const [note, setNote] = useState("");
  const [files, setFiles] = useState<FileObject[]>([]);
  const [uploadHomework] = useUploadHomeworkMutation();
  const handleUpload = async () => {
    const selected = await UploadFile();
    setFiles((prevState) => [...prevState, ...selected]);
  };
  const handleRemove = (item: FileObject) => {
    const updatedFiles = files.filter((file) => file.uri !== item.uri);
    setFiles(updatedFiles);
  };
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("note", note);
    files.forEach((file, index) => {
      if (file.name && file.uri) {
        formData.append(`file_${index}`, {
          name: file.name,
          uri: file.uri,
        });
      }
    });
    try {
      await uploadHomework(formData).unwrap();
      showToast("Upload successful");
    } catch (error) {
      showToast("Failed to upload");
    }
  };
  return (
    <Container noSpacing>
      <Header
        scroll={scrollY}
        title={t("homeworkSubmitPage:navigationHeading")}
      />
      <ScrollView
        onScroll={handleScroll}
        contentContainerStyle={styles.contain}
        nestedScrollEnabled
      >
        <Box ph={20} pv={32} style={styles.whiteCard}>
          <Box>
            <TextView variant="medium" style={styles.heading}>
              Rise of titans and their war - questions and answers
            </TextView>
            <TextView style={styles.time}>
              <TextView variant="medium">
                {t("homeworkSubmitPage:submissionDate")} :
              </TextView>
              05/05/2023
            </TextView>
          </Box>
          <VStack pv={42}>
            <TextField
              multiline
              value={note}
              onChangeText={setNote}
              label={t("homeworkSubmitPage:notes")}
              placeholder={t("homeworkSubmitPage:type")}
            />
            <TextView style={styles.attachLabel}>
              {t("homeworkSubmitPage:attachFiles")}
            </TextView>
            <TouchableOpacity
              onPress={() => handleUpload()}
              style={styles.uploadBox}
            >
              <Box style={styles.iconContainer}>
                <IconView name="upload" size={24} color={primary_indigo} />
              </Box>
              <TextView variant="light" style={styles.uploadInner}>
                {t("homeworkSubmitPage:upload")}
              </TextView>
            </TouchableOpacity>
          </VStack>
          <VStack style={styles.list}>
            {files.map((item, index) => (
              <DocumentCard
                key={index}
                fileUrl={item.name}
                onPress={() => handleRemove(item)}
              />
            ))}
          </VStack>
        </Box>
      </ScrollView>
      {/* <Box style={styles.fixed} ph={20}>
        <TouchableOpacity style={styles.secondaryBtn}>
          <TextView variant="medium" style={styles.secondaryTxt}>
            {t("common:cancel")}
          </TextView>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleSubmit()}
          style={styles.primaryBtn}
        >
          <TextView variant="medium" style={styles.primaryTxt}>
            {t("homeworkSubmitPage:sendHomework")}
          </TextView>
        </TouchableOpacity>
      </Box> */}
      <BottomButtons
        onSecondaryButtonClick={() => navigation.goBack()}
        primaryButtonTitle={t("homeworkSubmitPage:sendHomework")}
        onPrimaryButtonClick={() => handleSubmit()}
        boxStyle={styles.boxStyle}
      />
    </Container>
  );
};

export default SubmitHomeWork;
