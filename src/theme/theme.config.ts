import { TypographyOptions } from "@mui/material/styles/createTypography";
import { ThemeOptions } from "@mui/material/styles";
import { ColorObject, ColorVariants, StaticColorVariants } from "./theme.types";
import { getColorObject } from "./theme.helpers";
import { ColorMode } from "./theme.provider";
import { COLOR_PALETTE, FONT_FAMILIES, CUSTOM_FONT_VARIANTS } from "./theme.setup";

const getRgbaColorValue = (obj: ColorObject) => obj.rgba;

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    AuthHeading: true;
  }
}

type ExtendedTypographyOptions = TypographyOptions & {
  AuthHeading: React.CSSProperties;
};

const getColor = (variant: ColorVariants | StaticColorVariants, isStatic = false, mode?: ColorMode) => {
  if (isStatic) {
    return getRgbaColorValue(getColorObject(COLOR_PALETTE.static[variant as StaticColorVariants]));
  }
  if (mode) {
    return getRgbaColorValue(getColorObject(COLOR_PALETTE[mode][variant as ColorVariants]));
  }
  throw new Error('Mode must be provided for non-static colors');
};

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
        main: getColor(ColorVariants.PRIMARY, false, mode),
      },
      secondary: {
        main: getColor(ColorVariants.SECONDARY, false, mode),
      },
      common: {
        black: getColor(StaticColorVariants.BLACK, true),
        white: getColor(StaticColorVariants.WHITE, true),
      },
      error: {
        main: getColor(ColorVariants.ERROR, false, mode),
      },
      success: {
        main: getColor(ColorVariants.SUCCESS, false, mode),
      },
      text: {
        primary: getColor(ColorVariants.TEXT, false, mode),
      },
      background: {
        default: getColor(ColorVariants.PAGE_BACKGROUND, false, mode),
      },
    },
    typography: {
      fontFamily: FONT_FAMILIES.join(','),
      ...CUSTOM_FONT_VARIANTS
    } as ExtendedTypographyOptions,
  } as ThemeOptions;
};
