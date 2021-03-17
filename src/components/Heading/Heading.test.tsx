import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white text by default', () => {
    renderWithTheme(<Heading>Ola, seja bem-vindo</Heading>)

    expect(
      screen.getByRole('heading', { name: /Ola, seja bem-vindo/i })
    ).toHaveStyle({ color: '#383E71' })
  })

  it('should render a secondary color text', () => {
    renderWithTheme(<Heading color="secondary">Ola, seja bem-vindo</Heading>)

    expect(
      screen.getByRole('heading', { name: /Ola, seja bem-vindo/i })
    ).toHaveStyle({ color: '#989FDB' })
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(<Heading size="small">Ola, seja bem-vindo</Heading>)

    expect(
      screen.getByRole('heading', { name: /Ola, seja bem-vindo/i })
    ).toHaveStyle({ fontSize: '1.4rem' })
  })

  it('should render a heading with a medium size', () => {
    renderWithTheme(<Heading size="medium">Ola, seja bem-vindo</Heading>)

    expect(
      screen.getByRole('heading', { name: /Ola, seja bem-vindo/i })
    ).toHaveStyle({ fontSize: '1.6rem' })
  })

  it('should render a heading with a huge size', () => {
    renderWithTheme(<Heading size="huge">Ola, seja bem-vindo</Heading>)

    expect(
      screen.getByRole('heading', { name: /Ola, seja bem-vindo/i })
    ).toHaveStyle({ fontSize: '4.0rem' })
  })
})
