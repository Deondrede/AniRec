import React, { Fragment} from "react";
import "./ListingPageShowCard.css";
//frame for the anime to show
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


function ListingPageShowCard(props){
    let genreCount = props.genre.length

    return(
        <Fragment>
            <Container className="float-center" id="listingpage-card-outer">
                <Row id="listingpage-card-image">
                    <img src={props.image} className="center"/> 
                        <div className="listingpage-card-hover-info-outer">
                            <div id="listingpage-card-hover-info-inner">
                                <Row id="listingpage-card-title">
                                    <a id="listingpage-card-text">{props.name}</a>
                                </Row>
                                <Row id="listingpage-card-genre">
                                    <a id="listingpage-card-text">
                                    {props.genre.map((genres) =>
                                        {
                                            if (genreCount < 2)
                                                return <Link key={genres} id="tag-links" to={{
                                                            pathname:`/GenresShowMore/${genres}/1`
                                                        }}>{genres}</Link>
                                            else 
                                                genreCount--;
                                                return  <Fragment>
                                                            <Link key={genres} id="tag-links" to={{
                                                                pathname:`/GenresShowMore/${genres}/1`
                                                                }}>{genres}
                                                            </Link>
                                                            <a>, </a>
                                                        </Fragment>
                                            }
                                    )}
                                    </a>
                                </Row>
                                <Row id="listingpage-card-studios">
                                    <a id="listingpage-card-text">
                                        {props.studio}                                    </a>
                                </Row>
                            </div>
                        </div>
                        <Row id="listingpage-card-studios">
                            <a id="listingpage-card-text">{props.studio}</a>
                        </Row>
                </Row>
            </Container>
        </Fragment>

    );
}
export default ListingPageShowCard;