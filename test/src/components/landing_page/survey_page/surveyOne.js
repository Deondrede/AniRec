{/*
    Created this following this YouTube tutorial: https://www.youtube.com/watch?v=NW0GwiHmNik
    This file holds the survey logic.
    what it currently does:
     - allows the users to take the survey
     - the answers are printed in the console

*/}

import React, {useState, useCallback} from 'react';
import MySurvey from './surveyType';

const SurveyOne = () => {

    //
    const [showPage, setShowPage] = useState(true);

    const onCompletePage = useCallback((data)=>{
        console.log(data);
        setShowPage(!showPage)
    },[showPage]);

    //what the user will see when they complete the survey
    //does not work yet. Current code shows the default complete page,
    //not the one in setFinalPage
    const setFinalPage = () =>{
        return(
            <main>
                <h1>Thank you for taking the survey.</h1>
            </main>
        )
    };

    //still working out the kinks here
    return(
        <div className="App">
            {
                showPage?
                <MySurvey showCompletedPage={data=>onCompletePage(data)} />:
                setFinalPage()
            }
        </div>
    )
}

export default SurveyOne;