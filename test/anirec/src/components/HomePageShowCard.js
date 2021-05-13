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
            {/* Start of HomePageCard*/}
                <Container className="homepage-card-outer">
                    <Row id="homepage-card-inner">

                        {/* Start of Show Image on Left-Side*/}
                        <Col className="homepage-card-img">
                            <Link to={{
                                        pathname:`/Anime/${props.id}`,
                                        state: {
                                            id: props.id
                                        }
                                    }}>
                                <img src={props.image}/>
                            </Link>
                                <div className="homepage-card-hover-info">
                                    <p>{props.description}</p>
                                </div>
                        </Col>
                        {/* End of Show Image on Left-Side*/}

                        {/* Start of Show Description on Right-Side*/}
                        <Col id="homepage-card-description">

                            {/* Start of Show Title*/}
                            <Row id="homepage-card-title">
                                <Link to={{
                                        pathname:`/Anime/${props.id}`,
                                        state: {
                                            id: props.id
                                        }
                                    }}>
                                <p id="homepage-card-text">{props.name}</p>
                                </Link>
                            </Row>
                            {/* End of Show Title*/}
                            
                            {/* Start of Show's Genres*/}
                            <Row id="homepage-card-genres">
                                <p id="homepage-card-text">
                                    {/* Mapping each one to a Link to GenreShowMore*/}
                                    {props.genre.map((genres) =>
                                        {
                                            if (genreCount < 2)
                                                return <Link key={genres} className="homepage-card-tag-links" to={{
                                                            pathname:`/GenresShowMore/${genres}/1`
                                                        }}>{genres}</Link>
                                            else 
                                                genreCount--;
                                                return  <Fragment>
                                                            <Link key={genres} className="homepage-card-tag-links" to={{
                                                                pathname:`/GenresShowMore/${genres}/1`
                                                                }}>{genres}
                                                            </Link>
                                                            <a>, </a>
                                                        </Fragment>
                                        }
                                    )}
                                </p>
                            </Row>
                            {/* End of Show's Genres*/}

                            {/* Start of Show's Studio*/}
                            <Row id="homepage-card-studio">
                                <p id="homepage-card-text">{props.studio}</p>
                            </Row>
                            {/* End of Show's Studio*/}

                        </Col>
                        {/* End of Show Description on Right-Side*/}

                    </Row>
                </Container>
                {/* End of HomePageCard*/}                
        </Fragment>
    );
}

export default HomePageShowCard;