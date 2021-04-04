import React, { Fragment } from "react";
import ShowCard from './ShowCard.js';
import Header from "../global_elements/Header"
import TopSpace from "../global_elements/TopSpacer"
import './Homepage.css';

import { Container, Row, Col, Button } from "react-bootstrap";

//will be used as next page to list
function Homepage(){
    return(
        <Fragment>
            <Header />
            <Container>
                <TopSpace />
                <Row id="feed_body">
                    <Col id="feed_col">
                        <Row id="subtitle">
                            <Col id="pink">
                                <strong id="recommended">Recommended</strong>
                            </Col>
                            <Col id="grey"><span></span></Col>
                        </Row>
                        <Row id="main_content">
                            <ShowCard 
                                name="Horimiya"
                                image="[image]" 
                                genre= "Slice of Life, Comedy, Romance, School" 
                                studio="CoverWorks"
                                key_staff="Tomatsu Haruka, Uchiyama Kouki"/>
                            <ShowCard 
                                name="Test Anime 2" 
                                image="[image]" 
                                genre= "romance, slice of life, comedy, shoujo" 
                                studio="Veteran Studio"/>
                            <ShowCard 
                                name="Test Anime 2" 
                                image="[image]" 
                                genre= "romance, slice of life, comedy, shoujo" 
                                studio="Veteran Studio"/>
                            <ShowCard 
                                name="Test Anime 2" 
                                image="[image]" 
                                genre= "romance, slice of life, comedy, shoujo" 
                                studio="Veteran Studio"/>
                        </Row>
                    </Col>
                    <Col id="spacing"></Col>
                    <Col id="feed_col">
                        <Row id="subtitle">
                            <Col id="purple">
                                <strong id="recommended">Airing</strong>
                            </Col>
                            <Col id="grey"><span></span></Col>
                        </Row>
                        <Row id="main_content">
                            <ShowCard 
                                name="Test Anime" 
                                image="[image]" 
                                genre= "action, adventure, tragedy, drama" 
                                studio="New Studio"/>
                            <ShowCard 
                                name="Test Anime 2" 
                                image="[image]" 
                                genre= "romance, slice of life, comedy, shoujo" 
                                studio="Veteran Studio"/>
                        </Row>
                    </Col>
                    <Col id="spacing"></Col>
                    <Col id="feed_col">
                        <Row id="subtitle">
                            <Col id="pink">    
                                <span><strong>Try This</strong></span>
                            </Col>
                            <Col id="grey"><span></span></Col>
                        </Row>
                        <Row id="main_content">
                            <ShowCard 
                                name="Test Anime" 
                                image="[image]" 
                                genre= "action, adventure, tragedy, drama" 
                                studio="New Studio"/>
                            <ShowCard 
                                name="Test Anime 2" 
                                image="[image]" 
                                genre= "romance, slice of life, comedy, shoujo" 
                                studio="Veteran Studio"/>
                        </Row>
                    </Col>
                    <Col id="spacing"></Col>
                    <Col id="feed_col">
                        <Row id="subtitle">
                            <Col id="purple">    
                                <span><strong>Trending</strong></span>
                            </Col>
                            <Col id="grey"><span></span></Col>
                        </Row>
                        <Row id="main_content">
                            <ShowCard 
                                name="Test Anime" 
                                image="[image]" 
                                genre= "action, adventure, tragedy, drama" 
                                studio="New Studio"/>
                            <ShowCard 
                                name="Test Anime 2" 
                                image="[image]" 
                                genre= "romance, slice of life, comedy, shoujo" 
                                studio="Veteran Studio"/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>

    );
}

export default Homepage;