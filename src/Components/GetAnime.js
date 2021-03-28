import React, {useEffect, useState} from 'react'
import {useQuery, gql} from '@apollo/client'
import {LOAD_ANIME} from '../GraphQL/Queries'

function GetAnime() {

  const {error, loading, data} = useQuery(LOAD_ANIME);
  useEffect(()=>{
    console.log(data)
  }, [data]
);
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>
    var imgLink = data.Media.coverImage.large
    /*console.log(imgLink);*/
    return (/*<div><p>{`${data.Media.title.english}`}</p></div>*/
            <div id="AnimeInfo">
              <img src={`${data.Media.coverImage.large}`} class="center"/>
              <h1 id='Title'>{`${data.Media.title.english}`}</h1>
              <p dangerouslySetInnerHTML={{ __html: data.Media.description }}></p>
            </div>
            /*<div id="cover"><img src=imgLink /></div>*/
    )
}

export default GetAnime
