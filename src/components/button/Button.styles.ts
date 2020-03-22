import styled from 'styled-components';

import borderRadius from '../../styling/borderRadius.styling';
import colors from '../../styling/color.styling';
import getShadow from '../../styling/shadows.styling';
import BtnType from '../../enums/BtnType.enum';
import {fontSize} from '../../styling/font.styling';

type ButtonProps = {
  btnType: BtnType;
};

const btnTypeStyle = (btnType: BtnType) => {
  switch (btnType) {
    case BtnType.PRIMARY:
      return `
        background: ${colors.PRIMARY};
        color: ${colors.WHITE};
      `;

    case BtnType.PRIMARY_GRADIENT:
      return `
        background-image: linear-gradient(to right top, ${colors.PRIMARY_LIGHT}, ${colors.PRIMARY});
        color: ${colors.WHITE};
      `;

    case BtnType.SECONDARY:
      return `
        background: ${colors.WHITE};
        color: ${colors.PRIMARY};
      `;

    case BtnType.GHOST:
      return `
        background-color: transparent;
        border: 1px solid ${colors.WHITE};
        color: ${colors.WHITE}
      `;

    case BtnType.BACK:
      return `
          background: ${colors.LIGHTEST_GREY};
          color: ${colors.PRIMARY};
        `;
  }
};

const Button = styled('button')<ButtonProps>`
  cursor: pointer;
  border: none;
  border-radius: ${borderRadius.SMALL};
  padding: 1.2rem 3.7rem;
  outline: none;
  transition: all 0.3s;
  font-size: ${fontSize.LARGE}

  :hover {
    box-shadow: ${getShadow('MEDIUM')};
    transform: translateY(-1px);
  }

  ${({ btnType }: ButtonProps) => btnTypeStyle(btnType)}
`;

export const Styled = {
  Button
};
