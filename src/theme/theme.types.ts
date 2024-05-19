export type ColorObject = {
    hex: string;
    rgba: string;
};

export type ThemeColorsObject = {
    PRIMARY: ColorObject;
    SECONDARY: ColorObject;
    TERTIARY: ColorObject;
    TEXT: ColorObject;
    ERROR: ColorObject;
    SUCCESS: ColorObject;
    PAGE_BACKGROUND: ColorObject;
    LINK: ColorObject;
    SECONDARY_LIGHT: ColorObject;
    ICON_GREY: ColorObject;
  };
 
 export type ColorPalette = {
    light: ThemeColorsObject;
    dark: ThemeColorsObject;
    static: {
      WHITE: ColorObject;
      BLACK: ColorObject;
      LINK: ColorObject;
      GREY_DARK: ColorObject;
    };
  };