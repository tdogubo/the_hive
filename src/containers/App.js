import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Article from "../components/Article/Article";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Navigation />
      </div>
      <Article />
    </div>
  );
}

export default App;
