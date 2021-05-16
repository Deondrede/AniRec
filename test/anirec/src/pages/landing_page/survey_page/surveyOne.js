import React, {useState, useCallback, Fragment} from 'react';
import { Link } from "react-router-dom"
import MySurvey from './surveyType';
import {Link} from "react-router-dom";
const axios = require('axios').default;
let nametotake = "";

let nametotake = "";

{/*
    Author: Caitlin-Dawn Sangcap
    Spring 2021. CSCI 499 - Capstone Project: AniRec

    Created this following this YouTube tutorial: https://www.youtube.com/watch?v=NW0GwiHmNik
    Survey heirarchy: questions --> surveyType --> surveyOne
    This file holds the survey logic.

    what it currently does:
     - allows the users to take the survey
     - all needed answers are gathered
     - send the survey responses to the backend
     - send the username to the Homepage
     
    Issues:
        problem titles (DON'T CLICK ON):
         - Action --> Hunter x Hunter
         - Adventure --> Sword Art Online (gets error ValueError: The truth value of an array with more than one element is ambiguous. Use a.any() or a.all())

        Commented out portions:
         - commented out the setFinalPage() due to time constraints
           - was originally meant to display custom Thank you page.
        
        Backend related:
         - once the watched_anime field in the backend reaches or gets close to 50 charcters,
           the backend will start sending 500 errors
           EXAMPLE ERROR:
                django.db.utils.DataError: value too long for type character varying(50)

*/}

//function to send all the data to the backend
// copied from Deondre's work
function register(formData1){
    axios({
        method: "post",
        url: "http://localhost:5000/anime",
        data: formData1,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
        //console.log("sent request");
    }

const SurveyOne = () => {

    const [showPage, setShowPage] = useState(true);

    //function takes the data from the user and sends it to the backend.
    // NOTE: This is survey specific. ONLY WORKS WITH THE SURVEY PROVIDED.
    const onCompletePage = useCallback((data)=> {
        //console.log("This is from the surveyOne2.js file ",data);
        setShowPage(!showPage);

        let response = data; // to play around with the data
        console.log(data);
        let titles = []; //store all the wanted titles from the survey 
        let send_data = []; //store all the FormData to be sent
        let char_count = 0; //keep track of the amount of characters in titles to avoid errors
        let username = response.Username;

        nametotake = username;

        //console.log(username);
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
                    if (titles.includes(yes_titles[y]) === false){
                        //console.log("yes",yes_titles[y]);
                        titles.push(yes_titles[y]);
                        
                    }
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
                    if (titles.includes(maybe_titles[m]) === false) {
                        //console.log("maybe",maybe_titles[m]);
                        titles.push(maybe_titles[m]);
                    }
                }
            }
        }
        //console.log(titles.length);

        //making the different formData to be send to the backend
        for( var a =0; a < titles.length; a++){
            if( char_count <= 50){
                char_count = char_count + titles[a].length + 2;
                let bodyFormData = new FormData();
                bodyFormData.append("username", username);
                bodyFormData.append("anime", titles[a]);
                send_data.push(bodyFormData);
            }
        }

        console.log(send_data.length);
        //sending the data to the backend
        send_data.forEach(element => {
            register(element)
        });
        
    }, [showPage])

    //can customize the thank you page for what we want. not mandatory.
    // removed from use due to time constraints
    /*const setFinalPage = () => {
        return(
            <main>
                <h1>Thank you for taking the survey. Please wait while we build your recommendations.</h1>
            </main>
        )
    }*/

    return(
        <Fragment>
            <MySurvey showCompletedPage={data=>onCompletePage(data)} />
            <Link to ={{
                pathname:"/Anime",
                state:{
                    user:nametotake
                }
            }}>
            <button>Head to AniRec</button>
            </Link>
        </Fragment>
        
    )
}

export default SurveyOne;
