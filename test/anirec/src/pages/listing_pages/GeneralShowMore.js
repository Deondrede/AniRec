import React, { Fragment, useEffect } from "react";
import "./GeneralShowMore.css";
import TopSpace from "../../components/global_elements/TopSpacer";
import ListingPageShowCard from '../../components/ListingPageShowCard';
import { Button, Container } from "react-bootstrap";
import { Col, Row, Grid } from 'react-flexbox-grid'
import { chunk } from 'lodash'
import { Link, useParams, useLocation } from 'react-router-dom';
import {useQuery, gql} from '@apollo/client'
 
export default function GeneralShowMore(){
    // query for data
    const params = useParams();
    const location = useLocation();
    const {error, loading, data, refetch} = useQuery(location.state.query,
        {
            variables:
            {
                page: params.pageNum
            }
        }
    );

    useEffect(()=>{
        refetch()
       }, []
    );



    if (loading) return <p>Loading1...</p>
    else if (error) return <p>Error1 :(</p>
    else{
        const rows = chunk(data.Page.media, 4)
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
                                            id={col.id}
                                            image={col.coverImage.large} 
                                            name={(col.title.english==null)
                                                ? col.title.romaji :
                                                col.title.english}
                                            genre={col.genres}
                                            studio={(col.studios.nodes.length > 5) ? col.studios.nodes.slice(0,6).map(studio_name => 
                                                studio_name.name).join(', ') :
                                                col.studios.nodes.map(studio_name => 
                                                studio_name.name).join(', ')}/>
                                    </Col>
                                )
                                )}
                            </Row>
                        )
                        )}
                    </Grid>
                    {/* pagination */}
                    {(params.pageNum > 1) ?
                                    ((params.pageNum > data.length -Number(1)) ?
                                        <Link to={{
                                            pathname:`/ShowMore/${params.queryName}/${Number(params.pageNum) - 1}`,
                                            state: {
                                                query: location.state.query
                                            }
                                        }}>
                                            <Button className="page-btn">
                                                Previous Page
                                            </Button>
                                        </Link> :
                                        <Fragment>
                                                <Link to={{
                                                    pathname:`/ShowMore/${params.queryName}/${Number(params.pageNum) - 1}`,
                                                    state: {
                                                        query: location.state.query
                                                    }}}>
                                                    <Button  className="page-btn">
                                                        Previous Page
                                                    </Button>
                                                </Link>
                                                <Link to={{
                                                    pathname:`/ShowMore/${params.queryName}/${Number(params.pageNum) + 1}`,
                                                    state: {
                                                        query: location.state.query
                                                    }
                                                }}>
                                                    <Button  className="page-btn">
                                                        Next Page
                                                    </Button>
                                                </Link> 
                                        </Fragment> ): 
                                    <Link to={{
                                        pathname:`/ShowMore/${params.queryName}/${Number(params.pageNum) + 1}`,
                                            state: {
                                                query: location.state.query
                                        }}}>
                                        <Button  className="page-btn">
                                            Next Page
                                        </Button>
                                    </Link>
                                } 
                </Container>
            </Fragment>
        );
    }
}