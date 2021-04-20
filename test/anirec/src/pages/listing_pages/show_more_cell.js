import React from "react";
import ListingPageShowCard from '../../components/ListingPageShowCard';

function ShowMoreTableCell(props){
    return(
        <td>
            <ListingPageShowCard key={props.id} 
        image={props.coverImage.large} 
        name={(props.title.english==null)
            ? props.title.romaji :
            props.title.english}
        genre={props.genres.join(', ')}
        studio={props.studios.nodes.map(studio_name => 
            studio_name.name).join(', ')}/>
        </td>
    )
}

export default ShowMoreTableCell