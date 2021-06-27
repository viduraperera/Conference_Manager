import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './src/components/navBar/NavBar';
import Footer from './src/components/footer/footer';

import CreateWorkshop from './src/components/createWorkshop/CreateWorkshop';
import Home from './src/components/home/Home';
import Register from './src/components/auth/Register';
import Login from './src/components/auth/Login';
import { ProtectedRoute } from './src/components/auth/ProtectedRoute';
import { ROLES } from './src/constants/constants';
import PostEditor from './src/components/editor/PostEditor';
import Post from './src/components/editor/Post';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Switch>
          <Route path={'/'} exact component={Home}></Route>
          <ProtectedRoute path={'/createWorkshop'} exact component={CreateWorkshop} roles={[ROLES.ADMIN, ROLES.REVIEWER, ROLES.USER.WORKSHOP_PRESENTER]}></ProtectedRoute>
          <Route path={'/register'} exact component={Register} />
          <Route path={'/login'} exact component={Login} />
          <Route path={'/editor'} exact component={PostEditor} />
          <Route path={'/post'} exact component={Post} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
};
export default App;
