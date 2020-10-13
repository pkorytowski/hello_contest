import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { HomePage,LoginPage, RegisterPage } from '../../pages';



const Page = ({ setLogged, isLogged }) => {
  return(
      <Switch>
        <Route path='/' exact component={() => <HomePage isLogged={isLogged} /> }/>
        <Route path='/login' exact component={() => <LoginPage setLogged={setLogged}/>}/> 
        <Route path='/registration' exact component={() => <RegisterPage/>}/> 
      </Switch>
  );
}


export default Page;