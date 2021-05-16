import React, { Fragment, useEffect, setState  } from "react";

import {useQuery, gql} from '@apollo/client'


export default function GetShow(props) {
    const {showID, setShowID} = setState(props.id)
    const REC_QUERY = gql`
    query RecQuery($id: id) {
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
                id: showID
            }
        })
    
    useEffect(()=>{
        setShowID(showID);
        }, []
    );

    if (loading) return <p>Loading2...</p>
    if (error) return <p>Error2 :(</p>

    console.log(data);
    return data;
}