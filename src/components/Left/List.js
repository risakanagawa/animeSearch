import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {GET_HISTORY, UPDATE_TERM, DELETE_TERM} from '../../queries/query'


export default function List() {
  const { data } = useQuery(GET_HISTORY);
  const [updateSearch] = useMutation(UPDATE_TERM);
  const [deleteList] = useMutation(DELETE_TERM);
  return (
      <ul className='history'>
        {data.history.reverse().map((name, idx) => {
          return (
            <li key={idx} onClick={e => updateSearch({ variables: { search : { term : name } } })}>
              <span>{name}</span> 
              <button onClick={e => deleteList({ variables: { idx } })}>
                x
              </button>
            </li>
          );
        })}
      </ul>);
}
