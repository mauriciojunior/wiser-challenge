import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render the large size', () => {
    renderWithTheme(<Button size="large">buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      height: '4.8rem',
      padding: '1.6rem 4.8rem',
      fontSize: '1.6rem'
    })
  })

  it('should render full width one', () => {
    renderWithTheme(
      <Button isFullWidth size="large">
        buy now
      </Button>
    )

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render Button as link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        buy now
      </Button>
    )

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
