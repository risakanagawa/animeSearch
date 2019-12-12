import gql from "graphql-tag";

export const GET_MEDIA = gql`
  query getMedia($search: String!) {
    Media(search: $search) {
      id
      status
      seasonInt
      episodes
      title {
        romaji
        english
        native
        userPreferred
      }
      description
      isAdult
      genres
      siteUrl
      coverImage {
        extraLarge
        large
        medium
        color
      }
      favourites
      relations {
        nodes {
          id
          type
          title {
            romaji
            english
            native
            userPreferred
          }
          coverImage {
            extraLarge
            large
            medium
            color
          }
        }
      }
    }
  }
`;

export const GET_CHARA = gql`
query GetCharacter($search: String!) {
  Character(search: $search) {
    siteUrl
    description(asHtml: false)
    image {
      large
      medium
    }
    favourites
    name {
      full
    }
    media {
      nodes {
        id
        type
        title {
          romaji
          english
          native
          userPreferred
        }
        coverImage {
          extraLarge
          large
          medium
          color
        }
      }
    }
  }
}
`;

export const GET_TERM = gql`
  {
    search @client {
      term
      searchAnime
    }
  }
`;

export const GET_FAVORITES = gql`
  {
    favorites @client
  }
`;

export const GET_HISTORY = gql`
  {
    history @client
  }
`;

export const ADD_HISTORY = gql`
  mutation AddHistory($term: String!) {
    addHistory(term: $term) @client
  }
`;

export const UPDATE_TERM = gql`
  mutation ChangeInput($search: search) {
    changeInput(search: $search) @client
  }
`;

export const DELETE_TERM = gql`
  mutation DeleteHistory($idx: Int!) {
    DeleteHistory(idx: $idx) @client
  }
`;

export const ADD_FAVOURITE = gql`
  mutation AddFavorite($favorite: favorite) {
    addFavorite(favorite: $favorite) @client
  }
`;

export const DELETE_FAVOURITE = gql`
  mutation DeleteFavorite($url: String) {
    deleteFavorite(url: $url) @client
  }
`;
