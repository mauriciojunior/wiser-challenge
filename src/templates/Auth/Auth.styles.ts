import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/Heading.styles'

export const Wrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  ${media.greaterThan('small')`
    grid-template-columns: 0.6fr 1.4fr;
  `}

  ${media.greaterThan('medium')`
    grid-template-columns: 0.8fr 1.2fr;
  `};
`

export const BannerBlock = styled.div`
  ${() => css`
    background-image: url(/img/auth-bg-desktop.jpg);
    background-size: cover;
    background-position: center center;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(
        180deg,
        #130525 0%,
        rgba(105, 57, 153, 0) 100%
      );
      transform: rotate(-180deg);
    }

    ${media.lessThan('large')`
      background-image: url(/img/auth-bg.jpg);
    `};

    ${media.lessThan('small')`
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    `};
  `}
`

export const BannerContent = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: ${theme.layers.base};
    display: grid;
    grid-template-columns: 1fr;
    height: 100%;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.magnolia};
    display: grid;
    align-items: center;
    justify-content: center;

    ${media.lessThan('small')`
      position: absolute;
      top: 50%;
      left: 50%;
      padding: ${theme.spacings.small};
      border-radius: ${theme.border.radius};
      transform: translate(-50%, -50%);
      z-index: ${theme.layers.alwaysOnTop};
    `};
  `}
`

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem;

    ${HeadingStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${media.greaterThan('medium')`
      width: 36rem;
    `}
  `}
`

export const ContentHeadings = styled.div`
  max-width: 23rem;

  ${media.greaterThan('small')`
    width: 100%;
  `}
`
