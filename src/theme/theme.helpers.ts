import { ColorObject } from "./theme.types";

export function hexToRgba(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, 1)`;
}

export function rgbaToHex(rgba: string): string {
  const matchResult = rgba.match(
    /(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(0|1|0?\.\d+)/
  );

  if (matchResult) {
    const parts = matchResult.slice(1);
    const hex = parts
      .slice(0, 3)
      .map((x) => {
        const hexValue = parseInt(x).toString(16);
        return hexValue.length === 1 ? "0" + hexValue : hexValue;
      })
      .join("")
      .toUpperCase();
    return `#${hex}`;
  } else {
    throw new Error("Invalid RGBA format");
  }
}

export function getColorObject(colorString: string): ColorObject {
  // Validate and format the input color
  const formattedColor = colorString.trim().toUpperCase();

  if (formattedColor.startsWith("#") && /^#[0-9A-F]{6}$/.test(formattedColor)) {
    // Hex color with #
    return {
      hex: formattedColor,
      rgba: hexToRgba(formattedColor),
    };
  } else if (/^[0-9A-F]{6}$/.test(formattedColor)) {
    // Hex color without #
    return {
      hex: "#" + formattedColor,
      rgba: hexToRgba("#" + formattedColor),
    };
  } else if (
    /^RGBA\(\d{1,3},\s*\d{1,3},\s*\d{1,3},\s*(0|1|0?\.\d+)\)$/.test(
      formattedColor
    )
  ) {
    // RGBA color
    const colorObj: ColorObject = {
      hex: rgbaToHex(formattedColor),
      rgba: formattedColor,
    };
    return colorObj;
  } else {
    throw new Error("Invalid color format");
  }
}
