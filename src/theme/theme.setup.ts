import { ColorPalette } from "./theme.types";


// COLOR PALETTE
export const COLOR_PALETTE: ColorPalette = {
    light: {
      PRIMARY: "9C4E9D",
      SECONDARY: "3B98D4",
      TERTIARY: "F6BA17",
      TEXT: "333333",
      ERROR: "E44747",
      SUCCESS: "68BC46",
      PAGE_BACKGROUND: "F7F7F7",
      LINK: "1E4AE9",
      SECONDARY_LIGHT: "AAE4D0",
      ICON_GREY: "7A7E8B",
    },
    dark: {
      PRIMARY: "9C4E9D",
      SECONDARY: "3B98D4",
      TERTIARY: "F6BA17",
      TEXT: "333333",
      ERROR: "E44747",
      SUCCESS: "68BC46",
      PAGE_BACKGROUND: "F7F7F7",
      LINK: "1E4AE9",
      SECONDARY_LIGHT: "AAE4D0",
      ICON_GREY: "7A7E8B",
    },
    static: {
      WHITE: "ffffff",
      BLACK: "000000",
      LINK: "1656FD",
      GREY_DARK: "BEBEBE",
    },
};
  

// FONT FAMILIES
export const FONT_FAMILIES = [
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
]

// FONT WEIGHTS
export const FONT_WEIGHTS = {
    SEMI_BOLD: "600",
    MEDIUM: "500",
    REGULAR: "400",
    BOLD: "800"
}

/* 
The name of the variant must also be added in the following places:
-> Go to theme.config.js
-> Find the following:
    declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
      AuthHeading: true;
    }
  }
-> Add the new variant after AuthHeading with value: true
-> Similarly, find the following:
    type ExtendedTypographyOptions =            TypographyOptions & {
    AuthHeading: React.CSSProperties;
    };
-> Add the new variant after AuthHeading with value: React.CSSProperties
*/

export const CUSTOM_FONT_VARIANTS = {
    AuthHeading: {
        fontWeight: FONT_WEIGHTS.SEMI_BOLD,
        fontSize: "2.5rem",
        lineHeight: "125%",
    },
}