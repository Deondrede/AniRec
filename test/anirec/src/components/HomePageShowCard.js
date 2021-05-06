import React, { Fragment } from "react";
import "./HomePageShowCard.css";
//frame for the anime to show
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
//import GenreQuery from "./dynamic_genre_query";

function HomePageShowCard(props){
    let genreCount = props.genre.length

    return(
        <Fragment>
                <Container id="HomePage_cards">
                    <Row>
                        <Col>
                            <img id="HomePage_card_image" src={props.image} className="center"/>
                        </Col>
                        <Col id="HomePage_card_description">
                            <Row id="HomePage_card_title">
                                <p id="HomePage_card_text">{props.name}</p>
                            </Row>
                            <Row id="HomePage_card_genres">
                                <p id="HomePage_card_text">
                                    {props.genre.map((genres) =>
                                        {
                                            if (genreCount < 2)
                                                return <Link key={genres} id="tag_links" to={{
                                                            pathname:`/GenresShowMore/${genres}/1`
                                                        }}>{genres}</Link>
                                            else 
                                                genreCount--;
                                                return  <Fragment>
                                                            <Link key={genres} id="tag_links" to={{
                                                                pathname:`/GenresShowMore/${genres}/1`
                                                                }}>{genres}
                                                            </Link>
                                                            <a>, </a>
                                                        </Fragment>
                                        }
                                    )}
                                </p>
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