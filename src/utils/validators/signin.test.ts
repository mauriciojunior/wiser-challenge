import { signInValidate } from './signin'

describe('Signin Validator', () => {
  it('should return errors', () => {
    expect(signInValidate({ email: 'sdasf@asdf', password: '' })).toMatchObject(
      {
        email: 'Digite um e-mail válido',
        password: 'Sua senha deve possuir 4 ou mais caracteres'
      }
    )
  })

  it('should not return errors', () => {
    expect(
      signInValidate({ email: 'sdasf@asdf.com', password: '123456' })
    ).toMatchObject({})
  })
})
