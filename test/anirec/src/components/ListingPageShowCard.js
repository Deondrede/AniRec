import React, { Fragment} from "react";
import "./ListingPageShowCard.css";
//frame for the anime to show
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


function ListingPageShowCard(props){
    let genreCount = props.genre.length

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
                    <a id="ListingPage_card_text">
                    {props.genre.map((genres) =>
                        {
                            if (genreCount < 2)
                                return <Link key={genres} id="tag_links" to={{
                                            pathname:`/GenresShowMore/${genres}`
                                        }}>{genres}</Link>
                            else 
                                genreCount--;
                                return  <Fragment>
                                            <Link key={genres} id="tag_links" to={{
                                                pathname:`/GenresShowMore/${genres}`
                                                }}>{genres}
                                            </Link>
                                            <a>, </a>
                                        </Fragment>
                            }
                    )}
                    </a>
                </Row>
                <Row id="ListingPage_cards_studios">
                    <a id="ListingPage_card_text">{props.studio}</a>
                </Row>
            </Container>
        </Fragment>

    );
}
export default ListingPageShowCard;