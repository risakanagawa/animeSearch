import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_HISTORY } from "../queries/query";
import Checkbox from "./Checkbox";

export default function Input({ changeTerm }) {
  const [search, setSearch] = useState({
      term: "nezuko",
      searchAnime: false
  });
  const toggle = () => setSearch(prev => ({...prev, searchAnime: !search.searchAnime }));
  const [addHistory] = useMutation(ADD_HISTORY);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addHistory({ variables: { term : search.term } });
          changeTerm({ variables:  {search}  });
        }}
        autoComplete="off"
      >
        <Checkbox checked={search.searchAnime} handleToggle={toggle} />
        <input
          className="input"
          defaultValue="Nezuko"
          type="text"
          onChange={e => {
            const val = e.target.value;
            setSearch(prev => ({...prev, term : val}))
          }}/>
      </form>
    </div>
  );
}
