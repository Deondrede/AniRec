import React, { Fragment, useEffect } from "react";
import "./ShowMore.css";
import TopSpace from "../../components/global_elements/TopSpacer";
import ListingPageShowCard from '../../components/ListingPageShowCard';
import { Container } from "react-bootstrap";
import { Col, Row, Grid } from 'react-flexbox-grid'
import { chunk } from 'lodash'
import { Link, useParams } from 'react-router-dom';
import {useQuery, gql} from '@apollo/client'

export default function ShowMore(props){

    const GENRE_QUERY = gql`
        query GenreQuery($genre: String) {
            Page(page: 1, perPage: 50){
                media(type: ANIME, isAdult: false, genre: $genre){
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

    const param = useParams().expandedTag;
    const {error, loading, data} = useQuery(
        GENRE_QUERY,
        {
            variables: {
                genre: param
            }
        }
    );
    console.log(data)
    console.log(param)
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
                                        <ListingPageShowCard key={col.id} 
                                            image={col.coverImage.large} 
                                            name={(col.title.english==null)
                                                ? col.title.romaji :
                                                col.title.english}
                                            genre={col.genres.join(', ')}
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