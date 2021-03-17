import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from './Button'

import { lighten } from 'polished'

const modifiers = {
  small: (theme: DefaultTheme) => css``,

  medium: (theme: DefaultTheme) => css``,

  large: (theme: DefaultTheme) => css`
    height: 4.8rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xsmall} ${theme.spacings.xlarge};
  `,

  isFullWidth: () => `width: 100%`
}

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, size, isFullWidth }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(280deg, #383e71 0%, #9d25b0 99.18%);
    box-shadow: 0px 10px 25px #cf99db;
    color: ${theme.colors.white};
    border: 0;
    border-radius: ${theme.border.radius};
    cursor: pointer;
    padding: ${theme.spacings.xsmall};
    text-decoration: none;
    font-weight: ${theme.font.bold};

    &:hover {
      background: linear-gradient(
        280deg,
        ${lighten(0.005, '#383E71')} 0%,
        ${lighten(0.005, '#9D25B0')} 50%
      );
    }

    ${size && modifiers[size](theme)};
    ${isFullWidth && modifiers.isFullWidth()};
  `}
`
