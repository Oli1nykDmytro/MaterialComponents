import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StoryBook from './component/StoryBook';
// import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './common/them';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
        <Switch>
          <Route path="/story-book" exact>
            <StoryBook />
          </Route>
        </Switch>
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
