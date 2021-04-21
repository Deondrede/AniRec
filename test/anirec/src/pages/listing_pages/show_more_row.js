import React from "react";
import ShowMoreTableCell from "./show_more_cell";

function ShowMoreTableRow({props}){
    return(
        <tr>
            <ShowMoreTableCell props={props} />
        </tr>
    )
}

export default ShowMoreTableRow