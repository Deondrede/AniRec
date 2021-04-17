import React, { Component, Fragment, useEffect } from "react";
import TopSpace from "../global_elements/TopSpacer"

import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../global_elements/Header"
import ShowCard from "../home_page/ShowCard.js"

const GridItem = (props) => (
    <div className="grid__flex">
      <img className="grid__img" src={props.image} alt={props.title}/>
      <h3>{props.title}</h3>
    </div>
)

//function for landing page
function GridComponent(props){
    return (
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

export default GridComponent;