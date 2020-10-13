import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Page} from 'components'
function App() {
  const [isLogged, setLogged] = useState(false)
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="*"> 
              <Page setLogged={setLogged} isLogged={isLogged} />
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
