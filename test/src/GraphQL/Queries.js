import {gql} from '@apollo/client'

export const RECOMMENDED = gql`
{
  Page(page: 1, perPage: 50){
    pageInfo{
      lastPage
    }
    media(type: ANIME, id: 21856){
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
    media(type: ANIME, id: 9941){
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


export const TRENDING = gql`
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


