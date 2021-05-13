import React, { Component, Fragment, useEffect } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import TopSpace from "../../components/global_elements/TopSpacer.js";
import { BrowserRouter as Router, Switch, Route, Link, useLocation, useParams  } from "react-router-dom";
import { AnimeInfo, KeyStaff, Rating, Recommendations, Reviews } from "../../components/animepages.component.js";
import Login from "../landing_page/login.component.js";
import {gql, useQuery} from '@apollo/client';
export default function AnimePage(props) {
    const location = useLocation();
    const ANIMEQUERY = gql`
    {
        series: Media(type: ANIME, id: ${location.state.id}) {
        id
        title {
          english
          romaji
        }
        genres
        description
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
    }`

    const params = useParams();
    const {error, loading, data} = useQuery(ANIMEQUERY);

    useEffect(()=>{
        }, [data]
    );

    
    if (loading) return <p>Loading1...</p>
    if (error) return <p>Error1 :(</p>

    
    let animedata = {
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
                <Link to={'/Anime'}><Button>Return</Button></Link>
                <TopSpace/>
                <Router>
                    <Container fluid>
                    <p>{animedata.name}</p>
                    <Row>
                        <img id="HomePage_card_image" src={animedata.image}/>
                        <Col>
                            <ButtonGroup vertical block>
                                <Link id="tab_name" to={`/Anime/${location.state.id}/ratings`}><Button>
                                    Overall Ratings
                                </Button></Link>
                                <Link id="tab_name" to={`/Anime/${location.state.id}/information`}><Button>
                                    Information
                                </Button></Link>
                                <Link id="tab_name" to={`/Anime/${location.state.id}/key-staff`}><Button>
                                    Key Staff
                                </Button></Link>
                                <Link id="tab_name" to={`/Anime/${location.state.id}/reviews`}><Button>
                                    Reviews
                                </Button></Link>
                                <Link id="tab_name" to={`/Anime/${location.state.id}/recommendations`}><Button>
                                    Recommendations
                                </Button></Link>
                            </ButtonGroup>
                        </Col>
                        <Col>
                            <div>
                                <Row>
                                    <Switch>
                                        <Route exact path='/' component={Login} />
                                        <Route path="/Anime/:animeid/ratings" component={Rating} />
                                        <Route path="/Anime/:animeid/information" component={() =><AnimeInfo name = {animedata.name} genre = {animedata.genre} 
                                            summary = {animedata.description} season = {animedata.season} seasonYear = {animedata.seasonYear}
                                            episodes = {animedata.episodes} />} />
                                        <Route path="/Anime/:animeid/key-staff" component={() =><KeyStaff studio = {animedata.studio} siteurl = {animedata.siteUrl} />} />
                                        <Route path="/Anime/:animeid/reviews" component={Reviews} />
                                        <Route path="/Anime/:animeid/recommendations" component={() => <Recommendations />} />
                                    </Switch>
                                </Row>
                            </div>
                        </Col>    
                    </Row>                
                </Container>
                </Router>
            </Fragment>
        );
    
}