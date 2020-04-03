import React from 'react';
import {BrowserRouter as Router , Route,Redirect, Switch} from 'react-router-dom'
import Users from './user/pages/Usres'
import Newplace from './places/pages/newPlaces'
import MainNav from './shared/components/Nav/MainNav'

const App = () => {
  return (
    <Router>
      <MainNav />
      <main>
      <Switch>
        <Route path = '/' exact>
          <Users />
        </Route>

      <Route path = '/places/new' exact>
        <Newplace />
      </Route>

      <Redirect to='/' />
        </Switch> 
      </main>  
    </Router>
         

     
  )
 
}

export default App;
