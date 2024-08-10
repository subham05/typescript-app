import { IconSetEnum } from "@common/components/Icon/enums";
import { showToast } from "@common/components/toastMessage";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { AuthContext } from "src/navigation/provider";
import { SignedInStackPrivateParamList } from "src/navigation/stacks/SignedInStackPrivate";
import { SignedInStackParamList } from "src/navigation/stacks/SignedInStackSchool";
import { MenuActions } from "./enum";
import { useStyles } from "./index.styles";

type IconInfo = {
  color: string;
  name: keyof typeof IconSetEnum;
};

export type DrawerItemNavigationProp = NavigationProp<
  SignedInStackParamList & SignedInStackPrivateParamList
>;
export const useIcons = () => {
  const { theme } = useStyles({});
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const { signOut } = useContext(AuthContext);
  const navigation = useNavigation<DrawerItemNavigationProp>();

  const icons: Record<string, IconInfo> = {
    [MenuActions.attendance]: {
      color: theme.palette.decorative.primary_indigo,
      name: "checkmark_badge",
    },
    [MenuActions.quiz]: {
      color: theme.palette.decorative.primary_indigo,
      name: "help_circle",
    },
    [MenuActions.goals]: {
      color: theme.palette.decorative.secondary_blush,
      name: "target_01",
    },
    [MenuActions.resources]: {
      color: theme.palette.decorative.cambridge_blue,
      name: "folder",
    },
    [MenuActions.recordings]: {
      color: theme.palette.decorative.tertiary_mustard,
      name: "record",
    },
    [MenuActions.reports]: {
      color: theme.palette.decorative.quaternary_green,
      name: "reports",
    },
    [MenuActions.review]: {
      color: theme.palette.decorative.secondary_blush,
      name: "user",
    },
    [MenuActions.changeLanguage]: {
      color: theme.palette.decorative.secondary_blush,
      name: "translation",
    },
    [MenuActions.settings]: {
      color: theme.palette.decorative.tertiary_mustard,
      name: "setting",
    },
    [MenuActions.help]: {
      color: theme.palette.decorative.cambridge_blue,
      name: "help_circle",
    },
    [MenuActions.logout]: {
      color: theme.palette.decorative.secondary_blush,
      name: "logout",
    },
  };

  const handlePress = (title?: string) => {
    switch (title) {
      case MenuActions.logout:
        handleLogout();
        break;
      case MenuActions.reports:
        handleReport();
        break;
      case MenuActions.goals:
        handleGoals();
        break;
      case MenuActions.resources:
        handleResources();
        break;
      case MenuActions.review:
        handleReview();
        break;
      case MenuActions.attendance:
        handleAttendance();
        break;
      case MenuActions.recordings:
        handleRecordings();
        break;
      case MenuActions.quiz:
        handleQuiz();
        break;
      // private Tutor
      case MenuActions.settings:
        handleSettings();
        break;
      case MenuActions.help:
        handleHelp();
        break;
      case MenuActions.changeLanguage:
        handleChangeLang();
        break;
      //private Tutor
      default:
        () => {};
        break;
    }
  };

  const handleResources = () => {
    navigation.navigate("Resources");
  };
  const handleLogout = () => {
    signOut();
    showToast("Log out successful !!");
  };
  const handleReport = () => {
    setShow(!show);
  };
  const handleGoals = () => {
    navigation.navigate("Goals");
  };
  const handleReview = () => {
    navigation.navigate("Reviews");
  };
  const handleAttendance = () => {
    navigation.navigate("Attendance");
  };
  const handleRecordings = () => {
    navigation.navigate("Recordings");
  };
  const handleQuiz = () => {
    navigation.navigate("QuizTutor");
  };
  const handleSettings = () => {
    navigation.navigate("Earnings");
  };
  const handleHelp = () => {
    navigation.navigate("Students");
  };
  const handleChangeLang = () => {
    navigation.navigate("SelectLanguage");
  };
  return { icons, handlePress, show, t };
};
