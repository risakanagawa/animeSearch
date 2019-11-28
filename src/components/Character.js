import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import CharacterCard from "./Character.card";

const GET_CHARA = gql`
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
      media(type: ANIME) {
        nodes {
          title {
            romaji
            english
            native
            userPreferred
          }
        }
      }
    }
  }
`;

export default function Character({ name }) {
  console.log(name);
  return (
    <div className="split split-right">
      <Query query={GET_CHARA} variables={{ search: name }}>
        {({ data, error, loading }) => {
          if (error) return error.message + "💩 Oops!";
          if (loading) return "Patience young grasshopper...";
          const  dataObj  = data.Character;
          console.log(dataObj)
          return (
            <CharacterCard data={dataObj} />
          );
        }}
      </Query>
    </div>
  );
}
