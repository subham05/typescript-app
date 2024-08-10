import { Container } from "@common/components/Container";
import {
  checkCameraPermission,
  getCameraPermission,
} from "@common/utils/permissions/ReadCamera";
import { AlertPermission } from "@common/utils/permissions/alert";
import { _isIOS } from "@common/utils/platformCheck";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { t } from "i18next";
import React, { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { imageSources } from "src/assets/images";
import { SignedInStackParamList } from "src/navigation/stacks/SignedInStackSchool";
import MessagesList from "./components/messageList";
import { dummyDataArray } from "./constants";
import { useStyles } from "./index.styles";
import { coordinatesProps, messageModal } from "./types";

import { IconButton } from "@common/components/IconButton";
import Header from "@common/components/header";
import { Box } from "react-native-flex-layout";
import { ImageLibraryOptions, launchCamera } from "react-native-image-picker";
import { SignedInStackPrivateParamList } from "src/navigation/stacks/SignedInStackPrivate";
import ChatFooter from "./components/footer";
import HeaderChat from "./components/header";

type ConversationScreenProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<SignedInStackPrivateParamList>,
    StackNavigationProp<SignedInStackParamList>
  >;
};
const Conversation: React.FC<ConversationScreenProps> = ({ navigation }) => {
  const { styles } = useStyles({});
  const [selectedMsg, setSelectedMsg] = useState<messageModal>();
  const [, setSelectedMsgIndex] = useState<number>();
  const [xCoordinate, setXCoordinates] = useState<coordinatesProps[]>([]);

  const takePermissionCamera = () => {
    checkCameraPermission().then((res) => {
      const version = Platform.Version;
      if (Number(version) >= 33) {
        chooseFileCamera();
      } else {
        if (!res.isPermissionGranted) {
          if (res.result === "denied") {
            getCameraPermission().then((resp) => {
              const { statuses, isPermissionGranted } = resp;
              (statuses["ios.permission.CAMERA"] === "blocked" ||
                statuses["android.permission.CAMERA"] === "blocked") &&
                AlertPermission(t("common:camera"));
              isPermissionGranted && chooseFileCamera();
            });
          } else if (res.result === "blocked") {
            AlertPermission(t("common:camera"));
          }
        } else {
          chooseFileCamera();
        }
      }
    });
  };
  const chooseFileCamera = () => {
    const option: ImageLibraryOptions = {
      mediaType: "photo",
    };
    launchCamera(option, () => {});
  };
  return (
    <Container noSpacing>
      <Header
        RenderMainContainer={() => (
          <HeaderChat
            groupImage={imageSources.chatDemo1}
            chatTitle="Mathematics 3A"
            participant="26"
            onPressGroupInfo={() => navigation.navigate("GroupInfo")}
          />
        )}
        RenderRightContainer={() => (
          <IconButton
            onPress={() => navigation.navigate("ViewGroup")}
            name="media"
            size={24}
          />
        )}
      />
      <Box style={styles.line} />
      <KeyboardAvoidingView
        keyboardVerticalOffset={_isIOS ? undefined : 30}
        behavior={_isIOS ? "padding" : undefined}
        style={styles.containerStyle}
      >
        <MessagesList
          messages={dummyDataArray}
          setXCoordinates={(coordinateValue) =>
            setXCoordinates([...xCoordinate, coordinateValue])
          }
          xCoordinate={xCoordinate}
          selectedMsg={selectedMsg}
          setSelectedMsg={setSelectedMsg}
          setSelectedMsgIndex={setSelectedMsgIndex}
        />
        <ChatFooter onPressCamera={() => takePermissionCamera()} />
      </KeyboardAvoidingView>
    </Container>
  );
};
export default Conversation;
