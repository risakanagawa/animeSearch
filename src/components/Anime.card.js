import React from "react";

export default function AnimeCard({ data }) {
  const {
    description,
    siteUrl,
    coverImage,
    favourites,
    genres,
    isAdult,
    title,
    status,
  } = data;
  return (
    <React.Fragment>
      <div className="card">
        <div className="card-info">
          <img alt={title.english} src={coverImage.large} />
          <div className="card-info-name">
          <h1>{title.romaji}</h1>
          </div>
        </div>
        <div className="card-contents">
          <div className="card-description">
            <input id="readmore" className="readmore-check" type="checkbox" />
            {description.split(' ').length > 100 ? <label className="readmore-label" htmlFor="readmore"></label> : null } 
            <div className="readmore-content">
              <p>
                {description}
              </p>
            </div>
          </div>

          <div className="card-favourite">
            <i className="fas fa-heart pink"></i>
            <div className="balloon1-left">
              <p>{favourites} likes</p>
            </div>
          </div>
          <div className="anime-info">
            <ul>
              {genres.map((genre, idx)=> <li key={idx}><i className="far fa-check-square"></i> {genre}</li> )}
            </ul>
            <p>{isAdult ? <i className="fas fa-exclamation-circle"></i> :<i className="far fa-square"></i>}{" "}Adult</p>
            <p> {status ?<i className="far fa-check-square"></i> :<i className="far fa-square"></i>}{" "}Finished</p>
          </div>
          <a href={siteUrl}>More Details at Anilist</a>
        </div>
      </div>
    </React.Fragment>
  );
}
