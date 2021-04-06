import React, { Fragment, useEffect, useState  } from "react";
import ShowCard from './ShowCard.js';
import Header from "../global_elements/Header"
import TopSpace from "../global_elements/TopSpacer"
import {RECOMMENDED,AIRING_NOW} from '../../GraphQL/Queries'

import {useQuery} from '@apollo/client'
import './Homepage.css';

import { Container, Row, Col, Button } from "react-bootstrap";

//will be used as next Page to list
function HomePage(){

    const {error, loading, data} = useQuery(AIRING_NOW);
    const {error: err1, loading: load1, data: data1} = useQuery(RECOMMENDED)
    //const col1 = useQuery(RECOMMENDED);
    useEffect(()=>{
      console.log(data)
      //console.log(col1.data.Page.media.length)

    }, [data/*, col1.data*/]
  );

    useEffect(()=>{
      console.log(data1)
     }, [data1]
    );
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>
      //  if (col1.loading) return <p>Loading...</p>
       // if (col1.error) return <p>Error :(</p>

    // this is to check and make sure names are displayed since some of them dont have english names
    let name_array1 = [data.Page.media.length];
    for (let i = 0; i < data.Page.media.length; i++) {
        let temp_name = data.Page.media[i].title.english;
        if (temp_name == null){
            temp_name = data.Page.media[i].title.romaji;
        }
        name_array1[i] = temp_name;
    }

    let col2_1 = {
        name: name_array1[0],
        image: data.Page.media[0].coverImage.large,
        genre: data.Page.media[0].genres.join(', '),
        studio: data.Page.media[0].studios.nodes[0].name
    }


    let col2_2 = {
        name: name_array1[1],
        image: data.Page.media[1].coverImage.large,
        genre: data.Page.media[1].genres.join(', '),
        studio: data.Page.media[1].studios.nodes[0].name
    }

    let col2_3 = {
        name:  name_array1[2],
        image: data.Page.media[2].coverImage.large,
        genre: data.Page.media[2].genres.join(', '),
        studio: data.Page.media[2].studios.nodes[0].name
    }

    let col2_4 = {
        name:  name_array1[3],
        image: data.Page.media[3].coverImage.large,
        genre: data.Page.media[3].genres.join(', '),
        studio: data.Page.media[3].studios.nodes[0].name
    }
    //col2_1.name = data.Media[0].title.english

    /*error, loading, data = useQuery(RECOMMENDED);
    useEffect(()=>{
      console.log(data)
    }, [data]
  );
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>*/

    /*    let name_array2 = [col1.data.Page[1].media.length];
        for (let i = 0; i < col1.data.Page[1].media.length; i++) {
            let temp_name = col1.data.Page[1].media[i].title.english;
            if (temp_name == null){
                temp_name = col1.data.Page[1].media[i].title.romaji;
            }
            name_array2[i] = temp_name;
        }

        let col1_1 = {
            name: name_array2[1],
            image: col1.data.Page[1].media[0].coverImage.large,
            genre: col1.data.Page[1].media[0].genres.join(', '),
            studio: col1.data.Page[1].media[0].studios.nodes[0].name
        }


        let col1_2 = {
            name: name_array2[1],
            image: col1.data.Page[1].media[1].coverImage.large,
            genre: col1.data.Page[1].media[1].genres.join(', '),
            studio: col1.data.Page[1].media[1].studios.nodes[0].name
        }

        /*let col1_3 = {
            name:  name_array2[2],
            image: col1.data.Page.media[2].coverImage.large,
            genre: col1.data.Page.media[2].genres.join(', '),
            studio: col1.data.Page.media[2].studios.nodes[0].name
        }

        let col1_4 = {
            name:  name_array2[3],
            image: col1.data.Page.media[3].coverImage.large,
            genre: col1.data.Page.media[3].genres.join(', '),
            studio: col1.data.Page.media[3].studios.nodes[0].name
        }*/
      let col1_1 ={
        name: (data1.series1.title.english==null)
                ? data1.series1.title.romaji :
                    data1.series1.title.english,
        image: data1.series1.coverImage.medium,
        genre: data1.series1.genres.join(", "),
        studio: data1.series1.studios.nodes[0].name
      }

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
                                    name={col2_1.name}
                                    image={col2_1.image}
                                    genre={col2_1.genre}
                                    studio={col2_1.studio}/>
                                <ShowCard
                                    name={col2_2.name}
                                    image={col2_2.image}
                                    genre={col2_2.genre}
                                    studio={col2_2.studio}/>
                                <ShowCard
                                    name={col2_3.name}
                                    image={col2_3.image}
                                    genre={col2_3.genre}
                                    studio={col2_3.studio}/>
                                <ShowCard
                                    name={col2_4.name}
                                    image={col2_4.image}
                                    genre={col2_4.genre}
                                    studio={col2_4.studio}/>

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
                                name={col1_1.name}
                                image={col1_1.image}
                                genre= {col1_1.genre}
                                studio={col1_1.studio}/>
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

export default HomePage;
