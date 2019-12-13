import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { DELETE_FAVOURITE } from "../queries/query";

export default function FavoriteLists({ favorites }) {
  const [deleteFavorite] = useMutation(DELETE_FAVOURITE);
  const renderList = () => {
    return favorites.map((favorite, idx) => {
      const description = favorite.description.split(" ").length > 300;
      return (
        <div key={idx} className="favorite-list">
          <div className="favorite-info">
            <div className="favorite-img">
              <img alt={favorite.name.full} src={favorite.image.medium} />
            </div>
            <div className="favorite-name">
              <h3>{favorite.name.full}</h3>
            </div>
            <button className='delete-btn' onClick={() => deleteFavorite({ variables: { url : favorite.siteUrl } })}>
              DELETE
            </button>
          </div>
          <div className="card-contents">
            <div className="card-description">
              <input id="readmore" className="readmore-check" type="checkbox" />
              <label className="readmore-label" htmlFor="readmore"></label>
              <div className="readmore-content">
              <h3>{favorite.media.nodes[0].title.english}</h3>
                <p>
                  {description
                    ? favorite.description.substr(0, 600) + " ... more at"
                    : favorite.description.substr(0, 500)}
                  {description && <a href={favorite.siteUrl}> Anilist</a>}
                </p>
                <a href={favorite.siteUrl}>More Details at Anilist</a>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="split split-right">
      <div className="favorite-container">
        {favorites.length !== 0 ? renderList() : <h1>No favorite yet</h1>}
      </div>
    </div>
  );
}
