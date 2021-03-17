import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import userEvent from '@testing-library/user-event'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    renderWithTheme(<FormSignIn />)

    expect(
      screen.getByPlaceholderText(/user.name@mail.com/i)
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText('*******')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument()
  })

  it('should render the forgot password link', () => {
    renderWithTheme(<FormSignIn />)

    expect(screen.getByRole('link', { name: /aqui/i })).toBeInTheDocument()
  })

  it('should show errors', () => {
    renderWithTheme(<FormSignIn />)

    const input = screen.getByPlaceholderText(/user.name@mail.com/i)
    const text = 'test@te'
    userEvent.type(input, text)

    const submitButton = screen.getByText(/entrar/i)

    userEvent.click(submitButton)

    expect(screen.getByText('Digite um e-mail válido')).toBeInTheDocument()
    expect(
      screen.getByText('Sua senha deve possuir 4 ou mais caracteres')
    ).toBeInTheDocument()
  })

  it('should remove input error', () => {
    renderWithTheme(<FormSignIn />)

    const input = screen.getByPlaceholderText(/user.name@mail.com/i)
    const text = 'test@te'
    userEvent.type(input, text)

    const submitButton = screen.getByText(/entrar/i)

    userEvent.click(submitButton)

    expect(screen.getByText('Digite um e-mail válido')).toBeInTheDocument()

    const removeErrorButton = screen.getByRole('button', {
      name: 'Limpar campo e remover erro'
    })

    userEvent.click(removeErrorButton)

    expect(
      screen.queryByText('Digite um e-mail válido')
    ).not.toBeInTheDocument()
  })

  it('should login successfuly', () => {
    renderWithTheme(<FormSignIn />)

    const emailInput = screen.getByPlaceholderText(/user.name@mail.com/i)
    userEvent.type(emailInput, 'test@teste.com')

    const passwordInput = screen.getByPlaceholderText('*******')
    userEvent.type(passwordInput, '123456')

    const submitButton = screen.getByText(/entrar/i)

    userEvent.click(submitButton)

    expect(
      screen.queryByText('Digite um e-mail válido')
    ).not.toBeInTheDocument()
    expect(
      screen.queryByText('Sua senha deve possuir 4 ou mais caracteres')
    ).not.toBeInTheDocument()
  })
})
