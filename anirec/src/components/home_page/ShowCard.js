import React, { Fragment } from "react";
import "./Homepage.css";
//frame for the anime to show
import { Container, Row, Col } from "react-bootstrap";

function ShowCard(props){
    return(
        <Fragment>
            <Container>
                <Row>
                    <Col id="image">
                        <h3>{props.image}</h3>
                    </Col>
                    <Col id="description">
                        <Row id="title">
                            <h3>Title: {props.name}</h3>
                        </Row>
                        <Row id="synopsis">
                            <h3>Placeholder</h3>
                        </Row>
                        <Row id="extra">
                            <h4>Genres: {props.genre}</h4>
                            <h4>Studio: {props.studio}</h4>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default ShowCard;