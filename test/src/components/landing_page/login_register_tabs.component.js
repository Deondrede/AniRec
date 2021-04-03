import React, { Component, Fragment } from "react";

import Login from "./login.component";
import SignUp from "./signup.component";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";

import "./login_register_tabs.component.css"

export default class LR_Tabs extends Component {
    render(){
        return(
            <Fragment>
                <Router>
                    <Row className="App">
                        <Row id="landing_tabs">
                                <Link id="tab_name" to={"/log-in"}>
                                    <Button id="sign_in" >
                                        <p>Log In</p>                                        
                                    </Button>
                                </Link>
                                <Link id="tab_name" to={"/register"}>
                                    <Button id="register" >
                                        <p>Register</p>                                        
                                    </Button>
                                </Link>
                        </Row>
                        <Row id="outer">
                            <Row id="logo">
                                <h1>AniRec</h1>
                            </Row>
                            <Row id="lr_comp">
                                <div id="inner">
                                    <Switch>
                                        <Route exact path='/' component={Login} />
                                        <Route path="/log-in" component={Login} />
                                        <Route path="/register" component={SignUp} />
                                    </Switch>
                                </div>
                            </Row>
                        </Row>
                    </Row>
                </Router>

            </Fragment> 
        );
    }
}