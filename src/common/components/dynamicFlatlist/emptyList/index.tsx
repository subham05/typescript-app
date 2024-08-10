import { TextView } from "@common/components/textView";
import React from "react";
import { Flex } from "react-native-flex-layout";
export type homeworkProps = {
  title?: string;
  visible?: boolean;
};
const EmptyText: React.FC<homeworkProps> = ({ title, visible }) => {
  return (
    <Flex ph={14} pv={20} center>
      {visible && <TextView>{title}</TextView>}
    </Flex>
  );
};

export default EmptyText;
