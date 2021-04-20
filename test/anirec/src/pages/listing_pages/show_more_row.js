import React from "react";
import ShowMoreTableCell from "./show_more_cell";

function ShowMoreTableRow(props){
    return(
        <tr>
            {props.map(cell => <ShowMoreTableCell props={cell} /> )}
        </tr>
    )
}

export default ShowMoreTableRow