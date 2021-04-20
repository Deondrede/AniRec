import React, { Fragment, useEffect } from "react";
import "./show_more_page.css";
import TopSpace from "../../components/global_elements/TopSpacer";
import {AIRING_NOW} from '../../GraphQL/Queries';
import ShowCard from '../../components/ShowCard';
import { Container, Row, Col, Button } from "react-bootstrap";
import {useQuery} from '@apollo/client'


function ShowMorePage(){
    const {error, loading, data} = useQuery(AIRING_NOW);

    useEffect(()=>{
        console.log(data)
       }, [data]
      );

      if (loading) return <p>Loading1...</p>
      else if (error) return <p>Error1 :(</p>
    else{
        return (
            <Fragment>
                <TopSpace />
                <Container className="float-sm-left">
                    {data.Page.media.map(item => (
                    <ShowCard key={item.id} 
                        image={item.coverImage.large} 
                        name={(item.title.english==null)
                            ? item.title.romaji :
                            item.title.english}
                        genre={item.genres.join(', ')}
                        studio={item.studios.nodes.map(studio_name => 
                            studio_name.name).join(', ')}/>
                    ))}
                </Container>
            </Fragment>
        );
    }
}

export default ShowMorePage;