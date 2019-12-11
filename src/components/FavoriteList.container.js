import React from 'react'
import {Query} from "react-apollo";
import { GET_FAVORITES } from '../queries/query'
import FavoriteLists from './FavoriteLists';

export default function FavoriteListContainer() {
    return <Query query={GET_FAVORITES}>{({ data: { favorites } }) => <FavoriteLists favorites={favorites} />}</Query>;
}
