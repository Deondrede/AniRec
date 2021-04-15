import React, { Component, Fragment, useEffect } from "react";
import "./show_more_page.css";

import {AIRING_NOW} from '../../GraphQL/Queries'
import {useQuery} from '@apollo/client'
import TopSpace from "../global_elements/TopSpacer"

import { Container, Row, Col, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../global_elements/Header"
import ShowCard from "../home_page/ShowCard.js"

//function for landing page
function ShowMorePage(){


    const {error, loading, data} = useQuery(AIRING_NOW);

    useEffect(()=>{
      console.log(data)
     }, [data]
    );

    if (loading) return <p>Loading1...</p>
    if (error) return <p>Error1 :(</p>

    return(
        <Fragment>
            <Header />
            <TopSpace />
            <Container className = "App">
                {data.Page.map((media) => (
                    <ShowCard 
                        name={(media.title.english==null)
                            ? media.title.romaji :
                            media.title.english}
                        image={media.coverImage.large}
                        genre= {media.genres.join(', ')}
                        studio={media.studios.nodes[0].name}
                    />
                ))}
            </Container>

        </Fragment>
    );
}

export default ShowMorePage;