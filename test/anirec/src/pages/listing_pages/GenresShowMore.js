import React, { Fragment, useEffect, useState } from "react";
import "./GenresShowMore.css";
import TopSpace from "../../components/global_elements/TopSpacer";
import ListingPageShowCard from '../../components/ListingPageShowCard';
import { Button, Container } from "react-bootstrap";
import { Col, Row, Grid } from 'react-flexbox-grid'
import { chunk } from 'lodash'
import { Link, useParams, useHistory } from 'react-router-dom';
import {useQuery, gql} from '@apollo/client'

export default function GenresShowMore(){    
    const GENRE_QUERY = gql`
    query GenreQuery($genre: String, $page: Int) {
        Page(page: $page, perPage: 48){
            media(type: ANIME, isAdult: false, genre: $genre, sort: [POPULARITY_DESC]){
              id
              title{
                english
                romaji
              }
              genres
              description
              coverImage{
                medium
                large
                extraLarge
              }
              studios{
                nodes{
                  name
                }
              }
            }
        }
    }`;

    const params = useParams();
    const {error, loading, data, refetch} = useQuery(GENRE_QUERY, 
        {
            variables: 
                {
                    genre:params.genreName,
                    page:params.pageNum
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
                    <Row id="back_btn_space">
                        <Link to={"/Anime"}>
                            <Button className="back_btn" id="btn-right"><strong>Home</strong></Button>
                        </Link>
                    </Row>
                    <Grid id="grid">
                        {rows.map((cols) => (
                            <Row>
                                {cols.map((col) => (
                                    <Col md={3} id="grid-content">
                                        <ListingPageShowCard   
                                            id={col.id}
                                            image={col.coverImage.extraLarge} 
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
                    {(params.pageNum > 1) ?
                                ((params.pageNum > data.length -Number(1)) ?
                                    <Link to={{pathname:`/GenresShowMore/${params.genreName}/${Number(params.pageNum) - 1}`}}>
                                        <Button className="page-btn">
                                            Previous Page
                                        </Button>
                                    </Link> :
                                    <Fragment>
                                            <Link to={{pathname:`/GenresShowMore/${params.genreName}/${Number(params.pageNum) - 1}`}}>
                                                <Button  className="page-btn">
                                                    Previous Page
                                                </Button>
                                            </Link>
                                            <Link to={{pathname:`/GenresShowMore/${params.genreName}/${Number(params.pageNum) + 1}`}}>
                                                <Button  className="page-btn">
                                                    Next Page
                                                </Button>
                                            </Link> 
                                    </Fragment> ): 
                                <Link to={{pathname:`/GenresShowMore/${params.genreName}/${Number(params.pageNum) + 1}`}}>
                                    <Button  className="page-btn">
                                        Next Page
                                    </Button>
                                </Link>
                            }
                    </Grid>

                </Container>
            </Fragment>
        );
    }
}