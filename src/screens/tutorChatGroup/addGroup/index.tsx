import { Container } from "@common/components/Container";
import { IconView } from "@common/components/Icon";
import Header from "@common/components/header";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Box } from "react-native-flex-layout";
import { SignedInStackPrivateParamList } from "src/navigation/stacks/SignedInStackPrivate";
import { SignedInStackParamList } from "src/navigation/stacks/SignedInStackSchool";
import { useStyles } from "./index.styles";
import ImageSelect from "@common/components/imageSelect";
import { ImagePickerResponse } from "react-native-image-picker";

type GroupInfoScreenProps = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<SignedInStackPrivateParamList>,
    StackNavigationProp<SignedInStackParamList>
  >;
};
const AddGroup: React.FC<GroupInfoScreenProps> = ({ navigation }) => {
  const { styles, theme } = useStyles({});
  const [name, setName] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const handleUploadImage = (selectedImage: ImagePickerResponse) => {
    if (selectedImage?.assets && selectedImage.assets.length > 0) {
      const formData = new FormData();
      formData.append("image", {
        uri: selectedImage.assets[0].uri,
        // type: selectedImage.assets[0].type,
        // name: selectedImage.assets[0].fileName,
      });
      // uploadImage(formData);
    }
  };
  return (
    <Container noSpacing>
      <KeyboardAvoidingView style={styles.keyBoardStyle}>
        <Header title={"Add group"} />
        <Box style={styles.center}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.groupImg}
          >
            <IconView name="camera" size={32} />
          </TouchableOpacity>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholderTextColor={
              theme.palette.text.Tertiary_disaibled_searchbar_other
            }
            placeholder="Group Name"
            selectionColor={theme.palette.decorative.primary_indigo}
            style={styles.customInput}
          />
        </Box>
        <TouchableOpacity
          onPress={() => navigation.navigate("AddMember")}
          style={styles.cta}
        >
          <IconView
            size={24}
            name="arrow_right"
            color={theme.palette.background.section_bg}
          />
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <ImageSelect
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onImageSelected={handleUploadImage}
      />
    </Container>
  );
};

export default AddGroup;
