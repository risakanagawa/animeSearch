import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Input from "./Input";

const UPDATE_TERM = gql`
  mutation ChangeInput($name : String!){
    changeInput (name : $name) @client
  }
`;

const InputContainer = () => {
  return (
    <Mutation mutation={UPDATE_TERM}>
      {changeInput => (
         <Input changeTerm={changeInput} />
      )}
    </Mutation>
  );
};

export default InputContainer;
