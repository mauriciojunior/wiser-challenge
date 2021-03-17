import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth>
        <input type="text" />
      </Auth>
    )

    expect(
      screen.getByRole('heading', { name: /Olá, seja bem-vindo!/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /Para acessar a plataforma, faça seu login/i
      })
    ).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
