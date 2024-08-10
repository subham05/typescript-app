import { PrimaryButton } from "@common/components/buttons/primaryButton";
import { TextView } from "@common/components/textView";
import { DataProps, Goal } from "@screens/goals";
import React from "react";
import { useTranslation } from "react-i18next";
import { Box } from "react-native-flex-layout";
import GoalsCard from "../goalsCard";
import { useStyles } from "./index.styles";
const GoalGroup: React.FC<{
  group: Goal;
  toggleChecked: (groupIndex: number, taskIndex: number) => void;
  values: Goal[];
}> = ({ group, toggleChecked, values }) => {
  const { styles } = useStyles({});
  const { t } = useTranslation();
  return (
    <Box style={styles.card}>
      <TextView variant="medium" style={styles.name}>
        {group.name}
      </TextView>
      <TextView style={styles.subTitle}>{group.teacher}</TextView>
      {group.data.map((task: DataProps) => (
        <GoalsCard
          key={task.index}
          title={task.taskName}
          date={task.completeDate}
          complete={task.checked}
          onPress={() => {
            const groupIndex = values.findIndex((g) => g === group);
            const taskIndex = group.data.findIndex(
              (t: DataProps) => t === task
            );
            toggleChecked(groupIndex, taskIndex);
          }}
        />
      ))}
      <PrimaryButton
        style={styles.saveStyle}
        width={60}
        title={t("common:save")}
        onPress={() => {}}
      />
    </Box>
  );
};

export default GoalGroup;
