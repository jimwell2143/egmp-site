import React from 'react';
import { get } from 'lodash';
import Cookie from 'js-cookie';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from './container/Home/Home';
import Signup from './container/Signup/Signup'
import SignupJobSeeker from './container/SignupJobSeeker/SignupJobSeeker'
import Profile from './container/Profile/Profile';
import JobSeeker from './container/JobSeeker/JobSeeker';
import Document from './container/Document/Document';
import Tracker from './container/Tracker/Tracker';
import Employer from './container/Employer/Employer';
import JobSeekers from './container/Employer/JobSeekers';
import JobOpening from './container/Employer/JobOpening';
import About from './container/Employer/About';
import ScrollToIdWithPaddingTop from './ScrollToIdWithPaddingTop';
import ResetPassword from './container/Home/ResetPassword';

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
    isPrivate: false,
    permission: 'Allow'
  },
  {
    exact: true,
    path: '/reset-password',
    component: ResetPassword,
    isPrivate: false,
    permission: 'Allow'
  },

  {
    exact: true,
    path: '/sign-up',
    component: Signup,
    isPrivate: false,
    permission: 'Allow'
  },
  {
    exact: true,
    path: '/sign-up-job-seeker',
    component: SignupJobSeeker,
    isPrivate: false,
    permission: 'Allow'
  },
  {
    exact: true,
    path: '/profile',
    component: Profile,
    isPrivate: false,
    permission: 'Allow'
  },
  {
    exact: true,
    path: '/job-seeker',
    component: JobSeeker,
    isPrivate: false,
    permission: 'Allow'
  },
  {
    exact: true,
    path: '/documents',
    component: Document,
    isPrivate: false,
    permission: 'Allow'
  },
  {
    exact: true,
    path: '/job-tracker',
    component: Tracker,
    isPrivate: false,
    permission: 'Allow'
  },
  {
    exact: true,
    path: '/employers',
    component: Employer,
    isPrivate: false,
    permission: 'Allow'
  },
  {
    exact: true,
    path: '/job-seekers',
    component: JobSeekers,
    isPrivate: false,
    permission: 'Allow'
  },
  {
    exact: true,
    path: '/job-openings',
    component: JobOpening,
    isPrivate: false,
    permission: 'Allow'
  },
  {
    exact: true,
    path: '/about',
    component: About,
    isPrivate: false,
    permission: 'Allow'
  }

];

export const RouteWithSubRoutes = (route) => {
  
  //const hasPermission = useAcl([route.permission])
  
  if(true) {
    return (
      <Route
        exact={route.exact}
        path={route.path}
        render={(props) => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
  } 
  
} 

const Routers = () => {

//   const isAuthenticated = useSelect('login.isAuthenticated')
  
  return (
    <Router>
      <Switch>
        {routes.filter(x => get(x, 'isPrivate') === false).map(route => {
          return (
            <RouteWithSubRoutes key={`rootRoutes${get(route, 'path')}`} {...route}/>
          )
        })}
      </Switch>
    </Router>
  )
}

export default Routers
