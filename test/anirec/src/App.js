import { React, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landing_page/LandingPage.js";
import Homepage from "./pages/home_page/Homepage.js";
import SurveyOne from "./pages/landing_page/survey_page/surveyOne.js"
import "./App.css";
import GeneralShowMore from "./pages/listing_pages/GeneralShowMore";
import AnimePage from "./pages/content_pages/show_page.js";

import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, } from '@apollo/client'
import {onError} from '@apollo/client/link/error'

import Header from "./components/global_elements/Header.js";
import GenresShowMore from "./pages/listing_pages/GenresShowMore";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors){
    graphqlErrors.map(({ message, location, path }) => {
      alert(`GraphQL error $(message)`);
    });
  }
});

const link = from([
  errorLink, new HttpLink({uri: 'https://graphql.anilist.co/', fetchOptions: {method: 'POST'}, useGETForQueries: false})
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
      return (
        <ApolloProvider client={client}>
        {" "}
          <Fragment>
            <Router>
              <Switch>
                <Route path="/" exact component={() => <LandingPage />} />
                <Route path="/Anime" exact component={() => <Homepage />} />
                <Route path="/Survey" exact component={() => <SurveyOne />} />
                <Route path="/GenresShowMore/:genreName/:pageNum" exact component={() => <GenresShowMore />}/>
                <Route path="/ShowMore/:queryName/:pageNum" exact component={() => <GeneralShowMore />}/>
                <Route path="/Anime/:animeId" exact component={() => <AnimePage />} />
              </Switch>
            </Router>
          </Fragment>
        </ApolloProvider>
      );
}

//<Route path="/ShowMore/:tag" component={UserPage}/>


export default App;
