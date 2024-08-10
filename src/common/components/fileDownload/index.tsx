import { IconView } from "@common/components/Icon";
import { TextView } from "@common/components/textView";
import { _isIOS } from "@common/utils/platformCheck";
import React from "react";
import { Platform, TouchableOpacity } from "react-native";
import { Box, Flex } from "react-native-flex-layout";
import { PERMISSIONS, RESULTS, request } from "react-native-permissions";
import RNFetchBlob from "react-native-blob-util";
import SVGComponents from "src/assets/svg";
import { useStyles } from "./index.styles";
interface fileProps {
  fileUrl?: string;
}
export const getDownloadPermissionAndroid = async () => {
  const OsVer = Platform.Version;

  try {
    const granted = await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
    if (granted === RESULTS.GRANTED || Number(OsVer) >= 33) return true;
  } catch (err) {
    /* empty */
  }
};

export const downloadFile = async (url: string) => {
  // Get the app's cache directory
  const { fs } = RNFetchBlob;
  const cacheDir = fs.dirs.DownloadDir;

  // Generate a unique filename for the downloaded image
  const filename = url?.split("/").pop();
  const imagePath = `${cacheDir}/${filename}`;

  try {
    // Download the file and save it to the cache directory
    let configOptions;

    if (_isIOS) {
      configOptions = {
        fileCache: true,
        path: imagePath,
        appendExt: filename?.split(".").pop(),
      };
    } else {
      configOptions = {
        fileCache: true,
        path: imagePath,
        appendExt: filename?.split(".").pop(),
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path: imagePath,
          description: "File",
        },
      };
    }

    const response = await RNFetchBlob.config(configOptions).fetch("GET", url);

    // Return the path to the downloaded file
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
const handleDownload = (url: string) => {
  if (!_isIOS) {
    getDownloadPermissionAndroid().then((granted) => {
      if (granted) {
        downloadFile(url);
      }
    });
  } else {
    downloadFile(url).then((res) => {
      if (res !== undefined) {
        RNFetchBlob.ios.previewDocument(res ? res?.path() : "");
      }
    });
  }
};
const FileDownload: React.FC<fileProps> = ({ fileUrl }) => {
  const { styles } = useStyles({});

  return (
    <TouchableOpacity
      onPress={() => (fileUrl ? handleDownload(fileUrl) : null)}
      style={styles.download}
    >
      <Box style={styles.bar} />
      <Flex direction="row" items="center">
        <SVGComponents.Doc />
        <TextView
          variant="medium"
          numberOfLines={1}
          style={styles.downloadText}
        >
          Rise of titans and war..
        </TextView>
      </Flex>

      <IconView size={32} name="download" />
    </TouchableOpacity>
  );
};

export default FileDownload;
