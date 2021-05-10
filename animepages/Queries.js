import {gql} from '@apollo/client'

export const RECOMMENDED = gql`
{
  series1: Media(type: ANIME, id: 21856) {
    id
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
    id
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
    id
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
    id
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
      id
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
      id
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
      id
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
      id
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
      id
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
  series1: Media(type: ANIME, id: 99147) {
    id
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
  series2: Media(type: ANIME, id: 124845) {
    id
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
  series3: Media(type: ANIME, id: 136) {
    id
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
  series4: Media(type: ANIME, id: 108465) {
    id
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