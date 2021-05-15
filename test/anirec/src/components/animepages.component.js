import React, { Component, Fragment } from "react";
import {Row, Col} from "react-bootstrap";
import "./animepages.component.css"
import { Link } from "react-router-dom";


export function AnimeInfo(props){
        let genreCount = props.genre.length

        return (
            <Fragment>
                <Col>
                    <Row>
                        <p>Genres: </p>
                        {props.genre.map((genres) =>
                                        {
                                            if (genreCount < 2)
                                                return <Link key={genres} className="anime-page-genre-links" to={{
                                                            pathname:`/GenresShowMore/${genres}/1`
                                                        }}>{genres}</Link>
                                            else 
                                                genreCount--;
                                                return  <Fragment>
                                                            <Link key={genres} className="anime-page-genre-links" to={{
                                                                pathname:`/GenresShowMore/${genres}/1`
                                                                }}>{genres}
                                                            </Link>
                                                            <a>, </a>
                                                        </Fragment>
                                            }
                                    )}
                    </Row>
                    <Row>
                        <div>Summary: </div>
                        <div>{props.summary}</div>
                    </Row>
                    <Row>
                        <div>Season: {props.season} {props.seasonYear}</div>
                        <div>Episodes: {props.episodes}</div>
                    </Row>
                </Col>
            </Fragment>
            
        );
}

export function KeyStaff(props) {
        return (
            <Fragment>
                <Col>
                    <div>Studio: {props.studio}</div>
                </Col>
            </Fragment>
            
        );
}

export class Rating extends Component {
    render() {
        return (
            <Fragment>
                <Col>
                    <div>Sample Rating</div>
                    <div>10/10</div>
                </Col>
            </Fragment>
            
        );
    }
}

export class Recommendations extends Component {
    render() {
        return (
            <Fragment>
                <Col>
                <div>Anime One</div>
                <div>Anime Two</div>
                </Col>
            </Fragment>
            
        );
    }
}

export class Reviews extends Component {
    render() {
        return (
            <Fragment>
                <Col>
                <div>Review One</div>
                <div>Review Two</div>
                </Col>
            </Fragment>
            
        );
    }
}