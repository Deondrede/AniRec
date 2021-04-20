import React, { Fragment, useEffect, useState  } from "react";
import HomePageShowCard from '../../components/HomePageShowCard';
import TopSpace from "../../components/global_elements/TopSpacer"
import {RECOMMENDED,AIRING_NOW, TRY_THIS, TRENDING} from '../../GraphQL/Queries'

import {useQuery} from '@apollo/client'
import './Homepage.css';

import { Container, Row, Col, Button } from "react-bootstrap";

//will be used as next Page to list
function HomePage(){

    const {error, loading, data} = useQuery(AIRING_NOW);
    const {error: errorC2, loading: loadingC2, data: dataC2} = useQuery(RECOMMENDED);
    const {error: errorC3, loading: loadingC3, data: dataC3} = useQuery(TRY_THIS);
    const {error: errorC4, loading: loadingC4, data: dataC4} = useQuery(TRENDING);

    useEffect(()=>{
      console.log(data)
     }, [data]
    );
      
    useEffect(()=>{
        console.log(dataC2)
        }, [dataC2]
    );

    useEffect(()=>{
        console.log(dataC3)
        }, [dataC3]
    );

    useEffect(()=>{
        console.log(dataC4)
        }, [dataC4]
    );

    if (loading) return <p>Loading1...</p>
    if (error) return <p>Error1 :(</p>
        if (loadingC2) return <p>Loading2...</p>

    if (errorC2) return <p>Error2 :(</p>
        if (loadingC3) return <p>Loading3...</p>

    if (errorC3) return <p>Error3 :(</p>
        if (loadingC4) return <p>Loading4...</p>

    if (errorC4) return <p>Error4 :(</p>

    //if (dataC2) return <p>Loading2...</p>
    //if (dataC2) return <p>Error2 :(</p>

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
    
    let col1_1 = {
        name: (dataC2.series1.title.english==null)
            ? dataC2.series1.title.romaji :
            dataC2.series1.title.english,
        image: dataC2.series1.coverImage.large,
        genre: dataC2.series1.genres.join(', '),
        studio: dataC2.series1.studios.nodes[0].name
    }

    
    let col1_2 = {
        name: (dataC2.series2.title.english==null)
            ? dataC2.series2.title.romaji :
            dataC2.series2.title.english,
        image: dataC2.series2.coverImage.large,
        genre: dataC2.series2.genres.join(', '),
        studio: dataC2.series2.studios.nodes[0].name
    }
    
    let col1_3= {
        name: (dataC2.series3.title.english==null)
            ? dataC2.series3.title.romaji :
            dataC2.series3.title.english,
        image: dataC2.series3.coverImage.large,
        genre: dataC2.series3.genres.join(', '),
        studio: dataC2.series3.studios.nodes[0].name
    }

    let col1_4 = {
        name: (dataC2.series4.title.english==null)
        ? dataC2.series4.title.romaji :
        dataC2.series4.title.english,
        image: dataC2.series4.coverImage.large,
        genre: dataC2.series4.genres.join(', '),
        studio: dataC2.series4.studios.nodes[0].name
    }

    let col3_1 = {
        name: (dataC3.series1.title.english==null)
            ? dataC3.series1.title.romaji :
            dataC3.series1.title.english,
        image: dataC3.series1.coverImage.large,
        genre: dataC3.series1.genres.join(', '),
        studio: dataC3.series1.studios.nodes[0].name
    }

    let col3_2 = {
        name: (dataC3.series2.title.english==null)
            ? dataC3.series2.title.romaji :
            dataC3.series2.title.english,
        image: dataC3.series2.coverImage.large,
        genre: dataC3.series2.genres.join(', '),
        studio: dataC3.series2.studios.nodes[0].name
    }
    
    let col3_3= {
        name: (dataC3.series3.title.english==null)
            ? dataC3.series3.title.romaji :
            dataC3.series3.title.english,
        image: dataC3.series3.coverImage.large,
        genre: dataC3.series3.genres.join(', '),
        studio: dataC3.series3.studios.nodes[0].name
    }

    let col3_4 = {
        name: (dataC3.series4.title.english==null)
        ? dataC3.series4.title.romaji :
        dataC3.series4.title.english,
        image: dataC3.series4.coverImage.large,
        genre: dataC3.series4.genres.join(', '),
        studio: dataC3.series4.studios.nodes[0].name
    }

    let col4_1 = {
        name: (dataC4.series1.title.english==null)
            ? dataC4.series1.title.romaji :
            dataC4.series1.title.english,
        image: dataC4.series1.coverImage.large,
        genre: dataC4.series1.genres.join(', '),
        studio: dataC4.series1.studios.nodes[0].name
    }

    let col4_2 = {
        name: (dataC4.series2.title.english==null)
            ? dataC4.series2.title.romaji :
            dataC4.series2.title.english,
        image: dataC4.series2.coverImage.large,
        genre: dataC4.series2.genres.join(', '),
        studio: dataC4.series2.studios.nodes[0].name
    }
    
    let col4_3= {
        name: (dataC4.series3.title.english==null)
            ? dataC4.series3.title.romaji :
            dataC4.series3.title.english,
        image: dataC4.series3.coverImage.large,
        genre: dataC4.series3.genres.join(', '),
        studio: dataC4.series3.studios.nodes[0].name
    }

    let col4_4 = {
        name: (dataC4.series4.title.english==null)
        ? dataC4.series4.title.romaji :
        dataC4.series4.title.english,
        image: dataC4.series4.coverImage.large,
        genre: dataC4.series4.genres.join(', '),
        studio: dataC4.series4.studios.nodes[0].name
    }
  
    return(
        <Fragment>
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
                            <HomePageShowCard
                                name={col1_1.name}
                                image={col1_1.image}
                                genre= {col1_1.genre}
                                studio={col1_1.studio}/>
                            <HomePageShowCard
                                name={col1_2.name}
                                image={col1_2.image}
                                genre= {col1_2.genre}
                                studio={col1_2.studio}/>
                            <HomePageShowCard
                                name={col1_3.name}
                                image={col1_3.image}
                                genre= {col1_3.genre}
                                studio={col1_3.studio}/>
                            <HomePageShowCard
                                name={col1_4.name}
                                image={col1_4.image}
                                genre= {col1_4.genre}
                                studio={col1_4.studio}/>

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
                            <HomePageShowCard
                                    name={col2_1.name}
                                    image={col2_1.image}
                                    genre={col2_1.genre}
                                    studio={col2_1.studio}/>
                                <HomePageShowCard
                                    name={col2_2.name}
                                    image={col2_2.image}
                                    genre={col2_2.genre}
                                    studio={col2_2.studio}/>
                                <HomePageShowCard
                                    name={col2_3.name}
                                    image={col2_3.image}
                                    genre={col2_3.genre}
                                    studio={col2_3.studio}/>
                                <HomePageShowCard
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
                            <HomePageShowCard
                                    name={col3_1.name}
                                    image={col3_1.image}
                                    genre={col3_1.genre}
                                    studio={col3_1.studio}/>
                                <HomePageShowCard
                                    name={col3_2.name}
                                    image={col3_2.image}
                                    genre={col3_2.genre}
                                    studio={col3_2.studio}/>
                                <HomePageShowCard
                                    name={col3_3.name}
                                    image={col3_3.image}
                                    genre={col3_3.genre}
                                    studio={col3_3.studio}/>
                                <HomePageShowCard
                                    name={col3_4.name}
                                    image={col3_4.image}
                                    genre={col3_4.genre}
                                    studio={col3_4.studio}/>
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
                            <HomePageShowCard
                                    name={col4_1.name}
                                    image={col4_1.image}
                                    genre= {col4_1.genre}
                                    studio={col4_1.studio}/>
                                <HomePageShowCard
                                    name={col4_2.name}
                                    image={col4_2.image}
                                    genre= {col4_2.genre}
                                    studio={col4_2.studio}/>
                                <HomePageShowCard
                                    name={col4_3.name}
                                    image={col4_3.image}
                                    genre= {col4_3.genre}
                                    studio={col4_3.studio}/>
                                <HomePageShowCard
                                    name={col4_4.name}
                                    image={col4_4.image}
                                    genre= {col4_4.genre}
                                    studio={col4_4.studio}/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>

    );
}

export default HomePage;
