import {gql} from '@apollo/client'

export const LOAD_ANIME = gql`
query{
  Media(type: ANIME, search: "March Comes in like a Lion Season 2"){
    title{
      english
      romaji
    }
    description
    coverImage{
      large
    }
    id
    genres
    studios{
      nodes{
        name
      }
    }
  }
}
`


