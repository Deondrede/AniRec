{/*
    Created this following this YouTube tutorial: https://www.youtube.com/watch?v=NW0GwiHmNik
    This file holds the survey logic.
    what it currently does:
     - allows the users to take the survey
     - all needed answers are gathered

*/}

//does the logic
//call Mysurvey from surveyType.js
// this file should be the one that gets called by App
//survey heirarchy: questions --> surveyType --> surveyOne

//to get the genre response = response.GENRE.ANSWER.Anime[index 0-2]

import React, {useState, useCallback} from 'react';
import MySurvey from './surveyType';

const SurveyOne = () => {

    const [showPage, setShowPage] = useState(true);

    //function takes the data from the user and sends it to the backend.
    // NOTE: This is survey specific. ONLY WORKS WITH THE SURVEY PROVIDED.
    const onCompletePage = useCallback((data)=> {
        //console.log("This is from the surveyOne2.js file ",data);
        setShowPage(!showPage);

        let response = data; // to play around with the data
        let titles = []; //store all the wanted titles from the survey answers
        //get list of all prefered genres
        let desired_genres = response.prefered_genres;

        //go through all the desired genres
        for (var x = 0; x < desired_genres.length; x++) {
            let selected_genre = desired_genres[x];

            //console.log(response[selected_genre]["Yes"]);
            //yes answers
            if (response[selected_genre]["Yes"] != null){
                //get the yes titles
                let yes_titles = response[selected_genre]["Yes"]["Anime"];
                //console.log(yes_titles);
                for (var y = 0; y < yes_titles.length; y++){
                    //console.log("yes",yes_titles[y]);
                    //add the yes_titles to titles
                    titles.push(yes_titles[y]);
                }
            }

            //maybe answers
            if(response[selected_genre]["Maybe"] != null){
                //get the maybe titles
                let maybe_titles = response[selected_genre]["Maybe"]["Anime"];
                //console.log(maybe_titles);
                for( var m = 0; m < maybe_titles.length; m++){
                    //console.log("maybe",maybe_titles[m]);
                    //add the maybe_titles to titles
                    titles.push(maybe_titles[m]);
                }
            }
        }
        //console.log(titles);

        //after all the data is gathered, send it to the backend.
        
    }, [showPage])

    //can customize the thank you page for what we want. not mandatory.
    const setFinalPage = () => {
        return(
            <main>
                <h1>Thank you for taking the survey. Please wait while we build your recommendations.</h1>
            </main>
        )
    }

    return(
        <div>
            {
                showPage?
                <MySurvey showCompletedPage ={data=>onCompletePage(data)} />:
                setFinalPage()
            }
        </div>
    )
}

export default SurveyOne;
