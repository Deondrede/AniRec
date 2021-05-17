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

// copied function from GetRecShows to this file
function GetShow2(id_num) {
    const REC_QUERY = gql`
    query RecQuery($id: Int) 
    {
        Media(type: ANIME, id: $id)
        {
            id
            title{
                english
                romaji
            }
            genres
            description
            coverImage{
                medium
                large
                extraLarge
            }
            studios{
                nodes{
                    name
                }
            }
        }
    }`;
    
    //console.log("props.id", props.id);
    const {error, loading, data} = useQuery(REC_QUERY,
        {
            variables: {
                id: id_num
            }
        })
    
    useEffect(()=>{
        }, []
    );

    if (loading) return <p>Loading2...</p>
    if (error) return <p>Error2 :(</p>

    //console.log("GetRecShows2 data",data);
    setTimeout(() => {
        console.log("wait 1 second");
    }, 5000);
    return data;
}

//will be used as next Page to list
function HomePage(props){
    const location= useLocation(); //get username using {location.state.user}
    const user = location.state.user;
    const recShowArray = location.state.recs;

    const recShowToDisplay = [];
    var count = 0;
    for(let i = 1; i < recShowArray.length; i++){
        /*if(typeof(recShowArray[i]) === 'number'){
            let current = recShowArray[i];
            console.log("current", current);
            let push_this = <GetShow id ={current} />
            console.log("push_this", push_this);
            recShowToDisplay.push(push_this);
        }*/

        
        // calling the copied function
        let got_data = GetShow2(recShowArray[i]);

        if(got_data.key === null){ //check for this b/c responses vary
            //console.log("THIS FAILS", got_data);
        }
        else{
            //if(count <=3)//limit of 4 anime titles to be returned for homepage
            //{
                console.log("got_data", got_data); //sanity check
                recShowToDisplay.push(got_data);
                count++;
            //}
        }
        //console.log("got_data", got_data);
        //recShowToDisplay.push(got_data);

        //console.log("typeof got_data",typeof got_data);
        
    }
    
    const tryShowToDisplay = [];
    for( let x = 0; x < 4; x++) // to gather the 4 that will show on Homepage
    {
        tryShowToDisplay.push(recShowToDisplay[x]);
    }

    const {error: errorC2, loading: loadingC2, data: dataC2} = useQuery(AIRING_NOW);
    //const {error: errorC3, loading: loadingC3, data: dataC3} = useQuery(TRY_THIS);
    const {error: errorC4, loading: loadingC4, data: dataC4} = useQuery(TRENDING);
    
    useEffect(()=>{
        }, []
    );
       

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

    if (errorC3) return <p>Error3 :(</p>
    return(
        <Fragment>
            <Container>
                <TopSpace />
                <Row id="feed-body">
                    <Col id="feed-col">
                        <Row id="subtitle">
                            <Col className="pink">
                                <Link className="user-showmore-link" id="recommended" to={{
                                        pathname:`/UserShowMore/recommended/1`,
                                        state: {
                                            userRecShows: recShowToDisplay
                                        }
                                    }}><span><strong>Recommended</strong></span>
                                    </Link>
                            </Col>
                            <Col id="grey"><span></span></Col>
                        </Row>
                        <Row id="main-content">
                            {tryShowToDisplay.map((show) =>
                                <HomePageShowCard 
                                    name={(show.Media.title.english==null)
                                        ? show.Media.title.romaji :
                                        show.Media.title.english}
                                    image={show.Media.coverImage.extraLarge}
                                    genre={show.Media.genres}
                                    /*studio={show.Media.studios.nodes[0].name}*/
                                    description={show.Media.description}
                                    id={show.Media.id}
                                />
                            )}
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
                    {/*<Col id="feed-col">
                        <Row id="subtitle">
                            <Col className="pink">
                                <Link className="user-showmore-link" id="try-this" to={{
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
                        <HomePageShowCard
                                    name={col3_1.name}
                                    image={col3_1.image}
                                    genre={col3_1.genre}
                                    studio={col3_1.studio}
                                    id={col3_1.id}
                                    />
                                <HomePageShowCard
                                    name={col3_2.name}
                                    image={col3_2.image}
                                    genre={col3_2.genre}
                                    studio={col3_2.studio}
                                    id={col3_2.id}
                                    />
                                <HomePageShowCard
                                    name={col3_3.name}
                                    image={col3_3.image}
                                    genre={col3_3.genre}
                                    studio={col3_3.studio}
                                    id={col3_3.id}
                                    />
                                <HomePageShowCard
                                    name={col3_4.name}
                                    image={col3_4.image}
                                    genre={col3_4.genre}
                                    studio={col3_4.studio}
                                    id={col3_4.id}
                                    />
                        </Row>
                    </Col>*/}
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
