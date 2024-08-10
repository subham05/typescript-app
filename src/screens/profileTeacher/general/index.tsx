import { Container } from "@common/components/Container";
import Header from "@common/components/header";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { TextView } from "@common/components/textView";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, TouchableOpacity } from "react-native";
import { Box, VStack } from "react-native-flex-layout";
import { SignedInStackPrivateParamList } from "src/navigation/stacks/SignedInStackPrivate";
import { useStyles } from "./index.styles";
import TextField from "@common/components/textField";

type Props = NativeStackScreenProps<
  SignedInStackPrivateParamList,
  "ProfileGeneral"
>;
const ProfileGeneral: React.FC<Props> = () => {
  const { styles } = useStyles({});
  const { t } = useTranslation();
  const { scrollY, handleScroll } = UseScrollAnimation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [alternateContact, setAlternateContact] = useState("");
  const [subject, setSubject] = useState("");
  const [Qualification, setQualification] = useState("");
  const [experience, setExperience] = useState("");
  const [language, setLanguage] = useState("");
  return (
    <Container noSpacing>
      <Header scroll={scrollY} title={"Address"} />
      <ScrollView
        onScroll={handleScroll}
        contentContainerStyle={styles.contain}
        nestedScrollEnabled
      >
        <VStack spacing={42}>
          <Box>
            <TextField
              value={firstName}
              onChangeText={setFirstName}
              label={"Tutor first name"}
              placeholder={"Enter Tutor first name"}
            />
          </Box>
          <Box>
            <TextField
              value={lastName}
              onChangeText={setLastName}
              label={"Tutor last name"}
              placeholder={"Enter Tutor last name"}
            />
          </Box>
          <Box>
            <TextField
              value={email}
              onChangeText={setEmail}
              label={"Email id"}
              placeholder={"Enter Email id"}
            />
          </Box>
          <Box>
            <TextField
              value={contact}
              onChangeText={setContact}
              label={"Contact number"}
              placeholder={"Enter Contact number"}
            />
          </Box>
          <Box>
            <TextField
              value={alternateContact}
              onChangeText={setAlternateContact}
              label={"Alternate contact number"}
              placeholder={"Enter Alternate contact number"}
            />
          </Box>
          <Box>
            <TextField
              value={subject}
              onChangeText={setSubject}
              label={"Specialized subject"}
              placeholder={"Enter Specialized subject"}
            />
          </Box>
          <Box>
            <TextField
              value={Qualification}
              onChangeText={setQualification}
              label={"Qualification"}
              placeholder={"Enter Qualification"}
            />
          </Box>
          <Box>
            <TextField
              value={experience}
              onChangeText={setExperience}
              label={"Experience"}
              placeholder={"Enter Experience"}
            />
          </Box>
          <Box>
            <TextField
              value={language}
              onChangeText={setLanguage}
              label={"Language"}
              placeholder={"Enter Language"}
            />
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
            {"Update"}
          </TextView>
        </TouchableOpacity>
      </Box>
    </Container>
  );
};

export default ProfileGeneral;
