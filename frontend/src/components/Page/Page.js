import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { HomePage,LoginPage } from '../../pages';



const Page = () => {
  return(
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/login' exact component={LoginPage}/> 
      </Switch>
  );
}


export default Page;