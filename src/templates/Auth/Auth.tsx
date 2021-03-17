import Heading from 'components/Heading'
import * as S from './Auth.styles'

const Auth = ({ children }: { children: React.ReactNode }) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent />
    </S.BannerBlock>
    <S.Content>
      <S.ContentWrapper>
        <S.ContentHeadings>
          <Heading color="primary" size="huge">
            Olá, seja bem-vindo!
          </Heading>
          <Heading color="secondary" size="medium">
            <strong>Para acessar a plataforma, faça seu login</strong>
          </Heading>
        </S.ContentHeadings>

        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth
