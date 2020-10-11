import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { HomePage,LoginPage, RegisterPage } from '../../pages';



const Page = () => {
  return(
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/login' exact component={LoginPage}/> 
        <Route path='/registration' exact component={RegisterPage}/> 
      </Switch>
  );
}


export default Page;