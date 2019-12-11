import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "./App.scss";
import "./components/Character.scss"
import RightContainer from "./components/RightContainer";
import LeftContainer from "./components/LeftContainer";
import FavoriteListContainer from "./components/FavoriteList.container";
import Header from './Header'

function App() {
  return (
    <Router >
      <Header />
    <div className="App split-container">
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
