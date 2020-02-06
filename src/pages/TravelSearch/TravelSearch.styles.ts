import styled from 'styled-components';
import colors from '../../styling/colors.styling';
import images from '../../utils/images';
import { hexToRgba } from '../../utils/color.util';
import { fontSize } from '../../styling/font.styling';

const TravelSearchPage = styled.div``;

const FullScreen = styled.div`
  height: 100vh;
`;

const Hero = styled.header`
  position: relative;
  width: 100%;
  height: 85vh;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(
      to bottom,
      ${hexToRgba(colors.WHITE, 0)} 0%,
      ${hexToRgba(colors.WHITE, 0.3)} 85%,
      ${hexToRgba(colors.WHITE, 1)} 100%
    ),
    linear-gradient(to bottom, ${hexToRgba(colors.BLACK, 0.5)}, ${hexToRgba(colors.BLACK, 0.5)}),
    url(${images.heroRwanda});
`;

const Title = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
`;

const SubTitle = styled.p`
  font-size: ${fontSize.SUBTITLE};
  font-weight: 300;
  color: ${colors.LIGHTEST_GREY};
  text-align: center;
  margin-top: -5rem;
`;

const Search = styled.div`
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
`;

export const Styled = {
  FullScreen,
  TravelSearchPage,
  Hero,
  Title,
  SubTitle,
  Search
};
