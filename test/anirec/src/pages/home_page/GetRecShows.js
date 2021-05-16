import React, { Fragment, useEffect, setState  } from "react";
import { useLocation } from "react-router-dom";

import {useQuery, gql} from '@apollo/client'


export default function GetShow(props) {
    const REC_QUERY = gql`
    query RecQuery($id: Int) {
        Media(type: ANIME, id: $id){
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
    }`;
    
    const {error, loading, data} = useQuery(REC_QUERY,
        {
            variables: {
                id: props.id
            }
        })
    
    useEffect(()=>{
        }, []
    );

    if (loading) return <p>Loading2...</p>
    if (error) return <p>Error2 :(</p>

    return data;
}