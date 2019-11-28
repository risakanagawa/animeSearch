import React from "react";
import "./App.scss";
import "./components/Character.scss"
import Container from "./components/Chatacter.container";
import LeftContainer from "./components/LeftContainer";

function App() {
  return (
    <div className="App split-container">
      <LeftContainer />
      <Container />
    </div>
  );
}

export default App;
