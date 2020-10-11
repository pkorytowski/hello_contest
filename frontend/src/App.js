import React from 'react';
import './App.css';
import {Header, PostContainer, Footer, Menu, UserStuff} from 'components'
function App() {
  return (
    <div className="App">
      <Header/>
      <PostContainer/>
      <Footer/>
      <Menu/>
      <UserStuff/>
    </div>
  );
}

export default App;
