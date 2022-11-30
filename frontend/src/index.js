import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container, ThemeProvider, } from '@material-ui/core'
import { theme } from './styles'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < Router >
      <ThemeProvider theme={theme}>
        <Container maxWidth="lg">
        <App />
      </Container>
    </ThemeProvider>
  </Router >
  </React.StrictMode >,
);
