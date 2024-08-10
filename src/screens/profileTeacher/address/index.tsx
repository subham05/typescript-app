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
  "ProfileAddress"
>;
const ProfileAddress: React.FC<Props> = () => {
  const { styles } = useStyles({});
  const { t } = useTranslation();
  const { scrollY, handleScroll } = UseScrollAnimation();
  const [houseNumber, setHouseNumber] = useState("");
  const [building, setBuilding] = useState("");
  const [landmark, setLandmark] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
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
              value={houseNumber}
              onChangeText={setHouseNumber}
              label={"House no/block no"}
              placeholder={"Enter House no/block no"}
            />
          </Box>
          <Box>
            <TextField
              value={building}
              onChangeText={setBuilding}
              label={"Building/street/area"}
              placeholder={"Enter Building/street/area"}
            />
          </Box>
          <Box>
            <TextField
              value={landmark}
              onChangeText={setLandmark}
              label={"Landmark"}
              placeholder={"Enter Landmark"}
            />
          </Box>
          <Box>
            <TextField
              value={country}
              onChangeText={setCountry}
              label={"Country"}
              placeholder={"Enter Country"}
            />
          </Box>
          <Box>
            <TextField
              value={province}
              onChangeText={setProvince}
              label={"Province"}
              placeholder={"Enter Province"}
            />
          </Box>
          <Box>
            <TextField
              value={city}
              onChangeText={setCity}
              label={"City"}
              placeholder={"Enter City"}
            />
          </Box>
          <Box>
            <TextField
              value={zipCode}
              onChangeText={setZipCode}
              label={"Zip code"}
              placeholder={"Enter Zip code"}
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

export default ProfileAddress;
