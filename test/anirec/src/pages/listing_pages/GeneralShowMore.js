import React, { Fragment, useEffect } from "react";
import "./GeneralShowMore.css";
import TopSpace from "../../components/global_elements/TopSpacer";
import ListingPageShowCard from '../../components/ListingPageShowCard';
import { Container } from "react-bootstrap";
import { Col, Row, Grid } from 'react-flexbox-grid'
import { chunk } from 'lodash'
import { Link, useParams } from 'react-router-dom';
import {useQuery, gql} from '@apollo/client'
import {RECOMMENDED, AIRING_NOW, TRY_THIS, TRENDING} from '../../GraphQL/Queries'
 

export default function GeneralShowMore(){

    const params = useParams();
    const query;
    if (params.queryName == "airing_now")
        query = AIRING_NOW
    if (params.queryName == "trending")
        query = TRENDING
    const {error, loading, data} = useQuery(query);

    useEffect(()=>{
       }, [data]
    );

    if (loading) return <p>Loading1...</p>
    else if (error) return <p>Error1 :(</p>
    else{
        const rows = chunk(data.Page.media, 4)
        return (
            <Fragment>
                <TopSpace />
                <Container className="float-md-3">
                    <Row id="back_btn_space">
                        <Link className="back_btn" to={"/Anime"}><strong>Back</strong></Link>
                    </Row>
                    <Grid>
                        {rows.map((cols) => (
                            <Row>
                                {cols.map((col) => (
                                    <Col md={3}>
                                        <ListingPageShowCard   
                                            image={col.coverImage.large} 
                                            name={(col.title.english==null)
                                                ? col.title.romaji :
                                                col.title.english}
                                            genre={col.genres}
                                            studio={col.studios.nodes.map(studio_name => 
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
}