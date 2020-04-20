import styled from "styled-components";

// Style import for react-bnb-gallery, else styles are not loaded...
import "react-bnb-gallery/dist/style.css";
import colors, { hexToRgba } from "../../styling/color.styling";

const Title = styled.div`
  transform: rotateZ(90deg);
`;

const PreviewContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  bottom: 2rem;
  width: 100%;
  background-image: linear-gradient(to right, ${hexToRgba(colors.BLACK, 0.1)} 10%, ${hexToRgba(colors.BLACK, 0.5)} 90%);
  padding: 2rem;
  padding-right: 0;
`;

type ImagePreviewProps = {
  imageSrc?: string;
};

const ImagePreview = styled("div")<ImagePreviewProps>`
  ${({ imageSrc }: ImagePreviewProps) => `background-image: url(${imageSrc});`}
  transition: transform .1s linear;
  background-size: cover;
  background-position: center;
  height: 15rem;
  width: 15rem;
  position: relative;
  box-shadow: 5px 5px 10px ${colors.BLACK_TRANSPARENT_25PERC};
  border: .25px solid white;

  &:hover {
    transform: scale(1.05);
  }
`;

// const Icon = styled('img')<IconProps>`
//   ${({ size }: IconProps) => `height: ${size}`}
// `;

export const Styled = {
  Title,
  PreviewContainer,
  ImagePreview
};
