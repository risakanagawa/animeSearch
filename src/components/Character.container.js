import React, {Fragment} from 'react'
import { Query } from "react-apollo";
import { GET_CHARA } from "../queries/query";
import CharacterCard from "./Character.card";
import RelationsCard from './Relations.card'
import ErrorPage from './Errorpage'
import Loading from './ Loading';


export default function CharacterContainer({term}) {
    return (
        <Query query={GET_CHARA} variables={{ search: term }}>
        {({ data, error, loading }) => {
          if (error) return <ErrorPage /> ;
          if (loading) return <Loading />;
          const dataObj = data.Character;
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
