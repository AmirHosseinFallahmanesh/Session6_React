import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import {Home} from "./Home.js"
import {Dashboard} from "./Dashboard.js"
import {About} from "./About.js"


export const  Container1 = () => {
    return (
        <Router>
          <div>
          <nav class="navbar navbar-expand-sm bg-light navbar-light">
  <ul class="navbar-nav">
    <li className="nav-item ">
    <NavLink className="nav-link" activeClassName="active-menu-item"  to="/">Home</NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-link" activeClassName="active-menu-item"  to="/about">About</NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-link" activeClassName="active-menu-item"  to="/dashboard">Dashboard</NavLink>
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
              <Route path="/dashboard">
                <Dashboard />
              </Route>
         
            </Switch>
          </div>
        </Router>
      );
    }


    export const  Container = () => {
        return (
            <Router>
              <div>
    <nav class="navbar navbar-expand-sm bg-light navbar-light">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">WebSiteName</a>
        </div>
        <ul class="navbar-nav">
          <li className="nav-item" > <Link className="nav-link"  to="/">Home</Link></li>
          <li className="nav-item"  > <Link className="nav-link" to="/about">About</Link></li>
          <li className="nav-item" > <Link className="nav-link"  to="/dashboard">Dashboard</Link></li>
         
        </ul>
      </div>
    </nav>            
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/dashboard">
                    <Dashboard />
                  </Route>
             
                </Switch>
              </div>
            </Router>
          );
        }