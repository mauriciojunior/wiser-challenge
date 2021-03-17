import { render, RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(
    <Provider store={configureStore()({ user: { username: '' } })}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  )
