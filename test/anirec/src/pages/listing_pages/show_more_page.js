import React, { Fragment, useEffect } from "react";
import "./show_more_page.css";
import TopSpace from "../../components/global_elements/TopSpacer";
import {AIRING_NOW} from '../../GraphQL/Queries';
import ListingPageShowCard from '../../components/ListingPageShowCard';
import { Container, Row, Col, Button } from "react-bootstrap";
import {useQuery} from '@apollo/client'
import ShowMoreTable from './show_more_table'

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
                <Container className="float-md">
                {data.Page.media.map(item => (
                    <ShowMoreTable props={item} />
                    ))}
                </Container>
            </Fragment>
        );
    }
}

export default ShowMorePage;