import { useQuery, gql } from "@apollo/client";
import React from "react";

export default function ReturnGenreLink(props){
    const GENRE_LIST = gql`
        query{
            GenreCollection
        }
    `;

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

    var genreArr = [];
    
    const {error, loading, data} = useQuery(GENRE_LIST)

    useEffect(()=>{
        }, [data]
    );

    if (loading) return <p>Loading1...</p>
    else if (error) return <p>Error1 :(</p>
    else{
        data.GenreCollection.map((genre) => 
            genreArr.push(
                {
                    pathname: `/ShowMore/${genre}`,
                    queryObj: GENRE_QUERY,
                    variables: {
                            genre: genre
                        }
                    
                }
            )
        )
    }

}