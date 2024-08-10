import { Container } from "@common/components/Container";
import { IconView } from "@common/components/Icon";
import FileDownload from "@common/components/fileDownload";
import Header from "@common/components/header";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { TextView } from "@common/components/textView";
import Tab from "@common/components/topTabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Box, HStack, VStack } from "react-native-flex-layout";
import { SignedInStackPrivateParamList } from "src/navigation/stacks/SignedInStackPrivate";
import { attachments, data } from "./constants";
import { useStyles } from "./index.styles";
import TextField from "@common/components/textField";
import { CommonModal } from "@common/components/modal";

type Props = NativeStackScreenProps<
  SignedInStackPrivateParamList,
  "ViewSubmission"
>;
const ViewSubmission: React.FC<Props> = () => {
  const { styles } = useStyles({});
  const { scrollY, handleScroll } = UseScrollAnimation();
  const [tab, setTab] = useState(1);
  const handleTabChange = (tab: number) => {
    setTab(tab);
  };
  const [isModalVisible, setModalVisible] = useState(false);
  const [note, setNote] = useState("");
  const CoursesItem = (item: { key: number; label: string; value: string }) => {
    return (
      <Box style={styles.selectedStyle}>
        <TextView style={styles.textSelectedStyle}>{item.label}</TextView>
        <IconView name="remove" />
      </Box>
    );
  };
  return (
    <Container noSpacing>
      <Header title={"View submissions"} />
      <Tab
        tabLeftName={"Submission info"}
        tabRightName={"Quiz info"}
        scroll={scrollY}
        onTabChange={handleTabChange}
      />
      <ScrollView
        onScroll={handleScroll}
        contentContainerStyle={styles.contain}
        nestedScrollEnabled
      >
        {tab == 1 ? (
          <VStack spacing={32}>
            <Box>
              <TextView style={styles.textStyle}>Submission by</TextView>
              <TextView style={styles.textValue}>Alex Smith</TextView>
            </Box>
            <VStack spacing={42}>
              <Box>
                {attachments.length > 0 && (
                  <TextView style={styles.attachLabel}>Attached files</TextView>
                )}

                <VStack mt={16} style={styles.list}>
                  {attachments.map((_, index) => (
                    <FileDownload key={index} fileUrl={""} />
                  ))}
                </VStack>
              </Box>
            </VStack>
            <Box>
              <TextView style={styles.textStyle}>Submission date</TextView>
              <TextView style={styles.textValue}>01/02/2023</TextView>
            </Box>
            <Box>
              <TextView style={styles.textStyle}>Note</TextView>
              <TextView style={styles.textValue}>
                Hello teacher, here I have attached the copy of my Quiz.
              </TextView>
            </Box>
          </VStack>
        ) : (
          <VStack spacing={32}>
            <Box>
              <TextView style={styles.textStyle}>Quiz type</TextView>
              <TextView style={styles.textValue}>Offline</TextView>
            </Box>
            <Box>
              <TextView style={styles.textStyle}>Courses</TextView>
              <HStack wrap>
                {data.map((item, index) => (
                  <CoursesItem
                    key={index}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </HStack>
            </Box>
            <Box>
              <TextView style={styles.textStyle}>Quiz title</TextView>
              <TextView style={styles.textValue}>
                Quiz on pythagoras theorem
              </TextView>
            </Box>
            <Box>
              <TextView style={styles.textStyle}>Note (Optional)</TextView>
              <TextView style={styles.textValue}>
                @all students, we were completed the the third unit of your
                course. Solve all the equations which are given on page no 60. I
                have attached the copy as well for your reference.
              </TextView>
            </Box>

            <VStack spacing={42}>
              <Box>
                {attachments.length > 0 && (
                  <TextView style={styles.attachLabel}>Attached files</TextView>
                )}

                <VStack mt={16} style={styles.list}>
                  {attachments.map((_, index) => (
                    <FileDownload key={index} fileUrl={""} />
                  ))}
                </VStack>
              </Box>
            </VStack>
          </VStack>
        )}
      </ScrollView>
      {tab === 2 && (
        <Box style={styles.fixed} ph={20}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.secondaryBtn}
          >
            <TextView variant="medium" style={styles.secondaryTxt}>
              {"Reject"}
            </TextView>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.primaryBtn}>
            <TextView variant="medium" style={styles.primaryTxt}>
              {"Accept"}
            </TextView>
          </TouchableOpacity>
        </Box>
      )}
      <CommonModal
        style={styles.answerModal}
        isModalVisible={isModalVisible}
        onPress={() => setModalVisible(false)}
        title="Reject reason"
      >
        <ScrollView contentContainerStyle={styles.answerContainer}>
          <TextField
            multiline
            value={note}
            onChangeText={setNote}
            label={"Add rejection comment"}
            placeholder={"Type..."}
          />
        </ScrollView>
        <Box style={styles.fixed} ph={20}>
          <TouchableOpacity style={styles.secondaryBtn}>
            <TextView variant="medium" style={styles.secondaryTxt}>
              {"Cancel"}
            </TextView>
          </TouchableOpacity>
          <TouchableOpacity style={styles.primaryBtn}>
            <TextView variant="medium" style={styles.primaryTxt}>
              {"Send for rework"}
            </TextView>
          </TouchableOpacity>
        </Box>
      </CommonModal>
    </Container>
  );
};

export default ViewSubmission;
