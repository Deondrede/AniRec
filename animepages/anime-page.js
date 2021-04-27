import React, { Component, Fragment, useEffect } from "react";
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import TopSpace from "../../components/global_elements/TopSpacer.js";
import { BrowserRouter as Router, Switch, Route, Link, useLocation  } from "react-router-dom";
import { AnimeInfo, KeyStaff, Rating, Recommendations, Reviews } from "./animepages.component.js";
import Login from "../landing_page/login.component.js";
import HomePageShowCard from "../../components/HomePageShowCard.js";
import {gql, useQuery} from '@apollo/client';
import { chunk } from 'lodash';
export default function AnimePage(props) {
    const location = useLocation(); 
    const rows = chunk(location.state, 4);
        return(
            <Fragment>
                <Link to={'/Anime'}><Button>Return</Button></Link>
                <TopSpace/>
                <Router>
                    <Container fluid>
                    <p>{location.state.name}</p>
                    <Row>
                        <img id="HomePage_card_image" src={location.state.image}/>
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
                                        <Route path="/information" component={() =><AnimeInfo name = {location.state.name} genre = {location.state.genre}  />} />
                                        <Route path="/key-staff" component={() =><KeyStaff studio = {location.state.studio} />} />
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