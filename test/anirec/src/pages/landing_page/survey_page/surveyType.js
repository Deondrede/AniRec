import React from 'react';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import Json from './questions'; //gets the questions
// survey heirarchy: questions --> surveyType --> surveyOne

//calls questions
//gets called by surveyOne.js
const MySurvey = (props) => {
    return(
        <Survey.Survey
        showCompletedPage={true} 
        onComplete={data=>props.showCompletedPage(data.valuesHash)}
        json={Json}
        />
    )
}

export default MySurvey;
