import React, { Component, Fragment, useEffect } from "react";
import axios from 'axios';
import "./show_more_page.css";
import {AIRING_NOW} from '../../GraphQL/Queries';
import {useQuery} from '@apollo/client';

//function for landing page
function ShowMorePage(){
    const {error, loading, data} = useQuery(AIRING_NOW);

    useEffect(()=>{
      console.log(data)
     }, [data]
    );

    if (loading) return <p>Loading1...</p>;
    if (error) return <p>Error1 :(</p>;

    state = {
        error: null, 
        isLoaded: false,
        items: []
    };

    getAnime = async (query, variables) => {
        try{ 
          const response = await axios.post('https://graphql.anilist.co', {query, variables});
    
          //log the data
          console.log(response.data);
    
          //set the data to the state
          this.setState(() => ({
            isLoaded: true,
            items: response.data.data.Page.media
          }));
        } catch (error) {
          //if there's an error, set the error to the state
          this.setState(() => ({error}));
        }
    }

    const variables_find ={};

    this.getAnime(AIRING_NOW, variables_find);

    render() {
        const { error, isLoaded, items} = this.state;

        if(error) {
            return<div>{error.message}</div>;
        }else if (!isLoaded) {
            return<div>Loading...</div>;
        }else{
            return (
                <Fragment>
                    <Header />
                    <TopSpace />
                    <Container className = "App">
                        {items.map(item => (
                            <ShowCard 
                                name={(item.title.english==null)
                                    ? item.title.romaji :
                                    item.title.english}
                                image={item.coverImage.large}
                                genre= {item.genres.join(', ')}
                                studio={item.studios.nodes[0].name}
                        />
                    ))}
                    </Container>
                </Fragment>
            );
        }
    }
}

export default ShowMorePage;