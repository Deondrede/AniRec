Using <a href> instead of <Link> should have fixed the redirecting. The only things changed are:
 - signup.component.js
 - surveyType.js

the layout is still the same as below

##########

How to do this janky method to go from:
Register -> Survey -> Anime pages

LandingPage.js is the same as how the LoginPage was in ReactFrontApp. 
App.js, signup.component.js, and surveyType.js have changes made. 

Layout: 
Follow the test branch layout, but within the landing_page folder,
create another folder "survey_page" which contains:
- questions.js 
- surveyOne.js
- surveyType.js 

from Caitlin's Survey branch.

Set up should be done, so the method is:
Run: npm start

- Click on the Register tab
- fill in and click Register
 - the URL should change to localhost:3000/Survey, but still on the Register page
 - REFRESH the page, and it should now bring up the Survey
 - fill out the Survey and click complete, it should automatically take you to a completed page
 - Click on the button to return to AniRec
 - REFRESH again to take us to the /Anime page where we show the listed anime

the button to take us back to AniRec is still visible on the survey page unfortunately, 
but I suppose it could be there for people who dont want to answer the survey
