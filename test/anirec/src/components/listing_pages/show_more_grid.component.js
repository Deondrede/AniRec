import React, { Component, Fragment, useEffect } from "react";
import "./show_more_page.css";
import Header from "../global_elements/Header";
import TopSpace from "../global_elements/TopSpacer";
import {AIRING_NOW} from '../../GraphQL/Queries';
import ShowCard from '../home_page/ShowCard';
import { Container, Row, Col, Button } from "react-bootstrap";

import {useQuery} from '@apollo/client';

function returnGrid (){

        const {error, loading, data} = useQuery(AIRING_NOW);
    
        let state = {
            items: []
        }

        useEffect(()=>{
            console.log(data)
        }, [data]
        );

        if (loading) return <p>Loading1...</p>
        if (error) return <p>Error1 :(</p>
        state.items = data.Page.media
            return (
                <Fragment>
                    <Header />
                    <TopSpace />
                    <Container className = "App">
                        {items.map(item => (
                            <ShowCard 
                                name={(item.title.english==null)
                                    ? item.title.romaji :
                                    item.title.english}
                                image={item.coverImage.large}
                                genre= {item.genres.join(', ')}
                                studio={item.studios.nodes[0].name}
                        />
                    ))}
                    </Container>
                </Fragment>
            );
}

export default returnGrid;