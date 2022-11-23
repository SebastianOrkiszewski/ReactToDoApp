import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'assets/styles/globalStyles'
import { theme } from 'assets/styles/theme'
import { Wrapper } from './Root.styles'
import Form from 'components/Form/Form'

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Form />
        </Wrapper>
    </ThemeProvider>
  )
}

export default Root