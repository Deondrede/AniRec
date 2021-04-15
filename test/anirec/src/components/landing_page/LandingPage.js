import React, { Component, Fragment } from "react";
import "./LandingPage.css";

import Login from "./login.component";
import SignUp from "./signup.component";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../global_elements/Header"

import LR_Tabs from "./login_register_tabs.component";
{/*import LR_Space from "./login_register_space.component";*/}

//function for landing page
function LandingPage(){
    return(
        <Fragment>
            <Header />
            <Container fluid>
            <Row id="landing_page_body">
                <Col id="login_space">
                    <LR_Tabs />
                </Col>
                <Col id="wallpaper">
                </Col>
            </Row>
            {/*<Row id="login">
                <Col>
                    <LR_Space />
                </Col>  
            </Row>*/}                  
            </Container>
        </Fragment>
  
    );
}

export default LandingPage;