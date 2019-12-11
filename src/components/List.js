import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {GET_HISTORY, UPDATE_TERM, DELETE_TERM} from '../queries/query'


export default function List() {
  const { data } = useQuery(GET_HISTORY);
  const [updateSearch] = useMutation(UPDATE_TERM);
  const [deleteList] = useMutation(DELETE_TERM);
  console.log(data)
  return (
    <div>
      {/* {data.history.length === 0 ? null : <span>------ Search History ------</span>} */}
      <ul>
        {data.history.reverse().map((name, idx) => {
          console.log(name)
          return (
            <li key={idx} onClick={e => updateSearch({ variables: { name } })}>
              <span>{name}</span> 
              <button onClick={e => deleteList({ variables: { idx } })}>
                x
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
