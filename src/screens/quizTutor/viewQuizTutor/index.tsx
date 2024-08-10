import { Container } from "@common/components/Container";
import { IconView } from "@common/components/Icon";
import { IconButton } from "@common/components/IconButton";
import FileDownload from "@common/components/fileDownload";
import Header from "@common/components/header";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { TextView } from "@common/components/textView";
import ToggleSwitch from "@common/components/toggleSwitch";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Box, HStack, VStack } from "react-native-flex-layout";
import { SignedInStackPrivateParamList } from "src/navigation/stacks/SignedInStackPrivate";
import { attachments, data } from "./constants";
import { useStyles } from "./index.styles";

type Props = NativeStackScreenProps<
  SignedInStackPrivateParamList,
  "ViewQuizTutor"
>;
const ViewQuizTutor: React.FC<Props> = (props) => {
  const {
    route: {
      params: { live },
    },
  } = props;
  const { styles } = useStyles({});
  const { scrollY, handleScroll } = UseScrollAnimation();
  const [toggle, setToggle] = useState(true);
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
      <Header
        scroll={scrollY}
        title={"View quiz"}
        RenderRightContainer={() =>
          live ? (
            <IconButton
              name="edit"
              size={24}
              onPress={() => props.navigation.navigate("CreateQuiz")}
            />
          ) : null
        }
      />
      <ScrollView
        onScroll={handleScroll}
        contentContainerStyle={styles.contain}
        nestedScrollEnabled
      >
        <VStack spacing={32}>
          {live && (
            <TextView style={styles.alignStyle}>
              Monday, 9 April • 08:00 AM - 09:00 AM
            </TextView>
          )}
          <Box>
            <ToggleSwitch
              disable={true}
              check={toggle}
              onPress={() => setToggle(!toggle)}
            />
          </Box>
          <Box>
            <TextView style={styles.textStyle}>Quiz type</TextView>
            <TextView style={styles.textValue}>
              {live ? "Live" : "Offline"}
            </TextView>
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
            <TextView style={styles.textStyle}>Submission date</TextView>
            <TextView style={styles.textValue}>01/02/2023</TextView>
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
      </ScrollView>
      {live && (
        <Box style={styles.fixed} ph={20}>
          <TouchableOpacity onPress={() => {}} style={styles.primaryBtn}>
            <TextView variant="medium" style={styles.primaryTxt}>
              {"Start at 09:00 AM"}
            </TextView>
          </TouchableOpacity>
        </Box>
      )}
    </Container>
  );
};

export default ViewQuizTutor;
