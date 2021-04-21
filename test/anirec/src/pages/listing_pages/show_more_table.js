import React from "react";
import ShowMoreTableRow from "./show_more_row";

function ShowMoreTable({props}){
    return(
        <table>
            <ShowMoreTableRow props={props} />
        </table>
    )
}

export default ShowMoreTable