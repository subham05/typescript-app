import { ThemeStyles } from "../types";
import { appColors } from "../colors";

const lightTheme: ThemeStyles = {
  theme: {
    palette: {
      decorative: {
        primary_indigo: appColors.indigo,
        secondary_blush: appColors.redPink,
        tertiary_mustard: appColors.yellow,
        quaternary_green: appColors.green,
        cambridge_blue: appColors.swampGreen,
        class_block_img_bg: appColors.lightIndigo,
        exam_block_img_bg: appColors.lightRedPink,
        webinar_block_img_bg: appColors.lightYellow,
        holiday_block_img_bg: appColors.lightGreen,
        class_block_bg: appColors.lightIndigo,
        exam_block_bg: appColors.lightRedPink,
        webinar_block_bg: appColors.lightYellow,
        holiday_block_bg: appColors.lightGreen,
        error_red: appColors.red,
        skeleton_bg: appColors.extraLightIndigo,
      },
      background: {
        main_screen_bg: appColors.whiteBlue001,
        section_bg: appColors.white001,
        week_section_bg: appColors.whiteBlue002,
        week_highlight_attendance_loader_bg: appColors.white002,
      },
      text: {
        primary: appColors.black001,
        secondary: appColors.grey005,
        Tertiary_disaibled_searchbar_other: appColors.gre003,
        disabled_for_mobile: appColors.gre002,
      },
      icon: {
        Default: appColors.black001,
        Active_bottomnavbar: appColors.indigo,
        Disabled_bottomnavbar: appColors.gre002,
        Tertiary_disaibled_searchbarother: appColors.gre003,
        disabled_for_mobile: appColors.gre002,
      },
      border: {
        Border_topmenu: appColors.grey004,
        For_card_border: appColors.white002,
        Text_fields: appColors.grey001,
        Filter: appColors.indigo,
        Attachment_field: appColors.lightIndigo,
      },
      cta: {
        Primary_default: appColors.indigo,
        Secondary_text: appColors.indigo,
        Filter_bg: appColors.white001,
        Filter_border: appColors.indigo,
        Primary_disabled: appColors.gre002,
      },
    },
    transparent: {
      thirty: appColors.blackTransparent30,
      fifty: appColors.whiteTransparent50,
      ten: appColors.indigoTransparent10,
      eighty: appColors.whiteTransparent80,
      grey30: appColors.greyTransparent30,
      black50: appColors.blackTransparent50,
    },
    gradient: {
      // greetings_block_gradient
      greetings: {
        start: appColors.deepIndigo,
        end: appColors.mediumIndigo,
      },
      // blush_block_gradient
      blush: {
        start: appColors.deepPink,
        end: appColors.mediumPink,
      },
      // mustard_block_gradient
      mustard: {
        start: appColors.deepYellow,
        end: appColors.mediumYellow,
      },
      // blue_block_gradient
      blue_block: {
        start: appColors.blue,
        end: appColors.mediumBlue,
      },
      // green_block_gradient
      green_block: {
        start: appColors.deepGreen,
        end: appColors.mediumGreen,
      },
      dark_button: {
        start: appColors.buttonGradientStart,
        end: appColors.buttonGradientEnd,
      },
    },
  },
};

export default lightTheme;
