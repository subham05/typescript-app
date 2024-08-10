import { Container } from "@common/components/Container";
import { IconView } from "@common/components/Icon";
import { FilterDropdown } from "@common/components/filter/filterDropdown";
import { DropdownItemProps } from "@common/components/filter/filterDropdown/types";
import Header from "@common/components/header";
import Search from "@common/components/searchBar";
import StickyHeaderView from "@common/components/stickyHeader";
import UseScrollAnimation from "@common/components/stickyHeader/hook";
import { TextView } from "@common/components/textView";
import { _isIOS } from "@common/utils/platformCheck";
import { previewXlsx } from "@common/utils/xlsDownload";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import DatePicker from "react-native-date-picker";
import { Box, Spacer } from "react-native-flex-layout";
import ImageView from "react-native-image-viewing";
import Animated from "react-native-reanimated";
import { DrawerNavParamList } from "src/navigation/stacks/DrawerNavigation";
import { SignedInStackParamList } from "src/navigation/stacks/SignedInStackSchool";
import WaveForm from "../../common/components/waveForm";
import ListHeader from "./components/ListHeader";
import AudioCard from "./components/audioCard";
import DocumentCard from "./components/documentCard";
import VideoCard from "./components/videoCard";
import {
  audioList,
  courseList,
  docList,
  fileList,
  images,
  testXls,
  topicList,
  videoList,
} from "./constants";
import { useStyles } from "./index.styles";
type HomeworkScreenProps = {
  navigation: CompositeNavigationProp<
    DrawerNavigationProp<DrawerNavParamList>,
    StackNavigationProp<SignedInStackParamList>
  >;
};
type DropdownChangeHandler = (item: DropdownItemProps) => void;
const Resources: React.FC<HomeworkScreenProps> = ({ navigation }) => {
  const { styles, theme } = useStyles({});
  const { t } = useTranslation();
  const [visible, setIsVisible] = useState(false);
  const { scrollY, translateY, handleScroll } = UseScrollAnimation();
  const [isAudioModalVisible, setIsAudioModalVisible] = useState(false);
  const [parentSearch, setParentSearch] = useState("");
  const [dropdownValue, setDropdownValue] = useState<string>("Course");
  const [dropdownValue1, setDropdownValue1] = useState<string>("All topics");
  const [dropdownValue2, setDropdownValue2] =
    useState<string>("All file types");
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const handleSearchChange = useCallback((text: string) => {
    setParentSearch(text);
  }, []);

  const handleDropdownChange = useCallback(
    (valueSetter: (value: string) => void): DropdownChangeHandler => {
      return (item) => {
        valueSetter(item.value);
      };
    },
    []
  );
  const toggleAudioModal = () => {
    setIsAudioModalVisible(!isAudioModalVisible);
  };

  const data = [
    {
      data: courseList,
      value: dropdownValue,

      setter: setDropdownValue,
    },
    {
      data: topicList,
      value: dropdownValue1,

      setter: setDropdownValue1,
    },
    {
      data: fileList,
      value: dropdownValue2,

      setter: setDropdownValue2,
    },
  ];
  const handlePress = (item: string) => {
    switch (item) {
      case "pdf":
        navigation.navigate("Pdf");
        break;
      case "image":
        setIsVisible(true);
        break;
      case "xls":
      case "ppt":
        previewXlsx(testXls);
        break;
      default:
        break;
    }
  };
  const dummyBufferData: number[] = [];
  const dummyTimeMS = 10000000; // Example time in milliseconds
  return (
    <Container noSpacing>
      <KeyboardAvoidingView
        style={styles.keyBoardContainer}
        behavior={_isIOS ? "padding" : undefined}
      >
        <Header scroll={scrollY} title={t("resourcePage:navigationHeading")} />
        <Box>
          <StickyHeaderView currentOffset={translateY}>
            <Search search={parentSearch} onSearchChange={handleSearchChange} />
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.filterScroll}
              overScrollMode="never"
              bounces={false}
            >
              {data.map(({ data, value, setter }, index) => (
                <FilterDropdown
                  key={index}
                  style={styles.courseFilter}
                  data={data}
                  placeholder={t("common:select")}
                  value={value}
                  onChange={handleDropdownChange(setter)}
                />
              ))}
              <TouchableOpacity
                onPress={() => setOpen(true)}
                style={styles.filterRecording}
              >
                <TextView style={styles.filterText}>
                  {t("homeworkPage:date")}
                </TextView>
                <IconView name="calendar" size={16} />
              </TouchableOpacity>
            </ScrollView>
          </StickyHeaderView>
          {/* <ResourceLoader /> */}
          <Animated.FlatList
            onScroll={handleScroll}
            contentContainerStyle={styles.container}
            data={[1]}
            renderItem={() => (
              <>
                <ListHeader title="document" />
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={docList}
                  horizontal
                  contentContainerStyle={styles.topCtas}
                  ItemSeparatorComponent={() => <Spacer ph={8} />}
                  renderItem={({ item }) => (
                    <DocumentCard
                      onPress={() => handlePress(item.fileType)}
                      title={item.title}
                      thumbnail={item.thumbnail}
                      time={item.time}
                      name={item.name}
                      date={item.date}
                      icon={item.icon}
                    />
                  )}
                />
                <ListHeader title="video" />
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={videoList}
                  horizontal
                  contentContainerStyle={styles.topCtas}
                  ItemSeparatorComponent={() => <Spacer ph={8} />}
                  renderItem={({ item }) => (
                    <VideoCard
                      onPress={() =>
                        navigation.navigate("Video", { recording: false })
                      }
                      title={item.title}
                      thumbnail={item.thumbnail}
                      time={item.time}
                      name={item.name}
                      date={item.date}
                      duration={item.duration}
                    />
                  )}
                />
                <ListHeader title="audio" />
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={audioList}
                  horizontal
                  contentContainerStyle={styles.topCtas}
                  ItemSeparatorComponent={() => <Spacer ph={8} />}
                  renderItem={({ item }) => (
                    <AudioCard
                      onPress={() => setIsAudioModalVisible(true)}
                      title={item.title}
                      size={item.size}
                      time={item.time}
                      date={item.date}
                      duration={item.duration}
                    />
                  )}
                />
              </>
            )}
          />
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={(date) => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </Box>
        <ImageView
          backgroundColor={theme.palette.background.main_screen_bg}
          swipeToCloseEnabled={true}
          keyExtractor={(_, indexKey) => indexKey.toString()}
          images={images}
          doubleTapToZoomEnabled={true}
          imageIndex={0}
          visible={visible}
          onRequestClose={() => setIsVisible(false)}
        />
        <WaveForm
          visible={isAudioModalVisible}
          onClose={toggleAudioModal}
          bufferData={dummyBufferData}
          timeMS={dummyTimeMS}
          isAudioPlay={true} // Or whatever your default audio play state is
          waveFormUri={
            "https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3"
          }
          hideIcon={false} // Or set it to true if you want to hide icons
          // id={/* Provide ID if necessary */}
          // selectedNote={/* Provide selected note if necessary */}
          // reducedLength={/* Provide reduced length if necessary */}
        />
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Resources;
