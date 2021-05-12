import React from 'react';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import Json from './questions';
// this hold the basic survey
// survey heirarchy: questions --> surveyType --> surveyOne
// surveyOne file has all the added parts the project needs.

// gets called by surveyOne
const MySurvey = (props) => {
    return(
            <Survey.Survey 
            json={Json} //gets the questions
            showCompletedPage={true} //shows the default complete page
            onComplete={data=>props.showCompletedPage(data.valuesHash)} //shows the survey answer in console
            />
    )
}

export default MySurvey;
