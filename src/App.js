import React from "react";

// Stuff
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Style
import "./assets/css/style.css";
import "./assets/css/components.css";

// Redux

import { Provider } from "react-redux";
import store from "./redux/store";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashbord from "./pages/Dashbord";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Dashbord />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
