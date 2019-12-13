import React, {Fragment} from 'react'
import { Query } from "react-apollo";
import { GET_MEDIA } from "../queries/query";
import ErrorPage from './Errorpage'
import AnimeCard from './Anime.card'
import RelationsCard from './Relations.card'


export default function AnimeContainer({term}) {
    return (
        <Query query={GET_MEDIA} variables={{ search: term }}>
        {({ data, error, loading }) => {
          if (error) return <ErrorPage /> ;
          if (loading) return "Patience young grasshopper...";
          const dataObj = data.Media;
          return (
            <Fragment>
              <AnimeCard data={dataObj} />
              <RelationsCard relations={dataObj.relations} />
            </Fragment>
          );
        }}
      </Query>
    )
}
