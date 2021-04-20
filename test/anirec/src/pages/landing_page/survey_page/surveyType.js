import React, { Fragment } from 'react';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import Json from './questions';
//this holds all the survey ideas
//final execution so it's easier to see
// file surveyOne currently holds the logic

const MySurvey = (props) => {
    return(
        <Fragment>
            <Survey.Survey 
            json={Json} //gets the questions
            showCompletedPage={true} //shows the default complete page
            onComplete={data=>console.log(data.valuesHash)} //shows the survey answer in console
            />
            <button><a href="/Anime">Head to AniRec</a></button>
        </Fragment>
    )
}

export default MySurvey;
