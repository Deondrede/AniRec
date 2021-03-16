import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigate from "./components/Navigate.js";
import LoginPage from "./components/LoginPage.js";
import AnimeOut from "./components/AnimeOut.js";
import "./App.css";
function App() {
      return (
          <Router>
          <Navigate />
          <Switch>
            <Route path="/" exact component={() => <LoginPage />} />
            <Route path="/log-in" exact component={() => <LoginPage />} />
            <Route path="/Anime" exact component={() => <AnimeOut />} />
          </Switch>
        </Router>
      );
}

export default App;
