import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import { Provider } from "react-redux";
import "./App.css";
import store from "./store";

import { Home, Taks, User } from "./pages";

function App() {
  const [token] = useState(true);
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <h1>React App</h1>
          <Link to="/">Home</Link> /
          <Link
            to={{
              pathname: "/taks",
              testData: "orionFox",
            }}
          >
            Taks
          </Link>{" "}
          /<Link to="/user">User</Link>
          <hr />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/taks" component={Taks} />
            <Route
              path="/user"
              render={() => {
                return token ? <User /> : <Redirect to="/" />;
              }}
            />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
