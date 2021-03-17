import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './Button.styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  isSecondary?: boolean
  size?: 'small' | 'medium' | 'large'
  isFullWidth?: boolean
  as?: React.ElementType
} & ButtonTypes

const Button = ({
  size = 'medium',
  isFullWidth = false,
  children,
  ...rest
}: ButtonProps) => (
  <S.Wrapper size={size} isFullWidth={isFullWidth} {...rest}>
    {children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
