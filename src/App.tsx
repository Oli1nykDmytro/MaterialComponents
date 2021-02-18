import React from 'react';
import './App.css';

import SingUpComponent from './component/ContainerSingUp';
//style
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './component/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <SingUpComponent />
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
