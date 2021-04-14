//made following tutorial: https://codebushi.com/graphql-api-with-react/

import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

//controls how the animes are displayed
const GridItem = (props) => (
  <div className="grid__flex">
    <img className="grid__img" src={props.image} alt={props.title}/>
    <h3>{props.title}</h3>
  </div>
)

class App extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: []
  }

  getAnime = async (query, variables) => {
    try{ 
      const response = await axios.post('https://graphql.anilist.co', {query, variables});

      //log the data
      console.log(response.data)

      //set the data to the state
      this.setState(() => ({
        isLoaded: true,
        items: response.data.data.Page.media
      }));
    } catch (error) {
      //if there's an error, set the error to the state
      this.setState(() => ({error}))
    }
  }

  componentDidMount() 
  {
    //This is the GraphQL query

    //can change the sort to what we want (popularity, trending, etc.)
    const query_find = `
    query {
      Page {
        media( isAdult: false, type:ANIME, sort:POPULARITY_DESC) {
          id
          title {
            romaji
            english
          }
          coverImage {
            large
            medium
          }
          genres
        }
      }
    }
    `;

    //These variables are optional, leave empty for now
    const variables_find ={
    };

    //we call the methos here to executre our async function
    this.getAnime(query_find, variables_find)
  }
    
  

  render() {
    const { error, isLoaded, items} = this.state;

    if(error) {
      return<div>{error.message}</div>;
    }else if (!isLoaded) {
      return<div>Loading...</div>;
    }else{
      return (
        <div className="grid">
          {items.map(item => (
            <GridItem key={item.id} 
                      image={item.coverImage.large} 
                      title={item.title.english}
                      genres={item.genres}/>
          ))}
        </div>
      );
    }
  }
}

export default App;