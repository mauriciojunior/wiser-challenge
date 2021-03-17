import ErrorIcon from 'components/ErrorIcon'
import * as React from 'react'
import * as S from './TextField.styles'

export type TextFieldProps = {
  label?: string
  labelFor?: string
  initialValue?: string
  disabled?: boolean
  error?: string
  onInputChange?: (value: string) => void
  onRemoveError?: () => void
} & React.InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label = '',
  labelFor = '',
  initialValue = '',
  disabled = false,
  error = '',
  onInputChange,
  onRemoveError,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = React.useState<string>(initialValue)
  const [hasError, setHasError] = React.useState<boolean>(false)

  React.useEffect(() => {
    setHasError(!!error)
  }, [error])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value

    setValue(newValue)
    onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} error={hasError}>
      {label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputWrapper>
        <S.Input
          type="text"
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
        {hasError && (
          <S.ErrorWrapper
            role="button"
            aria-label="Limpar campo e remover erro"
            onClick={onRemoveError}
          >
            <ErrorIcon />
          </S.ErrorWrapper>
        )}
      </S.InputWrapper>
      {hasError && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default TextField
