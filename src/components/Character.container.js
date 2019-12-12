import React, {Fragment} from 'react'
import { Query } from "react-apollo";
import { GET_CHARA } from "../queries/query";
import CharacterCard from "./Character.card";
import RelationsCard from './Relations.card'


export default function CharacterContainer({term}) {
    return (
        <Query query={GET_CHARA} variables={{ search: term }}>
        {({ data, error, loading }) => {
          if (error) return error.message + "💩 Oops!";
          if (loading) return "Patience young grasshopper...";
          const dataObj = data.Character;
          console.log(dataObj)
          return (
            <Fragment>
              <CharacterCard data={dataObj} />
              <RelationsCard relations={dataObj.media} />
            </Fragment>
          );
        }}
      </Query>
    )
}
