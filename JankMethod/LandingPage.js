import React, { Fragment } from "react";
import "./LandingPage.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../global_elements/Header"
import { BrowserRouter as Router, Switch, Route, Link, withRouter  } from "react-router-dom";
import Login from "./login.component";
import SignUp from "./signup.component";

//function for landing page
function LandingPage(){
    return(
        <Fragment>
            <Header />
            <Router>
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
                        <Row id="logo">
                            <h1>AniRec</h1>
                        </Row>
                        <div>
                            <Row  id="main_content">
                                <Switch>
                                    <Route exact path='/' component={Login} />
                                    <Route path="/log-in" component={Login} />
                                    <Route path="/register" component={SignUp} />
                                </Switch>
                            </Row>
                        </div>
                    </Col>                    
                </Row>
            </Container>
            </Router>
        </Fragment>
    );
}

export default withRouter(LandingPage);