import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.scss";
import "./responsive.scss"
import "./components/Character.scss"
import RightContainer from "./components/RightContainer";
import LeftContainer from "./components/Left/LeftContainer";
import FavoriteListContainer from "./components/FavoriteList.container";

function App() {
  return (
    <Router >
    <div className="split-container">
    <LeftContainer />
    <Switch>
          <Route path="/favorites">
            <FavoriteListContainer />
          </Route>
          <Route path="/">
          <RightContainer />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
