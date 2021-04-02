import React, { Component, Fragment } from "react";
import "./login_register_space.component.css";

import Login from "./login.component";
import SignUp from "./signup.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";

export default class LR_Space extends Component {
    render(){
        return(
            <Fragment>
                <Row id="logo">
                    <h1>AniRec</h1>
                </Row>
                <Row id="login_space">
                    <Router>
                        <div className="App">                
                            <div className="outer">
                                <div className="inner">
                                    <Switch id="form_content">
                                        <Route exact path='/' component={Login} />
                                        <Route path="/log-in" component={Login} />
                                        <Route path="/register" component={SignUp} />
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </Router>
                </Row>
            </Fragment>
        );
    }
}