import gql from "graphql-tag";
import { GET_HISTORY, GET_FAVORITES, GET_TERM } from "./queries/query";

export const typeDefs = gql`
  extend type Mutation {
    ChangeInput: String!
  }
`;

export const resolvers = {
  Mutation: {
    changeInput: (parent, { search }, { cache }, info) => {
      const newTerm = search.term;
      const newSearchAnime = search.searchAnime;
      cache.writeQuery({
        query: GET_TERM,
        data: {
          search: {
            __typename : 'searchTerm',
            term: newTerm,
            searchAnime: newSearchAnime
          }
        }
      });

      return null;
    },
    addHistory: (parent, { term }, { cache }, info) => {
      const newName = term;
      const { history } = cache.readQuery({ query: GET_HISTORY });

      if (history.length >= 4) {
        history.shift();
      }

      const newArr = history.concat(newName);
      cache.writeQuery({
        query: GET_HISTORY,
        data: {
          history: newArr
        }
      });
    },
    DeleteHistory: (__, idx, { cache }, info) => {
      const { history } = cache.readQuery({ query: GET_HISTORY });
      const newHistory = history.splice(idx, 1);
      cache.writeQuery({
        query: GET_HISTORY,
        data: {
          history: newHistory
        }
      });
    },
    addFavorite: (_parent, { favorite }, { cache }, info) => {
      const newFavorite = favorite;
      const { favorites } = cache.readQuery({
        query: GET_FAVORITES
      });

      if (favorites.find(obj => obj.siteUrl === newFavorite.siteUrl)) {
        return;
      }

      const newArr = favorites.concat(newFavorite);

      cache.writeQuery({
        query: GET_FAVORITES,
        data: { favorites: newArr }
      });
    },
    deleteFavorite: (__, _siteUrl, { cache }, info) => {
      const url = _siteUrl.url;

      const { favorites } = cache.readQuery({
        query: GET_FAVORITES
      });

      const arr = favorites.filter(function(el) {
        return el.siteUrl !== url;
      });

      cache.writeQuery({
        query: GET_FAVORITES,
        data: {
          favorites: arr
        }
      });
    }
  }
};
