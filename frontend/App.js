import React from 'react';
import { Container } from '@material-ui/core';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import NavBar from './src/components/navBar/navBar';
import home from './src/components/home/home';
import register from './src/components/auth/register';
import login from './src/components/auth/login';

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth={'lg'}>
        {/* <NavBar/> */}
        <Switch>
          <Route path={'/'} exact component={home} />
          <Route path={'/register'} exact component={register} />
          <Route path={'/login'} exact component={login} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};
export default App;
