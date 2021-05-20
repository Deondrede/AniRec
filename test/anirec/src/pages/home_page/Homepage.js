import React, { Fragment, useEffect  } from "react";
import HomePageShowCard from '../../components/HomePageShowCard';
import TopSpace from "../../components/global_elements/TopSpacer"
import {RECOMMENDED,AIRING_NOW, TRY_THIS, TRENDING} from '../../GraphQL/Queries'
import { Link } from "react-router-dom";

import {useQuery} from '@apollo/client'
import './Homepage.css';

import { Container, Row, Col } from "react-bootstrap";
//import ShowMore from "../listing_pages/ShowMore.js";

//will be used as next Page to list
function HomePage(){
    const {error, loading, data} = useQuery(AIRING_NOW,
        {
            variables:{
                page: 1,
                seasonYear: 2021,
                season: "SPRING"
            }
        });
    const {error: errorC2, loading: loadingC2, data: dataC2} = useQuery(RECOMMENDED);
    const {error: errorC3, loading: loadingC3, data: dataC3} = useQuery(TRY_THIS);
    const {error: errorC4, loading: loadingC4, data: dataC4} = useQuery(TRENDING);

    useEffect(()=>{
     }, [data]
    );
      
    useEffect(()=>{
        }, [dataC2]
    );

    useEffect(()=>{
        }, [dataC3]
    );

    useEffect(()=>{
        }, [dataC4]
    );

    // airing_now array
    if (loading) return <p>Loading1...</p>
    if (error) return <p>Error1 :(</p>
    const airing_arr = data.Page.media;
    const home_airing_arr = [];
    for (let i = 0; i < 4; i++){
        home_airing_arr.push(airing_arr[i]);    
    }

    //trending array
    if (loadingC4) return <p>Loading4...</p>
    if (errorC4) return <p>Error4 :(</p>
    const trending_arr = dataC4.Page.media;
    const home_trending_arr = [];
    for (let i = 0; i < 4; i++){
        home_trending_arr.push(trending_arr[i]);    
    }

    if (loadingC2) return <p>Loading2...</p>
    if (errorC2) return <p>Error2 :(</p>
        if (loadingC3) return <p>Loading3...</p>

    if (errorC3) return <p>Error3 :(</p>

    let col1_1 = {
        name: (dataC2.series1.title.english==null)
            ? dataC2.series1.title.romaji :
            dataC2.series1.title.english,
        image: dataC2.series1.coverImage.extraLarge,
        genre: dataC2.series1.genres,
        studio: dataC2.series1.studios.nodes[0].name,
        id: dataC2.series1.id
    }

    
    let col1_2 = {
        name: (dataC2.series2.title.english==null)
            ? dataC2.series2.title.romaji :
            dataC2.series2.title.english,
        image: dataC2.series2.coverImage.extraLarge,
        genre: dataC2.series2.genres,
        studio: dataC2.series2.studios.nodes[0].name,
        id: dataC2.series2.id
    }
    
    let col1_3= {
        name: (dataC2.series3.title.english==null)
            ? dataC2.series3.title.romaji :
            dataC2.series3.title.english,
        image: dataC2.series3.coverImage.extraLarge,
        genre: dataC2.series3.genres,
        studio: dataC2.series3.studios.nodes[0].name,
        id: dataC2.series3.id
    }

    let col1_4 = {
        name: (dataC2.series4.title.english==null)
        ? dataC2.series4.title.romaji :
        dataC2.series4.title.english,
        image: dataC2.series4.coverImage.extraLarge,
        genre: dataC2.series4.genres,
        studio: dataC2.series4.studios.nodes[0].name,
        id: dataC2.series4.id
    }

    let col3_1 = {
        name: (dataC3.series1.title.english==null)
            ? dataC3.series1.title.romaji :
            dataC3.series1.title.english,
        image: dataC3.series1.coverImage.extraLarge,
        genre: dataC3.series1.genres,
        studio: dataC3.series1.studios.nodes[0].name,
        id: dataC3.series1.id
    }

    let col3_2 = {
        name: (dataC3.series2.title.english==null)
            ? dataC3.series2.title.romaji :
            dataC3.series2.title.english,
        image: dataC3.series2.coverImage.extraLarge,
        genre: dataC3.series2.genres,
        studio: dataC3.series2.studios.nodes[0].name,
        id: dataC3.series2.id
    }
    
    let col3_3= {
        name: (dataC3.series3.title.english==null)
            ? dataC3.series3.title.romaji :
            dataC3.series3.title.english,
        image: dataC3.series3.coverImage.extraLarge,
        genre: dataC3.series3.genres,
        studio: dataC3.series3.studios.nodes[0].name,
        id: dataC3.series3.id
    }

    let col3_4 = {
        name: (dataC3.series4.title.english==null)
        ? dataC3.series4.title.romaji :
        dataC3.series4.title.english,
        image: dataC3.series4.coverImage.extraLarge,
        genre: dataC3.series4.genres,
        studio: dataC3.series4.studios.nodes[0].name,
        id: dataC3.series4.id
    }
  
    return(
        <Fragment>
            <Container>
                <TopSpace />
                <Row id="feed_body">
                    <Col id="feed_col">
                        <Row id="subtitle">
                            <Col className="pink">
                                <span><strong id="recommended">Recommended</strong></span>
                            </Col>
                            <Col id="grey"><span></span></Col>
                        </Row>
                        <Row id="main_content">
                            <HomePageShowCard
                                name={col1_1.name}
                                image={col1_1.image}
                                genre= {col1_1.genre}
                                studio={col1_1.studio}
                                id={col1_1.id}/>
                            <HomePageShowCard
                                name={col1_2.name}
                                image={col1_2.image}
                                genre= {col1_2.genre}
                                studio={col1_2.studio}
                                id={col1_1.id}/>
                            <HomePageShowCard
                                name={col1_3.name}
                                image={col1_3.image}
                                genre= {col1_3.genre}
                                studio={col1_3.studio}
                                id={col1_1.id}/>
                            <HomePageShowCard
                                name={col1_4.name}
                                image={col1_4.image}
                                genre= {col1_4.genre}
                                studio={col1_4.studio}
                                id={col1_1.id}/>

                        </Row>
                    </Col>
                    <Col id="spacing"></Col>
                    <Col id="feed_col">
                        <Row id="subtitle">
                            <Col className="purple">
                                <Link className="trending_airing_link" id="airing_now" to={{
                                    pathname:`/ShowMore/airing_now/1`,
                                    state: {
                                        query: AIRING_NOW
                                    }
                                }}>
                                    <span><strong>Airing</strong></span>
                                </Link>
                            </Col>
                            <Col id="grey"><span></span></Col>
                        </Row>
                        <Row id="main_content">
                            {home_airing_arr.map((row)=>
                                    <HomePageShowCard
                                        name={(row.title.english==null)
                                            ? row.title.romaji :
                                            row.title.english}
                                        image={row.coverImage.extraLarge}
                                        genre={row.genres}
                                        studio={row.studios.nodes[0].name}
                                        description={row.description}
                                        id={row.id}/>
                            )}
                        </Row>
                    </Col>
                    <Col id="spacing"></Col>
                    <Col id="feed_col">
                        <Row id="subtitle">
                            <Col className="pink">
                                <span id="try-this"><strong>Try This</strong></span>
                            </Col>
                            <Col id="grey"><span></span></Col>
                        </Row>
                        <Row id="main_content">
                            <HomePageShowCard
                                    name={col3_1.name}
                                    image={col3_1.image}
                                    genre={col3_1.genre}
                                    studio={col3_1.studio}
                                    id={col3_1.id}/>
                                <HomePageShowCard
                                    name={col3_2.name}
                                    image={col3_2.image}
                                    genre={col3_2.genre}
                                    studio={col3_2.studio}
                                    id={col3_1.id}/>
                                <HomePageShowCard
                                    name={col3_3.name}
                                    image={col3_3.image}
                                    genre={col3_3.genre}
                                    studio={col3_3.studio}
                                    id={col3_1.id}/>
                                <HomePageShowCard
                                    name={col3_4.name}
                                    image={col3_4.image}
                                    genre={col3_4.genre}
                                    studio={col3_4.studio}
                                    id={col3_1.id}/>
                        </Row>
                    </Col>
                    <Col id="spacing"></Col>
                    <Col id="feed_col">
                        <Row id="subtitle">
                            <Col className="purple">
                                <Link className="trending_airing_link" id="trending" to={{
                                    pathname:"/ShowMore/trending/1",
                                    state: {
                                        query: TRENDING
                                    }
                                }}>
                                    <span><strong>Trending</strong></span>
                                </Link>
                            </Col>
                            <Col id="grey"><span></span></Col>
                        </Row>
                        <Row id="main_content">
                            {home_trending_arr.map((row)=>
                                <HomePageShowCard
                                    name={(row.title.english==null)
                                        ? row.title.romaji :
                                        row.title.english}
                                    image={row.coverImage.extraLarge}
                                    genre={row.genres}
                                    studio={(row.studios.nodes[0]==null) ? "" : row.studios.nodes[0].name}
                                    description={row.description}
                                    id={row.id}/>
                            )}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>

    );
}

//"/ShowMorePage/" + airing_arr
export default HomePage;
