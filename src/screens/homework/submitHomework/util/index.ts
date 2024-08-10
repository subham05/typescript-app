import DocumentPicker from "react-native-document-picker";

const uploadFile = async () => {
  try {
    const pickedFile = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
      allowMultiSelection: true,
    });

    if (!pickedFile || pickedFile.length === 0) {
      return [];
    }
    const customObjects = pickedFile.map((file) => ({
      name: file.name,
      uri: file.uri,
    }));

    return customObjects;
    //   BASE-64 convert
    //   await RNFS.readFile(pickedFile.uri, "base64").then((data) => {
    //     console.log("base64", data);
    //   });
  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      /* empty */
      return [];
    } else {
      throw err;
    }
  }
};

export default uploadFile;
