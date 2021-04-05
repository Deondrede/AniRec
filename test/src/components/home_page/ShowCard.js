import React, { Fragment, useEffect, useState } from "react";
import "./ShowCard.css";
//frame for the anime to show
import { Container, Row, Col } from "react-bootstrap";


function ShowCard(props){
    return(
        <Fragment>
                <Container id="card">
                    <Row id="card_body">
                        <Col>
                            <img id="image" src={props.image} class="center"/>                        </Col>
                        <Col id="description">
                            <Row id="title">
                                <p id="text">{props.name}</p>
                            </Row>
                            <Row id="genres">
                                <p id="text">{props.genre}</p>
                            </Row>
                            <Row id="studio">
                                <p id="text">{props.studio}</p>
                            </Row>
                            <Row id="key_staff">
                                <p id="text">{props.key_staff}</p>
                            </Row>
                        </Col>
                    </Row>
                </Container>
        </Fragment>
    );
}

export default ShowCard;