import React, { Fragment, useEffect, useState } from "react";
import ShowCard from './ShowCard.js';
import Header from "../global_elements/Header"
import TopSpace from "../global_elements/TopSpacer"
import './Homepage.css';

import {useQuery, gql} from '@apollo/client'
import {LOAD_ANIME} from '../GraphQL/Queries'

import { Container, Row, Col, Button } from "react-bootstrap";

//will be used as next page to list
function Homepage(){
    const {error, loading, data} = useQuery(LOAD_ANIME);
    useEffect(()=>{
      console.log(data)
    }, [data]
  );
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  var imgLink = data.Media.coverImage.large

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
                                name={`${data.Media.title.english}`}
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