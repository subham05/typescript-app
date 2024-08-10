import Netinfo from "@react-native-community/netinfo";

import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useStyles } from "./index.styles";
import { IconView } from "@common/components/Icon";
import { TextView } from "@common/components/textView";
import { PrimaryButton } from "@common/components/buttons/primaryButton";
interface NetworkStatusViewProps {
  onRetry?: () => void;
  onPress?: () => void;
}

export const NetworkStatusView: React.FC<NetworkStatusViewProps> = ({
  onRetry,
  onPress,
}) => {
  const { styles } = useStyles({});
  const onCheckRetry = () => {
    Netinfo.fetch().then((state) => {
      if (state.isConnected) {
        onRetry?.();
      } else {
        /* empty */
      }
    });
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={onPress} style={styles.paddingStyle}>
        <IconView size={24} name="arrow_left" />
      </TouchableOpacity>
      <View style={styles.container}>
        <TextView style={styles.headingTop} variant="bold">
          Oops!
        </TextView>
        <TextView style={styles.heading}>
          No internet connection found. Check your connection.
        </TextView>
        <View style={styles.buttonWrapper}>
          <PrimaryButton width={100} title="Retry" onPress={onCheckRetry} />
          {/* <Button onPress={onCheckRetry} title="Retry" /> */}
        </View>
      </View>
    </View>
  );
};
