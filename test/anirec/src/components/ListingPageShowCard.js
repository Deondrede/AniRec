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
                    <Link to={{
                                pathname:`/Anime/${props.id}`,
                            }}>
                    <img src={props.image} className="center"/> 
                        <div className="listingpage-card-hover-info-outer">
                            <div id="listingpage-card-hover-info-inner">
                                <Row id="listingpage-card-title">
                                    <Link id="listingpage-card-title-text" to={{
                                        pathname:`/Anime/${props.id}`,
                                    }}>
                                    <p className="listingpage-card-text-large"><strong>{props.name}</strong></p>
                                    </Link>
                                </Row>
                                <Row id="listingpage-card-genre">
                                    <p className="listingpage-card-text-small">
                                    {props.genre.map((genres) =>
                                        {
                                            if (genreCount < 2)
                                                return <Link key={genres} className="listingpage-card-tag-links" to={{
                                                            pathname:`/GenresShowMore/${genres}/1`
                                                        }}>{genres}</Link>
                                            else 
                                                genreCount--;
                                                return  <Fragment>
                                                            <Link key={genres} className="listingpage-card-tag-links" to={{
                                                                pathname:`/GenresShowMore/${genres}/1`
                                                                }}>{genres}
                                                            </Link>
                                                            <a>, </a>
                                                        </Fragment>
                                            }
                                    )}
                                    </p>
                                </Row>
                                <Row id="listingpage-card-studios">
                                    <p className="listingpage-card-text-small">
                                        {props.studio}      
                                    </p>
                                </Row>
                            </div>
                        </div>
                        <Row id="listingpage-card-studios">
                            <p id="listingpage-card-text">{props.studio}</p>
                        </Row>
                    </Link>
                </Row>
            </Container>
        </Fragment>

    );
}
export default ListingPageShowCard;