import tinycolor from "tinycolor2";

export const hexToRgba = (hex: string, alpha: number = 1): string => {
  return tinycolor(hex)
    .setAlpha(alpha)
    .toString();
};

const colors = {
  PRIMARY: "#B15E5E",
  PRIMARY_LIGHT: "#C88E8D",
  PRIMARY_VERY_LIGHT: '#E1C1C1',
  WHITE: "#FFFFFF",
  LIGHTEST_GREY: "#D7D7D7",
  LIGHT_GREY: "#999999",
  BLACK: "#000000",
  BLACK_TRANSPARENT_25PERC: hexToRgba("#000000", 0.25),
  RED: 'red',
  GOLD: '#FFD700'
};

export default colors;
