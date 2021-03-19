import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigate from "./components/Navigate.js";
import LandingPage from "./components/landing_page/LandingPage.js";
import AnimeOut from "./components/home_page/AnimeOut.js";
import "./App.css";
function App() {
      return (
          <Router>
          <Switch>
            <Route path="/" exact component={() => <LandingPage />} />
            <Route path="/log-in" exact component={() => <LandingPage />} />
            <Route path="/Anime" exact component={() => <AnimeOut />} />
          </Switch>
        </Router>
      );
}

export default App;
