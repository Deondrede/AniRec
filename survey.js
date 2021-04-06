import React, {Component} from "react";
import ReactDOM from 'react-dom';

export default class TheSurvey extends Component{
    render(){
        return(
            <body>
                <h1>&nbsp;&nbsp;AniRec Survey</h1>
                <div>
                    <p>&nbsp;&nbsp;What genres do you like to watch? Please select all that apply.</p>
                    &nbsp;&nbsp;<input type="checkbox" name="Action"/> Action 
                    <br></br>
                    &nbsp;&nbsp;<input type="checkbox" name="Adventure"/> Adventure
                    <br></br>
                    &nbsp;&nbsp;<input type="checkbox" name="Comedy"/> Comedy
                    <br></br>
                    &nbsp;&nbsp;<input type="checkbox" name="Drama"/> Drama
                    <br></br>
                    &nbsp;&nbsp;<input type="checkbox" name="Ecchi"/> Ecchi
                    <br></br>
                    &nbsp;&nbsp;<input type="checkbox" name="Fantasy"/> Fantasy
                    <br></br>
                    &nbsp;&nbsp;<input type="checkbox" name="Horror"/> Horror
                    <br></br>
                    &nbsp;&nbsp;<input type="checkbox" name="Mahou Shoujo"/> Mahou Shoujo
                    <br></br>
                    &nbsp;&nbsp;<input type="checkbox" name="Mecha"/> Mecha
                    <br></br>
                    &nbsp;&nbsp;<input type="checkbox" name="Music"/> Music
                    <br></br>
                    &nbsp;&nbsp;<input type="checkbox" name="Mystery"/> Mystery
                    <br></br>
                    &nbsp;&nbsp;<input type="checkbox" name="Psychological"/> Psychological
                    <br></br>
                    &nbsp;&nbsp;<input type="checkbox" name="Romance"/> Romance
                    <br></br>
                    &nbsp;&nbsp;<input type="checkbox" name="Sci-Fi"/> Sci-Fi
                    <br></br>
                    &nbsp;&nbsp;<input type="checkbox" name="Slice of Life"/> Slice of Life
                    <br></br>
                    &nbsp;&nbsp;<input type="checkbox" name="Sports"/> Sports
                    <br></br>
                    &nbsp;&nbsp;<input type="checkbox" name="Supernatrual"/> Supernatrual
                    <br></br>
                    &nbsp;&nbsp;<input type="checkbox" name="Thriller"/> Thriller

                    <p></p>

                    <p>&nbsp;&nbsp;Have you watched Attack on Titan?</p>
                    &nbsp;&nbsp;&nbsp;<input type="radio"/>Yes&nbsp;&nbsp; <input type="radio"/>No

                    <p></p>

                    <p>&nbsp;&nbsp;Have you watched My Hero Academia?</p>
                    &nbsp;&nbsp;&nbsp;<input type="radio"/>Yes&nbsp;&nbsp; <input type="radio"/>No
                    <p></p>
                    <p>&nbsp;&nbsp;Have you watched Fullmetal Alchemist: Brotherhood?</p>
                    &nbsp;&nbsp;&nbsp;<input type="radio"/>Yes&nbsp;&nbsp; <input type="radio"/>No
                    <p></p>
                    <p>&nbsp;&nbsp;Have you watched Jujitsu Kaisen?</p>
                    &nbsp;&nbsp;&nbsp;<input type="radio"/>Yes&nbsp;&nbsp; <input type="radio"/>No
                    <p></p>
                    <p>&nbsp;&nbsp;Do you have a favorite anime?</p>
                    &nbsp;&nbsp;&nbsp;<input type="radio"/>Yes&nbsp;&nbsp; <input type="radio"/>No

                    <p></p>
                    &nbsp;&nbsp;&nbsp;<button type="submit">Submit</button>
                </div>
            </body>
        );
    }

    
}

ReactDOM.render(
    <TheSurvey />,
    document.getElementById('root')
);