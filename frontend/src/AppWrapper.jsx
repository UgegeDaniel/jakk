import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, ThemeProvider, } from '@material-ui/core'
import { theme } from './styles'

const AppWrapper =  ({children}) => (
    < React.StrictMode >
    < Router >
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg">
                {children}
            </Container>
        </ThemeProvider>
    </Router >
  </React.StrictMode >
)
export default AppWrapper;