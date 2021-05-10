import React, { Component, Fragment, useEffect } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import TopSpace from "../../components/global_elements/TopSpacer.js";
import { BrowserRouter as Router, Switch, Route, Link, useLocation, useParams, useHistory  } from "react-router-dom";
import { AnimeInfo, KeyStaff, Rating, Recommendations, Reviews } from "./animepages.component.js";
import Login from "../landing_page/login.component.js";
import {gql, useQuery} from '@apollo/client';
export default function AnimePage(props) {
    const location = useLocation(); 
    let ANIMEQUERY = gql`
    query AnimeQuery($id: Int) {
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
      }
    }`;

    const {error, loading, data} = useQuery(ANIMEQUERY);

    useEffect(()=>{
        }, [data]
    );
    
    let animedata = {
        name: (data.series.title.english==null)
            ? data.series.title.romaji :
            data.series.title.english,
        image: data.series.coverImage.large,
        genre: data.series.genres,
        studio: data.series.studios.nodes[0].name,
        id: data.seriesid,
        description: data.series.description
    }

    if (loading) return <p>Loading1...</p>
    if (error) return <p>Error1 :(</p>
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
                                <Link id="tab_name" to={`/ratings`}><Button>
                                    Overall Ratings
                                </Button></Link>
                                <Link id="tab_name" to={"/information"}><Button>
                                    Information
                                </Button></Link>
                                <Link id="tab_name" to={`/key-staff`}><Button>
                                    Key Staff
                                </Button></Link>
                                <Link id="tab_name" to={`/reviews`}><Button>
                                    Reviews
                                </Button></Link>
                                <Link id="tab_name" to={`/recommendations`}><Button>
                                    Recommendations
                                </Button></Link>
                            </ButtonGroup>
                        </Col>
                        <Col>
                            <div>
                                <Row>
                                    <Switch>
                                        <Route exact path='/' component={Login} />
                                        <Route path="/ratings" component={Rating} />
                                        <Route path="/information" component={() =><AnimeInfo name = {animedata.name} genre = {animedata.genre} 
                                            summary = {animedata.description} />} />
                                        <Route path="/key-staff" component={() =><KeyStaff studio = {animedata.studio} />} />
                                        <Route path="/reviews" component={Reviews} />
                                        <Route path="/recommendations" component={Recommendations} />
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