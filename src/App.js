import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Pages
import Home from "./pages/homes/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import RecoverPassword from "./pages/RecoverPassword";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Error from "./pages/Error";
import UserProvider from "./components/providers/UserProvider";
import ViewUserDetails from "./pages/dashboard/ViewUserDetails";
import AccordionList from './components/other/AccordionList';
import BannerOne from './components/banner/banner1/BannerOne';


const App = () => {

  const childRef = useRef();
  let location = useLocation();

  
  useEffect(() => {
    document.body.classList.add('is-loaded')
    childRef.current.init();
  }, [location]);

  return (
    <UserProvider>
    <>
      <ScrollReveal
        ref={childRef}
        children={() => (
        
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
              <AppRoute path="/view-contact-details/:id" component={ViewUserDetails}/>
              <AppRoute path="/dashboard" component={Dashboard} />
              <AppRoute path="/recover" component={RecoverPassword} />
              <AppRoute path="/login" component={Login} />
              <AppRoute path="/sign-up" component={SignUp} />
              <AppRoute component={AccordionList} />
              <AppRoute component={BannerOne} />
              <AppRoute component={Error} />
          </Switch>
        
        )} />
    </>
    </UserProvider>
  );
}

export default App;