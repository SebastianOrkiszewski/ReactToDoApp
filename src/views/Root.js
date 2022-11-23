import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'assets/styles/globalStyles'
import { theme } from 'assets/styles/theme'
import { Wrapper } from './Root.styles'

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <div><h1>React</h1></div>
          <div><h1>React</h1></div>
        </Wrapper>
    </ThemeProvider>
  )
}

export default Root