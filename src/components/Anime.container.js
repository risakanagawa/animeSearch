import React, {Fragment} from 'react'
import { Query } from "react-apollo";
import { GET_MEDIA } from "../queries/query";

import AnimeCard from './Anime.card'
import RelationsCard from './Relations.card'


export default function AnimeContainer({term}) {
    return (
        <Query query={GET_MEDIA} variables={{ search: term }}>
        {({ data, error, loading }) => {
          if (error) return error.message + "💩 Oops!";
          if (loading) return "Patience young grasshopper...";
          const dataObj = data.Media;
          console.log(dataObj);
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
