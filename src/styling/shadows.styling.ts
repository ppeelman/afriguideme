import colors from "./color.styling";

type ShadowMap = {
  [shadowType: string]: {
    offsetX: string,
    offsetY: string,
    blurRadius: string,
    color: string
  }
};

const shadows: ShadowMap = {
  SMALL: {
    offsetX: "1px",
    offsetY: "1px",
    blurRadius: "2px",
    color: colors.BLACK_TRANSPARENT_25PERC
  },
  MEDIUM: {
    offsetX: "3px",
    offsetY: "3px",
    blurRadius: "6px",
    color: colors.BLACK_TRANSPARENT_25PERC
  },
  LARGE: {
    offsetX: "5px",
    offsetY: "5px",
    blurRadius: "10px",
    color: colors.BLACK_TRANSPARENT_25PERC
  }
};

export default (propName: string) => {
  const { offsetX, offsetY, blurRadius, color } = shadows[propName];
  return `${offsetX} ${offsetY} ${blurRadius} ${color}`;
};
