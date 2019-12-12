import React from "react";
import AnimeContainer from "./Anime.container";
import CharacterContainer from "./Character.container";

export default function Main({ search }) {
  const { term, searchAnime } = search;
  return (
    <div className="split split-right">
      { searchAnime ?<AnimeContainer term={term} /> : <CharacterContainer term={term} />}
    </div>
  );
}
