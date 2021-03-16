import React from "react";
import ShowAnime from './ShowAnime.js';
//will be used as next page to list
function AnimeOut(){
    return(
        <div>
            <div className="anime-search">
                <form className="search-form">
                    <input className="search-bar" type="text" />
                    <button className="search-button" type="submit">
                        Search
                    </button>
                </form>
            </div>
            <div>
                <h2>Recommended | Now Airing | Try This | Trending</h2>
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