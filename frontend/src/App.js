import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Page} from 'components'
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="*"> 
              <Page />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
