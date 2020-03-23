import React, { FunctionComponent } from "react";
import { Styled } from "./Card.styles";
import useWindowDimensions from "../helper/useWindowDimensions.component";

type CardProps = {
  children?: any,
  media: string, // image URL
  disabled: boolean,
  selected: boolean,
  onClick: () => any
};

const getCardDimensions = (screenHeight: number, screenWidth: number) => {
  // Maximum height is 50% of screen height
  const maxHeight = 500;

  const height = Math.min(0.5 * screenHeight, maxHeight);
  const width = height / 1.4;

  return {
    width,
    height
  };
};

const Card: FunctionComponent<CardProps> = (props: CardProps) => {
  const { screenHeight, screenWidth } = useWindowDimensions();
  const { height, width } = getCardDimensions(screenHeight, screenWidth);

  const { children, media, disabled, selected, onClick } = props;

  return (
    <Styled.Card
      disabled={disabled}
      onClick={onClick}
      width={width}
      height={height}
    >
      <Styled.CardImageContainer>
        <Styled.CardImage className="media" imageSrc={media} />
        {selected && <Styled.Selected>&#10004;</Styled.Selected>}
      </Styled.CardImageContainer>
      <Styled.CardText>{children}</Styled.CardText>
    </Styled.Card>
  );
};

export default Card;
