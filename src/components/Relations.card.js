import React from "react";
import GET_MEDIA from "../queries/query";
import { UPDATE_TERM } from "../queries/query";

import { useMutation } from "@apollo/react-hooks";

export default function RelationsCard({ relations }) {
  console.log(relations);
  const [updateTerm] = useMutation(UPDATE_TERM);
  const relatedMedia = relations.nodes;
  return (
    <div className="related-container">
      <h2>Related works : </h2>
      <div className="scroll-wrapper">
        {relatedMedia &&
          relatedMedia.map(media => {
            return (
              <div key={media.id} className="related-box">
                <div className="related-image">
                  <img src={media.coverImage.large} alt={media.title.english} />
                </div>
                <div className="related-info">
                  <p
                    className="related-title"
                    style={{
                      textDecoration: "underline",
                      textDecorationColor: media.coverImage.color
                    }}
                    onClick={() => {
                      updateTerm({
                        variables: {
                          search: {
                            term: media.title.english,
                            searchAnime: true
                          }
                        }
                      });
                    }}
                  >
                    {media.title.userPreferred}
                  </p>
                  <p className="media-type">
                    {" "}
                    {media.type === "ANIME" ? (
                      <i className="fas fa-tv"></i>
                    ) : (
                      <i className="fas fa-book-open"></i>
                    )}{" "}
                    {media.type}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
