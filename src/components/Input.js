import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const ADD_LIST = gql`
  mutation AddList($name : String!){
    AddList (name : $name) @client
  }
`;

export default function Input({ changeTerm }) {
  const [name, setstate] = useState({ name: "" });
  const [changeInput] = useMutation(ADD_LIST);

  return (
    <div >
      <form
        onSubmit={e => {
          e.preventDefault();
          changeInput({ variables: { name } });
          changeTerm({ variables: { name } });
        }}
        noValidate
        autoComplete="off"
      >
        <input
          className="input"
          defaultValue="Nezuko"
          type="text"
          onChange={e => setstate(e.target.value)}
        />
      </form>
    </div>
  );
}
