import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import About from "../About";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import Blog from "../Blog";
import BlogDetails from "../BlogDetails/BlogDetails";
import Contact from "../Contact/Contact";
import Context from "../Context/Context";
import GetYourReport from "../GetYourReport";
import Home from "../Home";
import Navigation from "../Navigation";
import Overview from "../Overview";
import PasswordForgetPage from "../PasswordForget";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SignInPage from "../SignIn";
import SignUpPage from "../SignUp";
import ServiceDetails from "../Billing/ServiceDetails";
import Billing from "../Billing/Billing"
import Account from './../Account/index';
import BlogPost from "../Blog/BlogPost";






const App = () => {
  return(
    <Context>
      <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={ROUTES.Home} component={Home} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.About} component={About} />
      <PrivateRoute path={ROUTES.ACCOUNT}>
        <Account></Account>
      </PrivateRoute>
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route path={ROUTES.Overview} component={Overview} />
      <Route path={ROUTES.Blog} component={Blog} />
      <Route path={ROUTES.BlogDetails} component={BlogDetails} />
      <Route path={ROUTES.Contact} component={Contact} />
      <Route path="/blogpost">
        <BlogPost></BlogPost>
        </Route>
      <PrivateRoute path="/ServiceDetails/:ServiceId" >
      <ServiceDetails></ServiceDetails>
      </PrivateRoute>
      <PrivateRoute path="/billing" >
        <Billing></Billing>
      </PrivateRoute>
      <PrivateRoute path={ROUTES.GetYourReport} > 
      <GetYourReport></GetYourReport>
      </PrivateRoute>
    </div>
  </Router>
    </Context>
    
  )
};

export default App;
