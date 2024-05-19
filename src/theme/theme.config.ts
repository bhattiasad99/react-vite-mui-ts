import { TypographyOptions } from "@mui/material/styles/createTypography";
import { ThemeOptions } from "@mui/material/styles";
import { ColorObject, ColorPalette } from "./theme.types";
import { getColorObject } from "./theme.helpers";
import { ColorMode } from "./theme.provider";

// colors
export const COLOR_PALETTE: ColorPalette = {
  light: {
    PRIMARY: getColorObject("9C4E9D"),
    SECONDARY: getColorObject("3B98D4"),
    TERTIARY: getColorObject("F6BA17"),
    TEXT: getColorObject("333333"),
    ERROR: getColorObject("E44747"),
    SUCCESS: getColorObject("68BC46"),
    PAGE_BACKGROUND: getColorObject("F7F7F7"),
    LINK: getColorObject("1E4AE9"),
    SECONDARY_LIGHT: getColorObject("AAE4D0"),
    ICON_GREY: getColorObject("7A7E8B"),
  },
  dark: {
    PRIMARY: getColorObject("9C4E9D"),
    SECONDARY: getColorObject("3B98D4"),
    TERTIARY: getColorObject("F6BA17"),
    TEXT: getColorObject("333333"),
    ERROR: getColorObject("E44747"),
    SUCCESS: getColorObject("68BC46"),
    PAGE_BACKGROUND: getColorObject("F7F7F7"),
    LINK: getColorObject("1E4AE9"),
    SECONDARY_LIGHT: getColorObject("AAE4D0"),
    ICON_GREY: getColorObject("7A7E8B"),
  },
  static: {
    WHITE: getColorObject("ffffff"),
    BLACK: getColorObject("000000"),
    LINK: getColorObject("1656FD"),
    GREY_DARK: getColorObject("BEBEBE"),
  },
};

const getRgbaColorValue = (obj: ColorObject) => obj.rgba;

export const FONT_WEIGHTS = {
  SEMI_BOLD: "600",
  MEDIUM: "500",
  REGULAR: "400",
  BOLD: "800"
}


declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    AuthHeading: true;
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  AuthHeading: React.CSSProperties;
}


export const getDesignTokens = (mode: ColorMode) => {
  return {
    components: {
      MuiStack: {
        defaultProps: {
          useFlexGap: true,
        },
      },
    },
    palette: {
      mode: mode,
      primary: {
        main: getRgbaColorValue(COLOR_PALETTE[mode].PRIMARY),
      },
      secondary: {
        main: getRgbaColorValue(COLOR_PALETTE[mode].SECONDARY),
      },
      common: {
        black: getRgbaColorValue(COLOR_PALETTE.static.BLACK),
        white: getRgbaColorValue(COLOR_PALETTE.static.WHITE),
      },
      error: {
        main: getRgbaColorValue(COLOR_PALETTE[mode].ERROR),
      },
      success: {
        main: getRgbaColorValue(COLOR_PALETTE[mode].SUCCESS),
      },
      text: {
        primary: getRgbaColorValue(COLOR_PALETTE[mode].TEXT),
      },
      background: {
        default: getRgbaColorValue(COLOR_PALETTE[mode].PAGE_BACKGROUND),
      },
    },
    typography: {
      fontFamily: [
        'jost',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      AuthHeading: {
        fontWeight: FONT_WEIGHTS.SEMI_BOLD,
        fontSize: "2.5rem",
        lineHeight: "125%",
      },
    } as ExtendedTypographyOptions,
  } as ThemeOptions;
};
