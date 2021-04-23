import React, { Fragment, useEffect, useState } from "react";
import "./ListingPageShowCard.css";
//frame for the anime to show
import { Container, Row, Col } from "react-bootstrap";


function ListingPageShowCard(props){
    return(
        <Fragment className="float-center" id="ListingPage_card">
                <Row>
                    <img id="ListingPage_cards_image" src={props.image} class="center"/>    
                </Row>
                <Row id="ListingPage_cards_title">
                    <a id="ListingPage_card_text">{props.name}</a>
                </Row>
                <Row id="ListingPage_cards_genre">
                    <a id="ListingPage_card_text">{props.genre}</a>
                </Row>
                <Row id="ListingPage_cards_studios">
                    <a id="ListingPage_card_text">{props.studio}</a>
                </Row>
        </Fragment>

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