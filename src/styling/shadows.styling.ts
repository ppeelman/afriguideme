import colors from './colors.styling';

type shadow = {
  offsetX: string;
  offsetY: string;
  blurRadius: string;
  color: string;
};

const shadows: any = {
  SMALL: {
    offsetX: '1px',
    offsetY: '1px',
    blurRadius: '2px',
    color: colors.BLACK_TRANSPARENT_25PERC
  },
  MEDIUM: {
    offsetX: '3px',
    offsetY: '3px',
    blurRadius: '6px',
    color: colors.BLACK_TRANSPARENT_25PERC
  }
};

export default (propName: string) => {
  const { offsetX, offsetY, blurRadius, color } = shadows[propName];
  return `${offsetX} ${offsetY} ${blurRadius} ${color}`;
};
