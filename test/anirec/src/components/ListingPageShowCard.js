import React, { Fragment} from "react";
import "./ListingPageShowCard.css";
//frame for the anime to show
import { Container, Row } from "react-bootstrap";


function ListingPageShowCard(props){
    return(
        <Fragment>
            <Container className="float-center" id="ListingPage_card">
                <Row>
                    <img id="ListingPage_cards_image" src={props.image} className="center"/>    
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
            </Container>
        </Fragment>

    );
}
export default ListingPageShowCard;