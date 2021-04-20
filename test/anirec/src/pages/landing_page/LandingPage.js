import React, { Fragment } from "react";
import "./LandingPage.css";

import { Container, Row, Col} from "react-bootstrap";

import LR_Tabs from "./login_register_tabs.component";
{/*import LR_Space from "./login_register_space.component";*/}

//function for landing page
function LandingPage(){
    return(
        <Fragment>
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