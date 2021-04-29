import {gql} from '@apollo/client'

export const RECOMMENDED = gql`
{
  series1: Media(type: ANIME, id: 21856) {
    title {
      english
      romaji
    }
    genres
    description
    coverImage {
      medium
      large
      extraLarge
    }
    studios {
      nodes {
        name
      }
    }
  }
  series2: Media(type: ANIME, id: 9941) {
    title {
      english
      romaji
    }
    genres
    description
    coverImage {
      medium
      large
      extraLarge
    }
    studios {
      nodes {
        name
      }
    }
  }
  series3: Media(type: ANIME, id: 121) {
    title {
      english
      romaji
    }
    genres
    description
    coverImage {
      medium
      large
      extraLarge
    }
    studios {
      nodes {
        name
      }
    }
  }
  series4: Media(type: ANIME, id: 21087) {
    title {
      english
      romaji
    }
    genres
    description
    coverImage {
      medium
      large
      extraLarge
    }
    studios {
      nodes {
        name
      }
    }
  }
}
`

export const AIRING_NOW = gql`
{
  Page(page: 1, perPage: 50){
    pageInfo{
      lastPage
    }
    media(type: ANIME, isAdult: false, season: SPRING, seasonYear: 2021){
      title{
        english
        romaji
      }
      genres
      description
      coverImage{
        medium
        large
        extraLarge
      }
      studios{
        nodes{
          name
        }
      }
    }
  }
}
`

export const TRY_THIS = gql`
  {
    series1: Media(type: ANIME, id: 98578) {
      title {
        english
        romaji
      }
      genres
      description
      coverImage {
        medium
        large
        extraLarge
      }
      studios {
        nodes {
          name
        }
      }
    }
    series2: Media(type: ANIME, id: 120) {
      title {
        english
        romaji
      }
      genres
      description
      coverImage {
        medium
        large
        extraLarge
      }
      studios {
        nodes {
          name
        }
      }
    }
    series3: Media(type: ANIME, id: 145) {
      title {
        english
        romaji
      }
      genres
      description
      coverImage {
        medium
        large
        extraLarge
      }
      studios {
        nodes {
          name
        }
      }
    }
    series4: Media(type: ANIME, search: "Horimiya") {
      title {
        english
        romaji
      }
      genres
      description
      coverImage {
        medium
        large
        extraLarge
      }
      studios {
        nodes {
          name
        }
      }
    }
  }
`


export const TRENDING = gql`
{
  Page(page: 1, perPage: 50) {
    media(sort: TRENDING_DESC, isAdult: false, type: ANIME) {
      id
      title {
        romaji
        english
        native
        userPreferred
      }
      genres
      description
      coverImage {
        medium
        large
      extraLarge
      }
      studios {
        nodes {
          name
        }
      }
    }
  }
}
`
