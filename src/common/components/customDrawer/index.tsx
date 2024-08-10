import { DrawerContentScrollView } from "@react-navigation/drawer";
import React from "react";
import { VStack } from "react-native-flex-layout";
import { imageSources } from "src/assets/images";
import SVGComponents from "src/assets/svg";
import { DrawerData, DrawerDataPrivate } from "./constant";
import { DrawerHeader } from "./drawerHeader";
import { DrawerItem } from "./drawerItem";
import { useStyles } from "./index.styles";
import { useAppSelector } from "src/store/hooks";
const CustomDrawer: React.FC = () => {
  const { styles } = useStyles({});
  const authContextState = useAppSelector((state) => state.authReducer);
  const { signType } = authContextState;
  const DATA = signType === "private" ? DrawerDataPrivate : DrawerData;
  return (
    <DrawerContentScrollView>
      <SVGComponents.WaveDrawer style={styles.wave} />
      <DrawerHeader title="Dianne Russell" image={imageSources.profile} />
      <VStack spacing={16} ph={24} pb={100}>
        {DATA.map((item) => (
          <DrawerItem
            key={item.index}
            title={item.title}
            subTitle={item.subTitle}
          />
        ))}
      </VStack>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
