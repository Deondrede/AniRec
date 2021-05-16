import React, { Fragment, useEffect, setState  } from "react";
import HomePageShowCard from '../../components/HomePageShowCard';
import TopSpace from "../../components/global_elements/TopSpacer"
import {AIRING_NOW, TRY_THIS, TRENDING} from '../../GraphQL/Queries'
import { Link, useLocation } from "react-router-dom";
import GetUserRecs from "../home_page/UserRecPulling.js";

import GetShow from "./GetRecShows.js";

import {useQuery, gql} from '@apollo/client'
import './Homepage.css';

import { Container, Row, Col } from "react-bootstrap";
//import ShowMore from "../listing_pages/ShowMore.js";

//will be used as next Page to list
function HomePage(){
    const location = useLocation();
    const recShowArray = location.state.recShowIDs;
    const tryShowArray = location.state.tryShowIDs;

    const recShowToDisplay = ;
    const tryShowToDisplay = ;

    // query for data
    const {error: errorC2, loading: loadingC2, data: dataC2} = useQuery(AIRING_NOW);
    //const {error: errorC3, loading: loadingC3, data: dataC3} = useQuery(TRY_THIS);
    const {error: errorC4, loading: loadingC4, data: dataC4} = useQuery(TRENDING);

    // airing_now array
    if (loadingC2) return <p>Loading2...</p>
    if (errorC2) return <p>Error2 :(</p>
    const airingArr = dataC2.Page.media;
    const homeAiringArr = [];
    for (let i = 0; i < 4; i++){
        homeAiringArr.push(airingArr[i]);    
    }

    //trending array
    if (loadingC4) return <p>Loading4...</p>
    if (errorC4) return <p>Error4 :(</p>
    const trendingArr = dataC4.Page.media;
    const homeTrendingArr = [];
    for (let i = 0; i < 4; i++){
        homeTrendingArr.push(trendingArr[i]);    
    }

    if (loadingC2) return <p>Loading2...</p>
    if (errorC2) return <p>Error2 :(</p>
    /*    if (loadingC3) return <p>Loading3...</p>

    if (errorC3) return <p>Error3 :(</p>

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
        }*/

    return(
        <Fragment>
            <Container>
                <TopSpace />
                <Row id="feed-body">
                    <Col id="feed-col">
                        <Row id="subtitle">
                            <Col className="pink">
                                <Link className="general-showmore-link" id="recommended" to={{
                                        pathname:`/ShowMore/recommended/1`,
                                        state: {
                                            userRecShows: recShowArray
                                        }
                                    }}><span><strong>Recommended</strong></span>
                                    </Link>
                            </Col>
                            <Col id="grey"><span></span></Col>
                        </Row>
                        <Row id="main-content">
                            {/* {recShowArray.map((show) =>
                                <HomePageShowCard 
                                    name={(show.Media.title.english==null)
                                        ? show.Media.title.romaji :
                                        show.Media.title.english}
                                    image={show.Media.coverImage.extraLarge}
                                    genre={show.Media.genres}
                                    studio={show.Media.studios.nodes[0].name}
                                    description={show.Media.description}
                                    id={show.Media.id}
                                />
                            )} */}
                        </Row>
                    </Col>
                    <Col id="spacing"></Col>
                    <Col id="feed-col">
                        <Row id="subtitle">
                            <Col className="purple">
                                <Link className="general-showmore-link" id="airing_now" to={{
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
                        <Row id="main-content">
                            {homeAiringArr.map((row)=>
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
                    <Col id="feed-col">
                        <Row id="subtitle">
                            <Col className="pink">
                                <Link className="general-showmore-link" id="try-this" to={{
                                            pathname:`/ShowMore/try-this/1`,
                                            state: {
                                                userRecShows: tryShowArray
                                            }
                                        }}><span><strong>Try This</strong></span>
                                </Link>
                            </Col>
                            <Col id="grey"><span></span></Col>
                        </Row>
                        <Row id="main-content">

                        </Row>
                    </Col>
                    <Col id="spacing"></Col>
                    <Col id="feed-col">
                        <Row id="subtitle">
                            <Col className="purple">
                                <Link className="general-showmore-link" id="trending" to={{
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
                        <Row id="main-content">
                            {homeTrendingArr.map((row)=>
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



//"/ShowMorePage/" + airingArr
export default HomePage;
