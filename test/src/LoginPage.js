import React from "react";
import "./Loginpage.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/landing_page/login.component";
import SignUp from "./components/landing_page/signup.component";
//function for login page = home page
function LoginPage(){

    return(
        <div className="logbg">
            <div className="login">
                <h1>AniRec</h1>
                <p>A plot based Anime Recommender</p>
                <p>made by students of CUNY Hunter College Spring 2021 CSCI 499</p>

                <Router>
                <div className="App">
                    
                    <button>
                        <Link to={"/log-in"}>Log in</Link>
                    </button>
                    <button>
                        <Link to={"/register"}>Register</Link>
                    </button>
            
                <div className="outer">
                    <div className="inner">
                    <Switch>
                        <Route exact path='/' component={Login} />
                        <Route path="/log-in" component={Login} />
                        <Route path="/register" component={SignUp} />
                    </Switch>
                    </div>
                </div>
                </div></Router>

            </div>
        </div>
    );
}

export default LoginPage;