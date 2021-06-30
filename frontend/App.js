import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';

import NavBar from './src/components/navBar/NavBar';
import Footer from "./src/components/footer/footer";
import ApprovedWorkshop from "./src/components/workshop/ApprovedWorkshop";
import Home from './src/components/home/Home';
import Register from './src/components/auth/Register';
import Login from './src/components/auth/Login';

import ApprovedResearch from "./src/components/research/ApprovedResearch";

import { ProtectedRoute } from './src/components/auth/ProtectedRoute';
import { ROLES } from './src/constants/constants';
import PostEditor from './src/components/editor/PostEditor';
import EditorPosts from './src/components/EditorPost/EditorPosts';
import AdminPanel from './src/components/admin/AdminPanel';
import Payment from './src/components/payment/Payment';
import CreateResearchForm from './src/components/createReasearch/CreateResearchForm';


import ReviewPanel from './src/components/review/ReviewPanel';
import NotFound from './src/common/NotFound';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <ToastProvider>
          <Switch>
            <Route path={'/'} exact component={Home}></Route>
            <ProtectedRoute path={'/createWorkshop'} exact component={CreateResearchForm} roles={[ROLES.ADMIN, ROLES.REVIEWER, ROLES.USER.WORKSHOP_PRESENTER, ROLES.USER.ATTENDEE]}></ProtectedRoute>
            <ProtectedRoute path={'/createResearch'} exact component={CreateResearchForm} roles={[ROLES.ADMIN, ROLES.REVIEWER, ROLES.USER.ATTENDEE, ROLES.USER.RESEARCHER, ROLES.USER.WORKSHOP_PRESENTER]}></ProtectedRoute>
            <ProtectedRoute path={'/approvedWorkshops'} exact component={ApprovedWorkshop} roles={[ROLES.ADMIN, ROLES.REVIEWER, ROLES.USER.ATTENDEE, ROLES.USER.RESEARCHER, ROLES.USER.WORKSHOP_PRESENTER]}></ProtectedRoute>
            <ProtectedRoute path={'/approvedResearch'} exact component={ApprovedResearch} roles={[ROLES.ADMIN, ROLES.REVIEWER, ROLES.USER.ATTENDEE, ROLES.USER.RESEARCHER, ROLES.USER.WORKSHOP_PRESENTER]}></ProtectedRoute>
            <Route path={'/register'} exact component={Register} />
            <Route path={'/login'} exact component={Login} />
            <Route path={'/editor'} component={PostEditor} />
            <Route path={'/keynote'} exact component={EditorPosts} />
            <Route path={'/call_for_research_papers'} exact component={EditorPosts} />
            <Route path={'/call_for_workshops'} exact component={EditorPosts} />
            <Route path={'/admin'} exact component={AdminPanel} />
            <Route path={'/payment'} exact component={Payment} />
            <Route path={'/reviewResearch'} exact component={ReviewPanel} />
            <Route path={'/reviewWorkshop'} exact component={ReviewPanel} />
            <Route path="" component={NotFound} />
          </Switch>
        </ToastProvider>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};
export default App;
