import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_LIST = gql`
  {
    history @client
  }
`;

const UPDATE_TERM = gql`
  mutation ChangeInput($name: String!) {
    changeInput(name: $name) @client
  }
`;

const DELETE_TERM = gql`
  mutation DeleteHistory($idx: Int!) {
    DeleteHistory(idx: $idx) @client
  }
`;

export default function List() {
  const { data } = useQuery(GET_LIST);
  const [changeInput] = useMutation(UPDATE_TERM);
  const [deleteList] = useMutation(DELETE_TERM);
  return (
    <div>
      <ul>
        {data.history.reverse().map((name, idx) => {
          return (
            <li key={idx} onClick={e => changeInput({ variables: { name } })}>
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
