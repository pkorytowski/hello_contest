import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Header, PostContainer, Footer, Menu, UserStuff, Page} from 'components'
function App() {
  return (
    <div className="App">
      <Router>
      {/* <Header/>
      <UserStuff/>
      <PostContainer/>
      <Menu/> */}
      <Switch>
          <Route path="*"> 
              <Page />
          </Route>
        </Switch>
      {/* <Footer/> */}
      </Router>
      
    </div>
  );
}

export default App;
