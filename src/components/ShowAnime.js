import React from "react";
import "./AnimeBox.css";
//frame for the anime to show
function ShowAnime(props){
    return(
        <div className="anime">
            <h3>{props.image}</h3>
            <h3>Title: {props.name}</h3>
            <h4>Genres: {props.genre}</h4>
            <h4>Studio: {props.studio}</h4>

        </div>
    );
}

export default ShowAnime;