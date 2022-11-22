import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'assets/styles/globalStyles'
import { theme } from 'assets/styles/theme'


const Root = () => {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div><h1>React</h1></div>
    </ThemeProvider>
  )
}

export default Root