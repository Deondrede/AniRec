import React, { Component, Fragment } from "react";
import {Col} from "react-bootstrap";

export function AnimeInfo(props){
        return (
            <Fragment>
                <Col>
                    <div>Title: {props.name}</div>
                    <div>Genres: {props.genre}</div>
                    <div>Summary: </div>
                    <div>{props.summary}</div>
                    <div>Season: {props.season} {props.seasonYear}</div>
                    <div>Episodes: {props.episodes}</div>
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