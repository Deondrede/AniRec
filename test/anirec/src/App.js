import { React, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landing_page/LandingPage.js";
import Homepage from "./pages/home_page/Homepage.js";
import MySurvey from "./pages/landing_page/survey_page/surveyType.js";
import ShowMorePage from "./pages/listing_pages/show_more_page.js"
import "./App.css";

import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, } from '@apollo/client'
import {onError} from '@apollo/client/link/error'

import Header from "./components/global_elements/Header.js";

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
            <Header />
            <Router>
              <Switch>
                <Route path="/" exact component={() => <LandingPage />} />
                <Route path="/Anime" exact component={() => <Homepage />} />
                <Route path="/Survey" exact component={() => <MySurvey />} />
                <Route path="/ShowMore" exact component={() => <ShowMorePage />} />
              </Switch>
            </Router>
          </Fragment>
        </ApolloProvider>
      );
}

export default App;
