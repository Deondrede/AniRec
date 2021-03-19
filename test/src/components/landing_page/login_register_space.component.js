import React, { Component, Fragment } from "react";
import "./login_register_space.component.css";

import Login from "./login.component";
import SignUp from "./signup.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class LR_Space extends Component {
    render(){
        return(
            <Fragment>
                <h1>AniRec</h1>
                <Router>
                    <div className="App">                
                        <div className="outer">
                            <div className="inner">
                                <Switch>
                                    <Route exact path='/' component={Login} />
                                    <Route path="/log-in" component={Login} />
                                    <Route path="/register" component={SignUp} />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </Router>
            </Fragment>
        );
    }
}