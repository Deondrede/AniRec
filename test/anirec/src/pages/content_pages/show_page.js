import React, { Component, Fragment, useEffect } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import TopSpace from "../../components/global_elements/TopSpacer.js";
import { BrowserRouter as Router, Switch, Route, Link, useHistory, useParams  } from "react-router-dom";
import { AnimeInfo, Rating, Recommendations} from "../../components/animepages.component.js";

import {gql, useQuery} from '@apollo/client';
import "./show_page.css"

export default function AnimePage(props) {
    const params = useParams();
    const ANIME_QUERY = gql`
    query AnimeQuery($id: Int)
    {
        series: Media(type: ANIME, id: $id) {
        id
        title {
          english
          romaji
        }
        genres
        description(asHtml: false)
        coverImage {
          medium
          large
          extraLarge
        }
        studios {
          nodes {
            name
          }
        }
        episodes
        season
        seasonYear
        averageScore
        format
      }
    }
    `

    const {error, loading, data, refetch} = useQuery(ANIME_QUERY,
        {
            variables:{
                id: params.animeId
            }
        });

    useEffect(()=>{
        refetch()
    }, []
    );

    
    if (loading) return <p>Loading1...</p>
    if (error) return <p>Error1 :(</p>

    
    let animeData = {
        name: (data.series.title.english==null)
            ? data.series.title.romaji :
            data.series.title.english,
        image: data.series.coverImage.large,
        genre: data.series.genres,
        studio: data.series.studios,
        description: data.series.description,
        episodes: data.series.episodes,
        season: data.series.season,
        seasonYear: data.series.seasonYear,
        rating: data.series.averageScore,
        format: data.series.format
    }

    let genreCount = animeData.genre.length

        return(
            <Fragment>
                <TopSpace/>
                    <Container>
                        <Row id="back-btn-space">
                            <Link to={`/Anime`}>
                                <Button className="back_btn"><strong>Home</strong></Button>
                            </Link>
                        </Row>
                        <Row>
                            <Col>                            
                            <Row>
                                <p className="show-page-title"><strong>{animeData.name}</strong></p>
                            </Row>
                            <Row>
                                <div className="show-page-genres">
                                    {animeData.genre.map((genres) =>
                                        {
                                            if (genreCount < 2)
                                                return <Link key={genres} className="show-page-genre-links" to={{
                                                            pathname:`/GenresShowMore/${genres}/1`
                                                        }}>{genres}</Link>
                                            else 
                                                genreCount--;
                                                return  <Fragment>
                                                            <Link key={genres} className="show-page-genre-links" to={{
                                                                pathname:`/GenresShowMore/${genres}/1`
                                                                }}>{genres}
                                                            </Link>
                                                            <a>, </a>
                                                        </Fragment>
                                            }
                                    )}
                                </div>
                            </Row>
                            </Col>

                        </Row>
                        <Router>
                            <Row>
                                <Col id="show-page-left-side">
                                    <Row>
                                        <div className="show-page-img">
                                            <img  src={animeData.image}/>
                                        </div>
                                    </Row>
                                    <Row>
                                        <div className="rating">
                                            <strong>
                                                <p>Overall Rating</p>
                                                <p>{animeData.rating} / 100</p>
                                            </strong>
                                        </div>
                                        <ButtonGroup vertical id="show-page-button-group">
                                            <Link id="tab-name" to={`/AnimePage/${params.animeId}/information`}>
                                                <Button id="side-btns">
                                                    Information
                                                </Button>
                                            </Link>


                                            {/* <Link id="tab-name" to={`/AnimePage/${params.animeId}/key-staff`}>
                                                <Button id="side-btns">
                                                    Key Staff
                                                </Button>
                                            </Link> */}
                                            {/* <Link id="tab-name" to={`/Anime/${params.animeId}/reviews`}>
                                                <Button id="side-btns">
                                                    Reviews
                                                </Button>
                                            </Link> */}
                                            <Link id="tab-name" to={`/AnimePage/${params.animeId}/recommendations`}>
                                                <Button id="side-btns">
                                                    Recommendations
                                                </Button>
                                            </Link>
                                        </ButtonGroup>
                                    </Row>
                                </Col>
                                <Col id="show-page-right-side-outer">
                                    <Row id="show-page-right-side-inner">
                                        <Switch>
                                            <Route path="/AnimePage/:animeid/ratings" component={Rating} />
                                            <Route path="/AnimePage/:animeid/information" component={() =>
                                                <AnimeInfo 
                                                    name = {animeData.name} 
                                                    summary = {animeData.description} 
                                                    season = {animeData.season} 
                                                    seasonYear = {animeData.seasonYear}
                                                    episodes = {animeData.episodes} 
                                                    studio = {animeData.studio}  
                                                    format={animeData.format}/>}/>
                                            {/* <Route path="/AnimePage/:animeid/key-staff" component={() =><KeyStaff siteurl = {animeData.siteUrl} />} /> */}
                                            {/* <Route path="/AnimePage/:animeid/reviews" component={Reviews} /> */}
                                            <Route path="/AnimePage/:animeid/recommendations" component={() => <Recommendations />} />
                                        </Switch>
                                    </Row>
                                </Col>
                            </Row>  
                        </Router>
              
                    </Container>
            </Fragment>
        );
    
}