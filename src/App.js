import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Pages
import Home from "./pages/homes/Home";
import Home2 from './pages/homes/Home2';
import Home3 from './pages/homes/Home3';
import Home4 from './pages/homes/Home4';
import Home5 from './pages/homes/Home5';
import AllCategories from './pages/categories/AllCategories';
import AllLocations from './pages/categories/AllLocations';
import TopPlaces from "./pages/categories/TopPlaces";
import ListingGrid from "./pages/listings/ListingGrid";
import ListingList from "./pages/listings/ListingList";
import ListMapView from "./pages/listings/ListMapView";
import ListMapView2 from "./pages/listings/ListMapView2";
import ListLeftSidebar from "./pages/listings/ListLeftSidebar";
import ListRightSidebar from "./pages/listings/ListRightSidebar";
import ListingDetails from "./pages/listings/ListingDetails";
import AddListing from "./pages/listings/AddListing";
import UserProfile from "./components/other/account/UserProfile";
import TopAuthors from "./pages/TopAuthors";
import Dashboard from "./pages/dashboard/Dashboard";
import Booking from "./pages/dashboard/Booking";
import BookingConfirmation from "./pages/dashboard/BookingConfirmation";
import Invoice from "./pages/dashboard/Invoice";
import PricingPlan from "./pages/PricingPlan";
import About from "./pages/About";
import Faq from "./pages/FAQ";
import Contact from "./pages/Contact";
import RecoverPassword from "./pages/RecoverPassword";
import BlogFullWidth from "./pages/blogs/BlogFullWidth";
import BlogGrid from "./pages/blogs/BlogGrid";
import BlogLeftSidebar from "./pages/blogs/BlogLeftSidebar";
import BlogRightSidebar from "./pages/blogs/BlogRightSidebar";
import BlogDetail from "./pages/blogs/BlogDetail";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Error from "./pages/Error";


const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    document.body.classList.add('is-loaded')
    childRef.current.init();
  }, [location]);

  return (
    <>
      <ScrollReveal
        ref={childRef}
        children={() => (
          <Switch>
            <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
              <AppRoute path="/index2" component={Home2} />
              <AppRoute path="/index3" component={Home3} />
              <AppRoute path="/index4" component={Home4} />
              <AppRoute path="/index5" component={Home5} />
              <AppRoute path="/all-categories" component={AllCategories} />
              <AppRoute path="/all-locations" component={AllLocations} />
              <AppRoute path="/top-place" component={TopPlaces} />
              <AppRoute path="/listing-grid" component={ListingGrid} />
              <AppRoute path="/listing-list" component={ListingList} />
              <AppRoute path="/list-map-view" component={ListMapView} />
              <AppRoute path="/list-map-view2" component={ListMapView2} />
              <AppRoute path="/list-left-sidebar" component={ListLeftSidebar} />
              <AppRoute path="/list-right-sidebar" component={ListRightSidebar} />
              <AppRoute path="/listing-details" component={ListingDetails} />
              <AppRoute path="/add-listing/new" component={AddListing} />
              <AppRoute path="/user-profile" component={UserProfile} />
              <AppRoute path="/top-author" component={TopAuthors} />
              <AppRoute path="/dashboard" component={Dashboard} />
              <AppRoute path="/booking" component={Booking} />
              <AppRoute path="/booking-confirmation" component={BookingConfirmation} />
              <AppRoute path="/invoice" component={Invoice} />
              <AppRoute path="/pricing" component={PricingPlan} />
              <AppRoute path="/about" component={About} />
              <AppRoute path="/faq" component={Faq} />
              <AppRoute path="/contact" component={Contact} />
              <AppRoute path="/recover" component={RecoverPassword} />
              <AppRoute path="/blog-full-width" component={BlogFullWidth} />
              <AppRoute path="/blog-grid" component={BlogGrid} />
              <AppRoute path="/blog-left-sidebar" component={BlogLeftSidebar} />
              <AppRoute path="/blog-right-sidebar" component={BlogRightSidebar} />
              <AppRoute path="/blog-single" component={BlogDetail} />
              <AppRoute path="/login" component={Login} />
              <AppRoute path="/sign-up" component={SignUp} />
              <AppRoute component={Error} />
          </Switch>
        )} />
    </>
  );
}

export default App;