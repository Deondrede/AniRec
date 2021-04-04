import React, { Fragment, useEffect, useState } from "react";
import "./ShowCard.css";
//frame for the anime to show
import { Container, Row, Col } from "react-bootstrap";

import {useQuery, gql} from '@apollo/client'
import {LOAD_ANIME} from '../../GraphQL/Queries'

function ShowCard(props){
    
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
                <Container id="card">
                    <Row id="card_body">
                        <Col>
                            <img id="image" src={`${data.Media.coverImage.large}`} class="center"/>                        </Col>
                        <Col id="description">
                            <Row id="title">
                                <p id="text">{`${data.Media.title.english}`}</p>
                            </Row>
                            <Row id="genres">
                                <p id="text">{props.genre}</p>
                            </Row>
                            <Row id="studio">
                                <p id="text">{props.studio}</p>
                            </Row>
                            <Row id="key_staff">
                                <p id="text">{props.key_staff}</p>
                            </Row>
                        </Col>
                    </Row>
                </Container>
        </Fragment>
    );
}

export default ShowCard;