import gql from "graphql-tag";

export const typeDefs = gql`
  extend type Mutation {
    ChangeInput: String!
  }
`;

const GET_LIST = gql`
  {
    history @client
  }
`;

const GET_FAVORITE = gql`
  {
    favorites @client
  }
`;

const GET_NAME = gql`
  {
    name @client
  }
`;

export const resolvers = {
  Mutation: {
    changeInput: (parent, term, { cache }, info) => {
      console.log("changeInput", term);

      const newTerm = term.name;

      cache.writeQuery({
        query: GET_NAME,
        data: {
          name: newTerm
        }
      });
      return null;
    },
    AddList: (parent, { name }, { cache }, info) => {
      const newName = name;
      const { history } = cache.readQuery({ query: GET_LIST });

      if (history.length >= 4) {
        history.shift();
      }

      const newArr = history.concat(newName);
      cache.writeQuery({
        query: GET_LIST,
        data: {
          history: newArr
        }
      });
    },
    DeleteHistory: (__, idx, { cache }, info) => {
      console.log('delete', idx)
      const { history } = cache.readQuery({ query: GET_LIST });
      history.splice(idx, 1);
      cache.writeQuery({
        query: GET_LIST,
        data: {
          history
        }
      });
    },
    addFavorite: (_parent,   {favorite}, { cache }, info) => {
      const newFavorite = favorite;
      const { favorites } = cache.readQuery({
        query: GET_FAVORITE
      });
      
      if(favorites.find(obj => obj.siteUrl === newFavorite.siteUrl)) {
        return;
      }

      favorites.push(newFavorite);
      cache.writeQuery({
        query: GET_LIST,
        data: { favorites }
      });

      console.log(
        favorites
      );
    }
  }
};
