// Reference: https://css-tricks.com/books/fundamental-css-tactics/scale-typography-screen-size/
export const scaleFontSize = (
  minimumSize: number, // in rem (relative to the font-size of the root element)
  maximumSize: number, // in rem
  minViewportWidth: number, // in px
  maxViewportWidth: number // in px
) =>
  `calc(${minimumSize}rem + (${maximumSize} - ${minimumSize}) * ((100vw - ${minimumSize}px) / (${maxViewportWidth} - ${minViewportWidth})))`;

const MIN_VIEWPORT_WIDTH = 300;
const MAX_VIEWPORT_WIDTH = 1600;

export const fontSize = {
  XXSMALL: scaleFontSize(0.8, 2, MIN_VIEWPORT_WIDTH, MAX_VIEWPORT_WIDTH),
  XSMALL: scaleFontSize(1.2, 2.4, MIN_VIEWPORT_WIDTH, MAX_VIEWPORT_WIDTH),
  SMALL: scaleFontSize(1.4, 2.6, MIN_VIEWPORT_WIDTH, MAX_VIEWPORT_WIDTH),
  MEDIUM: scaleFontSize(1.6, 2.8, MIN_VIEWPORT_WIDTH, MAX_VIEWPORT_WIDTH),
  LARGE: scaleFontSize(1.8, 3, MIN_VIEWPORT_WIDTH, MAX_VIEWPORT_WIDTH),
  HERO: scaleFontSize(15, 20, MIN_VIEWPORT_WIDTH, MAX_VIEWPORT_WIDTH),
  H1: scaleFontSize(6, 8, MIN_VIEWPORT_WIDTH, MAX_VIEWPORT_WIDTH),
  H2: scaleFontSize(3, 5, MIN_VIEWPORT_WIDTH, MAX_VIEWPORT_WIDTH),
  SUBTITLE: "4.5rem"
};

export const fontFamily = {
  SANS_SERIF: "Nunito",
  HANDWRITING: "Pacifico"
};
