import React, { Fragment, useEffect, useState } from "react";
import "./ListingPageShowCard.css";
//frame for the anime to show
import { Container, Row, Col } from "react-bootstrap";


function ListingPageShowCard(props){
    return(
            <Col>
                <img id="ListingPage_cardsimage" src={props.image} class="center"/>
            </Col>
    );
}

/*
<Col id="ListingPage_cardsdescription">
    <Row id="ListingPage_cardstitle">
        <p id="ListingPage_cardstext">{props.name}</p>
    </Row>
    <Row id="ListingPage_cardsgenres">
        <p id="ListingPage_cardstext">{props.genre}</p>
    </Row>
    <Row id="ListingPage_cardsstudio">
        <p id="ListingPage_cardstext">{props.studio}</p>
    </Row>
</Col>
*/

export default ListingPageShowCard;