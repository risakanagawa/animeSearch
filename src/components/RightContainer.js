import React from "react";
import { Query } from "react-apollo";
import Main from "./Main";
import { GET_TERM } from "../queries/query";

const RightContainer = () => {
  return (
    <Query query={GET_TERM}>
      {({ data: { search } }) => <Main search={search} />}
    </Query>
  );
};

export default RightContainer;
