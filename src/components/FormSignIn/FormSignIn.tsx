import React from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'

import { FormWrapper, FormLink } from 'components/Form'
import TextField from 'components/TextField'
import Button from 'components/Button'

import { signInValidate, FieldErrors } from 'utils/validators/signin'
import { loginRequest } from 'store/user/actions/user.actions'

const FormSignIn = () => {
  const [fieldError, setFieldError] = React.useState<FieldErrors>({})
  const [values, setValues] = React.useState({ email: '', password: '' })
  const dispatch = useDispatch()
  const state = useSelector((state: any) => state.user)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const errors = signInValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})
    dispatch(loginRequest(values))
  }

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const onRemoveError = (field: string) => {
    setFieldError({ ...fieldError, [field]: '' })
  }

  if (state.username) alert('Login efetuado com sucesso')
  if (state.isFail) alert('Usuário não encontrado')

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          name="email"
          placeholder="user.name@mail.com"
          type="email"
          label="E-mail"
          labelFor="email"
          error={fieldError?.email}
          onInputChange={(v: string) => handleInput('email', v)}
          onRemoveError={() => onRemoveError('email')}
        />
        <TextField
          name="password"
          placeholder="*******"
          type="password"
          labelFor="password"
          label="Senha"
          error={fieldError?.password}
          onInputChange={(v: string) => handleInput('password', v)}
          onRemoveError={() => onRemoveError('password')}
        />

        <Button size="large" isFullWidth>
          {state.isLoading ? 'FAZENDO LOGIN...' : 'ENTRAR'}
        </Button>

        <FormLink>
          Esqueceu seu login ou senha?
          <br />
          Clique{' '}
          <Link href="/">
            <a>aqui</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn
