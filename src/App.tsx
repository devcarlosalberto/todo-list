import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { TaskContextProvider } from './contexts/TaskContext'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

import { Router } from './routes'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TaskContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </TaskContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
