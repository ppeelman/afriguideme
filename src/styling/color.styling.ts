export const hexToRgba = (hex: string, alpha: number = 1): string => {
  // @ts-ignore
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};


const colors = {
  PRIMARY: '#B15E5E',
  PRIMARY_LIGHT: '#C88E8D',
  WHITE: '#FFFFFF',
  LIGHTEST_GREY: '#D7D7D7',
  LIGHT_GREY: '#999999',
  BLACK: '#000000',
  BLACK_TRANSPARENT_25PERC: hexToRgba('#000000', 0.25)
};

export default colors;
