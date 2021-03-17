import styled, { css } from 'styled-components'
import { darken } from 'polished'

import * as TextFieldStyles from 'components/TextField/TextField.styles'
import * as ButtonStyles from 'components/Button/Button.styles'

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.small} 0;
    }

    ${ButtonStyles.Wrapper} {
      margin: 0 auto ${theme.spacings.medium};
    }
  `}
`

export const FormLink = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.secondary};
    text-align: center;
    line-height: 2rem;

    a {
      color: ${theme.colors.studio};
      text-decoration: none;
      border-bottom: 0.1rem solid ${theme.colors.studio};
      transition: color, border, ${theme.transition.fast};

      &:hover {
        color: ${darken(0.1, theme.colors.studio)};
        border-bottom-color: ${darken(0.1, theme.colors.studio)};
      }
    }
  `}
`
