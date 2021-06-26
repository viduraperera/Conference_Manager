import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './src/components/navBar/NavBar';
import CreateWorkshop from './src/components/createWorkshop/CreateWorkshop';
import Home from './src/components/home/Home';
import register from './src/components/auth/register';
import login from './src/components/auth/login';
import { ProtectedRoute } from './src/components/auth/ProtectedRoute';
import { ROLES } from './src/constants/constants';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path={'/'} exact component={Home}></Route>
          <ProtectedRoute path={'/createWorkshop'} exact component={CreateWorkshop} roles={[ROLES.ADMIN, ROLES.REVIEWER]}></ProtectedRoute>
          <Route path={'/register'} exact component={register} />
          <Route path={'/login'} exact component={login} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;
