import React, { Fragment } from "react";
import "./Loginpage.css";

import Login from "./login.component";
import SignUp from "./signup.component";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header"

//function for login page = home page
function LoginPage(){

    return(
        <Fragment>
            <Header />
            <Container fluid>
            <Row id="tabs">
                <Col>
                    <Button id="sign_in" variant="flat">
                        <Link id="tab_name" to={"/log-in"}>Log in</Link>
                    </Button>
                    <Button  id="register" variant="flat">
                        <Link id="tab_name" to={"/register"}>Register</Link>
                    </Button>                    
                </Col>
            </Row>
            <Row id="login">
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
        </Container>
        </Fragment>
  
    );
}

export default LoginPage;