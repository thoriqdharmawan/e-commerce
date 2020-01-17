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
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import Dashbord from "./pages/Dashbord";
import Posts from "./pages/Posts";
import AddPost from "./pages/AddPost";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/addpost">
            <AddPost />
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
