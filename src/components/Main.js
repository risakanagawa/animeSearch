import React from "react";
import { Query } from "react-apollo";
import CharacterCard from "./Character.card";
import { GET_CHARA, GET_MEDIA } from "../queries/query";
import AnimeCard from "./Anime.card";

export default function Main({ search }) {
  const { term, searchAnime } = search;
  console.log("character", searchAnime);

  return (
    <div className="split split-right">
      {searchAnime ? (
        <Query query={GET_MEDIA} variables={{ search: term }}>
          {({ data, error, loading }) => {
            if (error) return error.message + "💩 Oops!";
            if (loading) return "Patience young grasshopper...";
            const dataObj = data.Media;
            console.log(dataObj)
            return <AnimeCard data={dataObj} />
          }}
        </Query>
      ) : (
        <Query query={GET_CHARA} variables={{ search: term }}>
          {({ data, error, loading }) => {
            if (error) return error.message + "💩 Oops!";
            if (loading) return "Patience young grasshopper...";
            const dataObj = data.Character;
            return <CharacterCard data={dataObj} />;
          }}
        </Query>
      )}
    </div>
  );
}
