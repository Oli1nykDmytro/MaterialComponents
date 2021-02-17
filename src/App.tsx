import React from 'react';
import { Switch, Route} from 'react-router-dom'
import StoryBook from './component/StoryBook'
// import './App.css';

import './common/them'

function App() {
  return (
  <>
  <Switch>
    <Route path="/story-book" exact>
        <StoryBook/>
      </Route>
    </Switch>
  </>

  );
}

export default App;
