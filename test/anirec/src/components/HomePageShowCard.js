import React, { Fragment, useEffect, useState } from "react";
import "./HomePageShowCard.css";
//frame for the anime to show
import { Container, Row, Col } from "react-bootstrap";


function HomePageShowCard(props){
    return(
        <Fragment>
                <Container id="HomePage_cards">
                    <Row>
                        <Col>
                            <img id="HomePage_card_image" src={props.image} class="center"/>
                        </Col>
                        <Col id="HomePage_card_description">
                            <Row id="HomePage_card_title">
                                <p id="HomePage_card_text">{props.name}</p>
                            </Row>
                            <Row id="HomePage_card_genres">
                                <p id="HomePage_card_text">{props.genre}</p>
                            </Row>
                            <Row id="HomePage_card_studio">
                                <p id="HomePage_card_text">{props.studio}</p>
                            </Row>
                        </Col>
                    </Row>
                </Container>
        </Fragment>
    );
}

export default HomePageShowCard;