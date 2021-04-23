import React, { Fragment, useEffect } from "react";
import "./show_more_page.css";
import TopSpace from "../../components/global_elements/TopSpacer";
import {AIRING_NOW} from '../../GraphQL/Queries';
import ListingPageShowCard from '../../components/ListingPageShowCard';
import { Container } from "react-bootstrap";
import { Col, Row, Grid } from 'react-flexbox-grid'
import {useQuery} from '@apollo/client'
import { chunk } from 'lodash'

function ShowMoreAiring(){
    const {error, loading, data} = useQuery(AIRING_NOW);

    useEffect(()=>{
        console.log(data)
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

export default ShowMoreAiring;