import React, { Component, Fragment } from "react";
import {Row, Col} from "react-bootstrap";
import "./animepages.component.css"
import { Link } from "react-router-dom";


export function AnimeInfo(props){
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

// export function KeyStaff(props) {
//         return (
//             <Fragment>
//                 <Col>
//                 </Col>
//             </Fragment>
            
//         );
// }

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

// export class Reviews extends Component {
//     render() {
//         return (
//             <Fragment>
//                 <Col>
//                 <div>Review One</div>
//                 <div>Review Two</div>
//                 </Col>
//             </Fragment>
            
//         );
//     }
// }