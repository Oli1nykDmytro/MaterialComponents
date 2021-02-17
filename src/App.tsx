import React from 'react';
import { Switch, Route } from 'react-router-dom';
import StoryBook from './component/StoryBook';
// import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './common/them';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/story-book" exact>
            <StoryBook />
          </Route>
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
