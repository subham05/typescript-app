import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FlatList,
  Image,
  ImageStyle,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Box, HStack, Spacer } from "react-native-flex-layout";

import { Container } from "@common/components/Container";
import { IconView } from "@common/components/Icon";
import { SelectDropdown } from "@common/components/filter/selectDropdown";
import { CommonModal } from "@common/components/modal";
import Search from "@common/components/searchBar";
import TextField from "@common/components/textField";
import { TextView } from "@common/components/textView";

import Description from "./components/description";
import QuestionCard from "./components/questionCard";
import VideoCard from "./components/videoCard";
import VideoPlayer from "./components/videoPlayer";

import {
  descriptionData,
  questionData,
  recordDrop,
  videoCardData,
  videoURL,
} from "./constants";
import { useStyles } from "./index.styles";

import { imageSources } from "src/assets/images";
import { SignedInStackPrivateParamList } from "src/navigation/stacks/SignedInStackPrivate";
import { SignedInStackParamList } from "src/navigation/stacks/SignedInStackSchool";
import { useIsFocused } from "@react-navigation/native";

type Props = NativeStackScreenProps<SignedInStackParamList, "Video"> &
  NativeStackScreenProps<SignedInStackPrivateParamList>;

const VideoScreen: React.FC<Props> = (props) => {
  const {
    route: {
      params: { recording },
    },
  } = props;
  const { styles, theme } = useStyles({});
  const [fullScreen, setFullScreen] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible1, setModalVisible1] = useState(false);
  const [parentSearch, setParentSearch] = useState("");
  const [note, setNote] = useState("");
  const { t } = useTranslation();
  const isFocused = useIsFocused();
  const handleFullscreen = useCallback((data: boolean) => {
    setFullScreen(data);
  }, []);

  const handlePip = useCallback((data: boolean) => {
    setFullScreen(data);
  }, []);

  const handleSearchChange = (text: string) => {
    setParentSearch(text);
  };

  const videoPlayer = useMemo(() => {
    return (
      isFocused == true && (
        <VideoPlayer
          onPip={handlePip}
          onFullScreen={handleFullscreen}
          videoUrl={videoURL}
        />
      )
    );
  }, [handleFullscreen, handlePip, videoURL, isFocused]);

  const memoizedVideoCardData = useMemo(() => videoCardData, [videoCardData]);
  const listHeaderComponent = useMemo(
    () => (
      <Description
        type={recording ? "DOWNLOAD" : "Q&A"}
        title={descriptionData.title}
        description={descriptionData.description}
        otherDetails={descriptionData.otherDetails}
        onPress={() => setModalVisible(true)}
        share={() => props.navigation.navigate("ClassAnalytics")}
      />
    ),
    [descriptionData, recording, props.navigation]
  );
  const handleModalToggle = useCallback(() => {
    setModalVisible((prev) => !prev);
  }, []);

  const handleModal1Toggle = useCallback(() => {
    setModalVisible1((prev) => !prev);
  }, []);
  return (
    <Container
      noSpacing
      statusBarColor={theme.palette.text.primary}
      statusBarTheme="light-content"
    >
      {videoPlayer}
      {/* {
          <VideoLoader/>
        } */}
      {!fullScreen && (
        <FlatList
          ItemSeparatorComponent={() => <Spacer p={6} />}
          ListHeaderComponent={listHeaderComponent}
          data={memoizedVideoCardData}
          renderItem={({ item }) => (
            <VideoCard
              thumbnail={item.thumbnail}
              title={item.title}
              duration={item.duration}
              time={item.time}
              uploadedBy={item.uploadedBy}
              uploadedTime={item.uploadedTime}
            />
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      )}

      <CommonModal
        style={styles.customModal}
        isModalVisible={isModalVisible}
        onPress={handleModalToggle}
        title="Questions and answers"
      >
        <Search
          autoFocus={false}
          search={parentSearch}
          onSearchChange={handleSearchChange}
          RenderRightContainer={() => (
            <SelectDropdown
              containerStyle={styles.customDropStyle}
              style={styles.filter}
              data={recordDrop}
              onChange={() => {}}
              renderRightIcon={() => <IconView name="filter" size={16} />}
            />
          )}
        />
        <FlatList
          contentContainerStyle={styles.modalList}
          data={questionData}
          ItemSeparatorComponent={() => <Spacer p={16} />}
          renderItem={({ item }) => (
            <QuestionCard
              thumbnail={item.thumbnail}
              name={item.name}
              question={item.Question}
              time={item.time}
              answer={item.answer}
              answers={item.answers}
              onPress={() => setModalVisible1(true)}
            />
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      </CommonModal>
      <CommonModal
        style={styles.answerModal}
        isModalVisible={isModalVisible1}
        onPress={handleModal1Toggle}
      >
        <ScrollView contentContainerStyle={styles.answerContainer}>
          <HStack style={styles.answerTop}>
            <Image
              style={styles.img as ImageStyle}
              source={imageSources.chatDemo1}
            />
            <TextView variant="bold" style={styles.name}>
              Sheila duke
            </TextView>
            <TextView variant="medium" style={styles.time}>
              {t("common:at")} 3.06
            </TextView>
          </HStack>
          <TextField
            multiline
            value={note}
            onChangeText={setNote}
            label={t("videoPage:answer")}
            placeholder={t("videoPage:type")}
          />
        </ScrollView>
        <Box style={styles.fixed} ph={20}>
          <TouchableOpacity style={styles.secondaryBtn}>
            <TextView variant="medium" style={styles.secondaryTxt}>
              {t("common:cancel")}
            </TextView>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.primaryBtn}>
            <TextView variant="medium" style={styles.primaryTxt}>
              {t("common:save")}
            </TextView>
          </TouchableOpacity>
        </Box>
      </CommonModal>
    </Container>
  );
};

export default VideoScreen;
