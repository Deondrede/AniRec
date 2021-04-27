import React, { Fragment, useEffect } from "react";
import "./ShowMore.css";
import TopSpace from "../../components/global_elements/TopSpacer";
import ListingPageShowCard from '../../components/ListingPageShowCard';
import { Container } from "react-bootstrap";
import { Col, Row, Grid } from 'react-flexbox-grid'
import { chunk } from 'lodash'
import { Link, useLocation } from 'react-router-dom';

export default function ShowMore(props){
/*    const {error, loading, data} = useQuery(AIRING_NOW);

    useEffect(()=>{
        console.log(data)
       }, [data]
      );

      if (loading) return <p>Loading1...</p>
      else if (error) return <p>Error1 :(</p>
    else{*/
        //let data = useLocation();
        const location = useLocation();
        const rows = chunk(location.state, 4)
        return (
            <Fragment>
                <TopSpace />
                <Container className="float-md-3">
                    <Row id="back_btn_space">
                        <Link class="back_btn" to={"/Anime"}><strong>Back</strong></Link>
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