export type FieldErrors = {
  [key: string]: string
}

type SignInValues = { email: string; password: string }

const emailIsValid = (email: string) => {
  return /\S+@\S+\.\S+/.test(email)
}

export function signInValidate(values: SignInValues) {
  const { email, password } = values
  const errors: FieldErrors = {}

  if (!emailIsValid(email)) errors.email = 'Digite um e-mail válido'
  if (password.length < 4)
    errors.password = 'Sua senha deve possuir 4 ou mais caracteres'

  return errors
}
