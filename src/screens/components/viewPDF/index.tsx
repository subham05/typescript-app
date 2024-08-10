import { Container } from "@common/components/Container";
import Header from "@common/components/header";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CompositeNavigationProp } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { Stack } from "react-native-flex-layout";
import Pdf from "react-native-pdf";
import { DrawerNavParamList } from "src/navigation/stacks/DrawerNavigation";
import { BottomTabParamList } from "src/navigation/stacks/MainTabNavigation";
import { useStyles } from "./index.styles";
type HomeworkScreenProps = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabParamList>,
    DrawerNavigationProp<DrawerNavParamList>
  >;
};
const ViewPDFScreen: React.FC<HomeworkScreenProps> = () => {
  const { styles } = useStyles({});
  return (
    <Container noSpacing>
      <Stack style={styles.container}>
        <Header />
        <View style={styles.pdfView}>
          <Pdf
            trustAllCerts={false}
            source={{
              uri: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
            }}
            onLoadComplete={() => {}}
            onPageChanged={() => {}}
            onError={() => {}}
            onPressLink={() => {}}
            style={styles.pdf}
          />
        </View>
      </Stack>
    </Container>
  );
};
export default ViewPDFScreen;
