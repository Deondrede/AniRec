import React, { Fragment } from "react";
import Header from "../../components/global_elements/Header"
import TopSpace from "../../components/global_elements/TopSpacer"
import './show_page.css';

import { Container, Row, Col, Button } from "react-bootstrap";

//will be used as next page to list
function ShowPage(){
    return(
        <Fragment>
            <Header />
            <TopSpace />
            <Container>
                <Row id="main_body">
                    <h3>test</h3>
                </Row>
            </Container>
        </Fragment>

    );
}

export default ShowPage;