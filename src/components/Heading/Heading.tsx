import * as S from './Heading.styles'

export type Colors = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  color?: Colors
  size?: 'small' | 'medium' | 'huge'
}

const Heading = ({
  children,
  color = 'primary',
  size = 'medium'
}: HeadingProps) => (
  <S.Wrapper color={color} size={size}>
    {children}
  </S.Wrapper>
)

export default Heading
