export type ColorObject = {
    hex: string;
    rgba: string;
};

export enum ColorVariants {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  TERTIARY = "TERTIARY",
  TEXT = "TEXT",
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
  PAGE_BACKGROUND = "PAGE_BACKGROUND",
  LINK = "LINK",
  SECONDARY_LIGHT = "SECONDARY_LIGHT",
  ICON_GREY = "ICON_GREY"
}

export enum StaticColorVariants {
  WHITE = "WHITE",
  BLACK = "BLACK",
  LINK = "LINK",
  GREY_DARK = "GREY_DARK"
}

export type ThemeColorsObject = {
  [key in ColorVariants]: string;
};

export type FontVariant= {
  fontSize: string,
  fontWeight: number,
  lineHeight: string | number
}
 
export type ColorPalette = {
  light: ThemeColorsObject;
  dark: ThemeColorsObject;
  static: {
    [key in StaticColorVariants]: string;
  };
};
