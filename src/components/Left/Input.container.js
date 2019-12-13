import React from "react";
import { Mutation } from "react-apollo";
import Input from "./Input";
import { UPDATE_TERM } from "../../queries/query";
import { useHistory } from "react-router-dom";

const InputContainer = () => {
  let history = useHistory();

  return (
    <Mutation 
      mutation={UPDATE_TERM}
      onCompleted={() => {
        if(history.location.pathname !== '/'){
          history.push('/')
        }
      }}
    >
      {changeInput => <Input changeTerm={changeInput} />}
    </Mutation>
  );
};

export default InputContainer;
