import React, { Fragment } from 'react';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import Json from './questions';
import { BrowserRouter as Router, Link } from 'react-router-dom';
//this holds all the survey ideas
//final execution so it's easier to see
// file surveyOne currently holds the logic

const MySurvey = (props) => {
    return(
        <Fragment>
            <Survey.Survey 
            json={Json} //gets the questions
            showCompletedPage={false} //set to false so we dont use default survey complete page
            onComplete={data=>console.log(data.valuesHash)} //shows the survey answer in console
            />
            <Router>
                <button><Link to="/Anime">Head to AniRec</Link></button>
            </Router>
        </Fragment>
    )
}

export default MySurvey;