import React, { Fragment, useEffect } from "react";
import "./UserSpecificShowMore.css";
import TopSpace from "../../components/global_elements/TopSpacer";
import ListingPageShowCard from '../../components/ListingPageShowCard';
import { Button, Container } from "react-bootstrap";
import { Col, Row, Grid } from 'react-flexbox-grid'
import { chunk } from 'lodash'
import { Link, useLocation, useParams } from 'react-router-dom';
 
export default function UserShowMore(){
    // query for data
    const params = useParams();
    const location = useLocation();
    const arr = location.state.userRecShows;

    const displayedShows = []
    for (let i = 0; i < 48; i++) {
        displayedShows.push(arr[i])
    }

    useEffect(()=>{
       }, []
    );

    const rows = chunk(displayedShows, 4)
    return (
        <Fragment>
            <TopSpace />
            <Container className="">
                {/* back btn */}
                <Row id="back_btn_space">
                    <Link className="back_btn" to={"/Anime"}>
                        <Button className="back_btn" id="btn-right"><strong>Home</strong></Button>
                    </Link>
                </Row>
                <Grid id="grid">
                    {/* main grid content  */}
                    {rows.map((cols) => (
                        <Row>
                            {cols.map((col) => (
                                <Col md={3} id="grid-content">
                                    <ListingPageShowCard   
                                        id={col.Page.media.id}
                                        image={col.Page.media.coverImage.large} 
                                        name={(col.Page.media.title.english==null)
                                            ? col.Page.media.title.romaji :
                                            col.Page.media.title.english}
                                        genre={col.Page.media.genres}
                                        studio={(col.Page.media.studios.nodes.length > 5) ? col.Page.media.studios.nodes.slice(0,6).map(studio_name => 
                                            studio_name.name).join(', ') :
                                            col.Page.media.studios.nodes.map(studio_name => 
                                            studio_name.name).join(', ')}/>
                                </Col>
                            )
                            )}
                        </Row>
                    )
                    )}
                </Grid>
            </Container>
        </Fragment>
    );
}