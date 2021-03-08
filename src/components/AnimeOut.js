import React from "react";
import ShowAnime from './ShowAnime.js';
//will be used as next page to list
function AnimeOut(){
    return(
        <div>
            <div>
                <h1>Recommended</h1>
            </div>
            <ShowAnime 
            name="Test Anime" 
            image="[image]" 
            genre= "action, adventure, tragedy, drama" 
            studio="New Studio"/>
            <ShowAnime 
            name="Test Anime 2" 
            image="[image]" 
            genre= "romance, slice of life, comedy, shoujo" 
            studio="Veteran Studio"/>
        </div>
    );
}

export default AnimeOut;