import React, { Fragment } from "react";
import ShowAnime from './ShowAnime.js';

import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../global_elements/Header"
import TopSpace from "../global_elements/TopSpacer"

//will be used as next page to list
function AnimeOut(){
    return(
        <Fragment>
            <Header />
            <Container>
                <TopSpace />
                <Row id="feed_body">
                    <Col id="feed_col">
                        <span id="pink"><strong>Recommended</strong></span>
                        <ShowAnime 
                            name="Test Anime" 
                            image="[image]" 
                            genre= "action, adventure, tragedy, drama" 
                            studio="New Studio"/>
                        <ShowAnime 
                            name="Test Anime 2" 
                            image="[image]" 
                            genre= "romance, slice of life, comedy, shoujo" 
                            studio="Veteran Studio"/>
                    </Col>
                    <Col id="spacing"></Col>
                    <Col id="feed_col">
                        <span id="purple"><strong>Now Airing</strong></span>
                        <ShowAnime 
                            name="Test Anime" 
                            image="[image]" 
                            genre= "action, adventure, tragedy, drama" 
                            studio="New Studio"/>
                        <ShowAnime 
                            name="Test Anime 2" 
                            image="[image]" 
                            genre= "romance, slice of life, comedy, shoujo" 
                            studio="Veteran Studio"/>
                    </Col>
                    <Col id="spacing"></Col>
                    <Col id="feed_col">
                        <span id="pink"><strong>Try This</strong></span>
                        <ShowAnime 
                            name="Test Anime" 
                            image="[image]" 
                            genre= "action, adventure, tragedy, drama" 
                            studio="New Studio"/>
                        <ShowAnime 
                            name="Test Anime 2" 
                            image="[image]" 
                            genre= "romance, slice of life, comedy, shoujo" 
                            studio="Veteran Studio"/>
                    </Col>
                    <Col id="spacing"></Col>
                    <Col id="feed_col">
                        <span id="purple"><strong>Trending</strong></span>
                        <ShowAnime 
                            name="Test Anime" 
                            image="[image]" 
                            genre= "action, adventure, tragedy, drama" 
                            studio="New Studio"/>
                        <ShowAnime 
                            name="Test Anime 2" 
                            image="[image]" 
                            genre= "romance, slice of life, comedy, shoujo" 
                            studio="Veteran Studio"/>
                    </Col>
                </Row>
            </Container>
        </Fragment>

    );
}

export default AnimeOut;