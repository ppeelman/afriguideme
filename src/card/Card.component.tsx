import React, { FunctionComponent } from "react";

import { Styled } from "./Card.styles";
import useWindowDimensions from "../utils/useWindowDimensions.component";
import IconType from "../enums/IconType.enum";
import Icon from "../ui/icon/Icon.component";
import { IconSize } from "../styling/icon.styling";

type CardProps = {
  children?: any;
  recommended?: boolean;
  media: string; // image URL
  disabled: boolean;
  selected: boolean;
  onClick: () => any;
};

const getCardDimensions = (screenHeight: number, screenWidth: number) => {
  // Maximum height is 50% of screen height
  const maxHeight = 500;

  const height = Math.min(0.45 * screenHeight, maxHeight);
  const width = height / 1.4;

  return {
    width,
    height
  };
};

const Card: FunctionComponent<CardProps> = (props: CardProps) => {
  const { screenHeight, screenWidth } = useWindowDimensions();
  const { height, width } = getCardDimensions(screenHeight, screenWidth);

  const { children, recommended, media, disabled, selected, onClick } = props;

  return (
    <Styled.Card selected={selected} disabled={disabled} onClick={onClick} width={width} height={height}>
      <Styled.CardImageContainer>
        {recommended && (
          <Styled.Recommended>
            <Icon type={IconType.HEART} size={IconSize.MEDIUM} />
            <Styled.RecommendedText>Recommended</Styled.RecommendedText>
          </Styled.Recommended>
        )}
        <Styled.CardImage className="media" imageSrc={media} />
        {selected && <Styled.Selected>&#10004;</Styled.Selected>}
      </Styled.CardImageContainer>
      <Styled.CardText>{children}</Styled.CardText>
    </Styled.Card>
  );
};

export default Card;
