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
    description(asHtml: false)
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
    description(asHtml: false)
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
    description(asHtml: false)
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
    description(asHtml: false)
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
  query ShowMore($page: Int, $seasonYear: Int, $season: MediaSeason){
    Page(page: $page, perPage: 48){
      media(type: ANIME, isAdult: false, season: $season, seasonYear: $seasonYear){
        title{
          english
          romaji
        }
        genres
        description(asHtml: false)
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
        id
      }
    }
  }
`;

export const TRY_THIS = gql`
  {
    series1: Media(type: ANIME, id: 98578) {
      id
      title {
        english
        romaji
      }
      genres
      description(asHtml: false)
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
      description(asHtml: false)
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
      description(asHtml: false)
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
      description(asHtml: false)
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
  query AiringTrendingShowMore($page: Int){
    Page(page: $page, perPage: 48) {
      media(sort: TRENDING_DESC, isAdult: false, type: ANIME) {
        id
        title {
          romaji
          english
        }
        genres
        description(asHtml: false)
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
`;


