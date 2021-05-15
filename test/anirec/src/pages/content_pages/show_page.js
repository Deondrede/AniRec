import React, { Component, Fragment, useEffect } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import TopSpace from "../../components/global_elements/TopSpacer.js";
import { BrowserRouter as Router, Switch, Route, Link, useHistory, useParams  } from "react-router-dom";
import { AnimeInfo, KeyStaff, Rating, Recommendations, Reviews } from "../../components/animepages.component.js";

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
        studio: data.series.studios.nodes[0].name,
        description: data.series.description,
        episodes: data.series.episodes,
        season: data.series.season,
        seasonYear: data.series.seasonYear
    }

    
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
                            <p className="show-page-title">{animeData.name}</p>
                        </Row>
                        <Router>
                        <Row>
                            <Col id="show-page-left-side">
                                <Row>
                                    <img id="" src={animeData.image}/>
                                </Row>
                                <Row>
                                    <ButtonGroup vertical id="show-page-button-group">
                                        <Link id="tab-name" to={`/AnimePage/${params.animeId}/information`}>
                                            <Button id="side-btns">
                                                Information
                                            </Button>
                                        </Link>
                                        <Link id="tab-name" to={`/AnimePage/${params.animeId}/ratings`}>
                                            <Button id="side-btns">
                                                Overall Ratings
                                            </Button>
                                        </Link>

                                        <Link id="tab-name" to={`/AnimePage/${params.animeId}/key-staff`}>
                                            <Button id="side-btns">
                                                Key Staff
                                            </Button>
                                        </Link>
                                        <Link id="tab-name" to={`/Anime/${params.animeId}/reviews`}>
                                            <Button id="side-btns">
                                                Reviews
                                            </Button>
                                        </Link>
                                        <Link id="tab-name" to={`/AnimePage/${params.animeId}/recommendations`}>
                                            <Button id="side-btns">
                                                Recommendations
                                            </Button>
                                        </Link>
                                    </ButtonGroup>
                                </Row>
                            </Col>
                                <Col>
                                
                                    <Row>
                                        <Switch>
                                            <Route path="/AnimePage/:animeid/ratings" component={Rating} />
                                            <Route path="/AnimePage/:animeid/information" component={() =><AnimeInfo name = {animeData.name} genre = {animeData.genre} 
                                                summary = {animeData.description} season = {animeData.season} seasonYear = {animeData.seasonYear}
                                                episodes = {animeData.episodes} />} />
                                            <Route path="/AnimePage/:animeid/key-staff" component={() =><KeyStaff studio = {animeData.studio} siteurl = {animeData.siteUrl} />} />
                                            <Route path="/AnimePage/:animeid/reviews" component={Reviews} />
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