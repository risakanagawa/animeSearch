import React from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

const ADD_FAVOURITE = gql`
  mutation AddFavorite($favorite : favorite) {
    addFavorite(favorite : $favorite) @client
  }
`;

export default function CharacterCard({ data }) {
  const description = data.description.split(" ").length > 300;
  const [addToFavorite] = useMutation(ADD_FAVOURITE);
  const favorite = data;
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-info">
          <img alt={data.name.full} src={data.image.medium} />
          <div className="card-info-name">
            <h3>{data.name.full}</h3>
            <p>{data.media.nodes[0].title.english}</p>
          </div>
        </div>
        <div className="card-contents">
          <div className="card-description">
            <input id="readmore" className="readmore-check" type="checkbox" />
            <label className="readmore-label" htmlFor="readmore"></label>
            <div className="readmore-content">
              <p>
                {description
                  ? data.description.substr(0, 600) + " ... more at"
                  : data.description.substr(0, 500)}
                {description && <a href={data.siteUrl}> Anilist</a>}
              </p>
            </div>
          </div>
          <div className="card-favourite">
            <i className="fas fa-heart pink"></i>
            <div className="balloon1-left">
              <p>{data.favourites} likes</p>
            </div>
          </div>
          <a href={data.siteUrl}>More Details at Anilist</a>
        </div>
        <div
          className="add-icon"
          onClick={() => addToFavorite({ variables : {favorite : data} })}
        >
          <i className="fas fa-plus"></i>
          <p>Add to your favourite</p>
        </div>
      </div>
    </React.Fragment>
  );
}
