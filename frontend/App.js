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

  const BgColor={
    backgroundColor: "#2d415a"
  }

  return (
    <div style={BgColor}>
      <BrowserRouter>
        <ToastProvider>
          <NavBar />
          <Switch>
            <Route path={'/'} exact component={Home}></Route>
            <ProtectedRoute path={'/createWorkshop'} exact component={CreateResearchForm} roles={[ROLES.ADMIN, ROLES.EDITOR, ROLES.REVIEWER, ROLES.USER.WORKSHOP_PRESENTER]}/>
            <ProtectedRoute path={'/createResearch'} exact component={CreateResearchForm} roles={[ROLES.ADMIN, ROLES.EDITOR, ROLES.REVIEWER, ROLES.USER.RESEARCHER]} />
            <ProtectedRoute path={'/approvedResearch'} exact component={ApprovedResearch} roles={[ROLES.ADMIN, ROLES.REVIEWER, ROLES.EDITOR, ROLES.USER.ATTENDEE, ROLES.USER.RESEARCHER, ROLES.USER.WORKSHOP_PRESENTER]} />
            <Route path={'/approvedWorkshops'} exact component={ApprovedWorkshop}/>
            <Route path={'/register'} exact component={Register} />
            <Route path={'/login'} exact component={Login} />
            <ProtectedRoute path={'/editor'} component={PostEditor} roles={ROLES.EDITOR} />
            <Route path={'/keynote'} exact component={EditorPosts} />
            <Route path={'/call_for_research_papers'} exact component={EditorPosts} />
            <Route path={'/call_for_workshops'} exact component={EditorPosts} />
            <ProtectedRoute path={'/admin'} exact component={AdminPanel} roles={ROLES.ADMIN} />
            <ProtectedRoute path={'/payment'} exact component={Payment} roles={[ROLES.ADMIN, ROLES.USER.ATTENDEE, ROLES.USER.RESEARCHER]} />
            <ProtectedRoute path={'/reviewResearch'} exact component={ReviewPanel} roles={[ROLES.REVIEWER, ROLES.ADMIN]} />
            <ProtectedRoute path={'/reviewWorkshop'} exact component={ReviewPanel} roles={[ROLES.REVIEWER, ROLES.ADMIN]} />
            <Route path="" component={NotFound} />
          </Switch>
        </ToastProvider>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};
export default App;
