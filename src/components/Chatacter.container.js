import React from "react";
import gql from "graphql-tag";
import {Query} from "react-apollo";
import Character from './Character'


const GET_TERM = gql`
  {
    name @client
  }
`;

const Container = () => {
return <Query query={GET_TERM}>{({ data: { name } }) => <Character name={name} />}</Query>;
};

export default Container;