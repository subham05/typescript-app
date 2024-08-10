import { TextView } from "@common/components/textView";
import React from "react";
import { FlatList, Image, ImageProps, TouchableOpacity } from "react-native";
import { Box, HStack } from "react-native-flex-layout";
import { useStyles } from "./index.styles";
import { useTranslation } from "react-i18next";

type QuestionCardAnswer = {
  thumbnail?: ImageProps;
  name: string;
  answer: string;
  time: string;
};
type QuestionCardProps = {
  thumbnail?: ImageProps;
  name: string;
  question: string;
  time: string;
  answer: boolean;
  answers: QuestionCardAnswer[];
  onPress?: () => void;
};
const QuestionCard: React.FC<QuestionCardProps> = ({
  thumbnail,
  name,
  answers,
  time,
  question,
  answer,
  onPress,
}) => {
  const { styles } = useStyles({});
  const { t } = useTranslation();
  return (
    <Box style={styles.card}>
      <HStack>
        <Image style={styles.img as ImageProps} source={thumbnail} />
        <Box pl={12} style={styles.right}>
          <TextView variant="medium" style={styles.nameStyle}>
            {name}
          </TextView>
          <TextView variant="light" style={styles.timeStyle}>
            {time}
            <TextView style={styles.timing}>{t("common:at")} 00:59</TextView>
          </TextView>
        </Box>
      </HStack>
      <TextView style={styles.questionStyle}>{question}</TextView>
      {answer && (
        <TouchableOpacity onPress={onPress}>
          <TextView style={styles.cta}>Answer</TextView>
        </TouchableOpacity>
      )}
      <FlatList
        style={styles.answerList}
        data={answers}
        renderItem={({ item }) => (
          <>
            <HStack>
              <Image
                style={styles.imgAnswer as ImageProps}
                source={thumbnail}
              />
              <Box pl={12} style={styles.right}>
                <TextView variant="medium" style={styles.nameStyle}>
                  {item.name}
                </TextView>
                <TextView variant="light" style={styles.timeStyle}>
                  {item.time}
                </TextView>
              </Box>
            </HStack>
            <TextView style={styles.questionStyle}>{item.answer}</TextView>
          </>
        )}
      />
    </Box>
  );
};

export default QuestionCard;
