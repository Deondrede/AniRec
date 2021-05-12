import React, { Fragment } from "react";
import "./LandingPage.css";

import { Container, Row, Col} from "react-bootstrap";

import LrTabs from "./login_register_tabs.component.js";

//function for landing page
function LandingPage(){
    return(
        <Fragment>
            <Container fluid classname="landingpage-container">
            <Row id="landing_page_body">
                <Col id="login_space">
                    <LrTabs />
                </Col>
                <Col id="wallpaper">
                </Col>
            </Row>                 
            </Container>
        </Fragment>
  
    );
}

export default LandingPage;