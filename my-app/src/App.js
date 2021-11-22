import React from "react";
import { Route, withRouter, BrowserRouter, Switch } from "react-router-dom";

import logo from "./logo.svg";

import Layout from "./Screens/Layout/Layout";

import "./App.css";
import Notifications from "./Screens/Layout/Notifications/Notifications";
import CreateChannel from "./Screens/Layout/Form/CreateChannel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Layout />
      </Switch>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
