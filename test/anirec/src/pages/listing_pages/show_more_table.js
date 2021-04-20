import React from "react";
import ShowMoreTableRow from "./show_more_row";

function ShowMoreTable(props){
    return(
        <table>
            {props.map(row => <ShowMoreTableRow props ={row} /> )}
        </table>
    )
}

export default ShowMoreTable