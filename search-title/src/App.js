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
    items: [],
    search_anime: ""
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

  //default search
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
    
  //handles the change when looking for something new
  handleInputChange = (event) => {
    this.setState({search_anime: event.target.value});
  }

  //function that handles the search portion
  componentFindAnime = () => 
  {
    //This is the GraphQL query
    //can change the sort to what we want (popularity, trending, etc.)
    const query_find = `
    query ($searchTitle: String){
      Page {
        media(search:$searchTitle ,isAdult: false, type:ANIME, sort:POPULARITY_DESC) {
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
      searchTitle: this.state.search_anime
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
        <div>
          <h3>Search Anime:</h3>
          
          {/* getting the desired search title from the user */}
          <input type="text" value={this.state.search_anime} onChange={this.handleInputChange} placeholer="Enter Anime title"/>
          
          {/* clicking the search button will look for the title and change the screen
              however, the default is not restored when the search field is left empty after
              it has been used */}
          <button className="search-button" onClick={this.componentFindAnime}>Search</button>
          
          {/* displays the data using the GridItem at the top of the file and the corresponding css file */}
          <div className="grid">
            {items.map(item => (
              <GridItem key={item.id} 
                        image={item.coverImage.large} 
                        title={item.title.english}
                        genres={item.genres}/>
            ))}
          </div>
        </div>
      );
    }
  }
}

export default App;