import React from "react";
import { useTranslation } from "react-i18next";
import { StyleProp, ViewStyle } from "react-native";
import { Box } from "react-native-flex-layout";
import { PrimaryButton } from "../buttons/primaryButton";
import { useStyles } from "./index.styles";
import { TextView } from "../textView";
type BottomButtonProps = {
  secondaryButtonTitle?: string;
  primaryButtonTitle?: string;
  onSecondaryButtonClick?: () => void;
  onPrimaryButtonClick?: () => void;
  isDisablePrimaryButton?: boolean;
  isDisableSecondaryButton?: boolean;
  boxStyle?: StyleProp<ViewStyle>;
  joinAt?: boolean;
  complete?: boolean;
  completeTitle?: string;
  joinTime?: string;
};
const BottomButtons: React.FC<BottomButtonProps> = ({
  isDisablePrimaryButton = false,
  isDisableSecondaryButton = false,
  secondaryButtonTitle,
  primaryButtonTitle,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  boxStyle,
  joinAt = false,
  complete = false,
  completeTitle,
  joinTime,
}) => {
  const { styles, theme } = useStyles({});
  const { t } = useTranslation();

  return (
    <Box style={[styles.fixed, boxStyle]} ph={20}>
      {complete ? (
        <TextView variant="medium" style={styles.joinText}>
          {completeTitle}
        </TextView>
      ) : (
        <>
          {joinAt ? (
            <TextView variant="medium" style={styles.joinText}>
              {t("common:joinAt")} {joinTime}
            </TextView>
          ) : (
            <>
              <PrimaryButton
                title={
                  secondaryButtonTitle
                    ? secondaryButtonTitle
                    : t("common:cancel")
                }
                disabled={isDisableSecondaryButton}
                style={[styles.cancel, styles.buttonView]}
                iconProps={{ color: theme.palette.text.secondary }}
                onPress={onSecondaryButtonClick!}
              />
              <PrimaryButton
                title={primaryButtonTitle ?? t("common:submit")}
                disabled={isDisablePrimaryButton}
                style={styles.buttonView}
                onPress={onPrimaryButtonClick!}
              />
            </>
          )}
        </>
      )}
    </Box>
  );
};

export default BottomButtons;
