import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from './TextField'

const wrapperModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input} {
      cursor: not-allowed;
      color: ${theme.colors.secondary};

      &::placeholder {
        color: currentColor;
      }
    }
  `,

  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }
  `
}

export const Wrapper = styled.div<
  Pick<TextFieldProps, 'disabled'> & { error?: boolean }
>`
  ${({ theme, disabled, error }) => css`
    ${disabled && wrapperModifiers.disabled(theme)};
    ${error && wrapperModifiers.error(theme)};
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.xxsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;

    ::placeholder {
      color: ${theme.colors.secondary};
    }
  `}
`

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: transparent;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    border: 0.1rem solid ${theme.colors.secondary};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    display: inline-flex;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.primary};
    cursor: pointer;
    margin-left: ${theme.spacings.xxsmall};
    margin-bottom: ${theme.spacings.xxsmall};
    text-transform: uppercase;
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
    margin: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `}
`

export const ErrorWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.red};
    order: 1;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    & > svg {
      width: 100%;
    }
  `}
`
