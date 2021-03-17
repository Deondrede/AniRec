import React from "react";
import "./Loginpage.css";
import { Container, Row, Col } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./login.component";
import SignUp from "./signup.component";
//function for login page = home page
function LoginPage(){

    return(
            <Container fluid>
                <Row className="login">
                    <Col>
                        <button>
                            <Link to={"/log-in"}>Log in</Link>
                        </button>
                        <button>
                            <Link to={"/register"}>Register</Link>
                        </button>                    
                    </Col>
                </Row>
                <Row className="login">
                    <Col>
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
                    </Col>                    
                </Row>
                <Row className="test">
                    <p>Testing block</p>
                </Row>
            </Container>
    );
}

export default LoginPage;