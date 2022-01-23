import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";

import {Home} from "./Home.js"
import {Dashboard} from "./Dashboard.js"
import {About} from "./About.js"
import {Product} from "./Product.js"
import {Cantact} from "./Cantact.js"
import {Shop} from "./Shop.js"
import {NotFound} from "./NotFound.js"
import {Construct} from './Construct'

export const  Container = () => {
    return (
        <Router>
          <div>
          <nav class="navbar navbar-expand-sm bg-info  navbar-light">
  <ul class="navbar-nav">
    <li className="nav-item ">
    <NavLink className="nav-link" activeClassName="active-menu-item"  to="/">Home</NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-link" activeClassName="active-menu-item"  to="/about">About</NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-link" activeClassName="active-menu-item"  to="/dashboard/v1/mob">Dashboard</NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-link" activeClassName="active-menu-item"  to="/product/4">Product</NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-link" activeClassName="active-menu-item"  to="/cantact">Cantact</NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-link" activeClassName="active-menu-item"  to="/shop?category=shirt">Shop</NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-link" activeClassName="active-menu-item"  to="/crm">CRM</NavLink>
    </li>
  </ul>
</nav>
    
    
          
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/dashboard/:version/:type">
                <Dashboard />
              </Route>
              <Route path="/product/:id">
                <Product />
              </Route>
              <Route path="/cantact">
                <Cantact />
              </Route>
              <Route path="/shop">
                <Shop />
              </Route>
              <Route path="/construct">
                <Construct />
              </Route>
              <Route path="/crm">
                <Redirect to="construct" /> 
              </Route>
         
            </Switch>
          </div>
        </Router>
      );
    }


  