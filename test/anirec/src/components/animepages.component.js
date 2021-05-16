import React, { Component, Fragment } from "react";
import {Row, Col} from "react-bootstrap";
import "./animepages.component.css"
import { Link } from "react-router-dom";

// main information
export function AnimeInfo(props){
    // processing studio names
    const studioArr = [];
    props.studio.nodes.map((studios) =>(
        studioArr.push(studios.name)
    ))

    console.log(props.format)

        return (
            <Fragment>
                <Col>
                    <Row id="info-block">
                        <div><strong>Summary:</strong> </div>
                        <div>{props.summary}</div>
                    </Row>
                    <br></br>
                    <Row id="info-block">
                        <div><strong>Season:</strong> {props.season} {props.seasonYear}</div>
                    </Row>
                    <br></br>
                    <Row id="info-block">
                        <div><strong>Episodes:</strong> {props.episodes}</div>
                    </Row>
                    <br></br>
                    <Row id="info-block">
                        <div><strong>Studios:&nbsp;</strong> </div>
                        <div>{studioArr.join(', ')}</div>
                    </Row>
                    <br></br>
                    <Row id="info-block">
                        <div><strong>Media Format:&nbsp;</strong> </div>
                        <div>{props.format}</div>
                    </Row>
                </Col>
            </Fragment>
            
        );
}