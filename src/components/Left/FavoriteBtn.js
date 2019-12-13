import React from "react";
import { Link } from 'react-router-dom'
import { useQuery } from "@apollo/react-hooks";
import { GET_FAVORITES } from "../../queries/query";

export default function FavoriteBtn() {
  const { data } = useQuery(GET_FAVORITES);
  return (
    <Link to="/favorites">
      <div className="favorite-btn">
        <i className="fas fa-heart"></i>
        {data.favorites.length === 0 ? null : (
          <span>{data.favorites.length}</span>
        )}
      </div>
    </Link>
  );
}
