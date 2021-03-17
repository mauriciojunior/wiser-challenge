import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingProps } from './Heading'

export const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
    font-weight: ${theme.font.normal};
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, size }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors[color!]};

    ${size && wrapperModifiers[size](theme)}
  `}
`
