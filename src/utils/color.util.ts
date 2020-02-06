export const hexToRgba = (hex: string, alpha: number = 1): string => {
  // @ts-ignore
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};
