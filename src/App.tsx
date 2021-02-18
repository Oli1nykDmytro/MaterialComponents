import React from 'react';
import './App.css';

import SingUpComponent from './component/ContainerSingUp';
//style
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme/theme';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Switch>
            <Route path="/sing-up" exact component={SingUpComponent} />
            {/* <Route component={SingUpComponent}/> */}
          </Switch>
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
