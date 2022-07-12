import React from "react";
import FavoriteItem from "./FavoriteItem";

const BookItem = (props) => {
  const {
    thumbnail,
    title,
    author,
    rating,
    id,
    is_favorite,
    onRefreshHandler,
  } = props;

  if (!title) {
    return null;
  }

  return (
    <div className="column is-one-quarter" data-test="BookItemComponent">
      <div className="card">
        <div className="card-image">
          <figure className="image is-square">
            <img src={thumbnail} alt={title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">
                Authors:{" "}
                {author.map((item, index) =>
                  author.length - 1 === index ? item : item + ", "
                )}
              </p>
            </div>
          </div>
          <div className="content">Rating: {rating}/5</div>
          <div className="content">
            <FavoriteItem
              id={id}
              is_favorite={is_favorite}
              onRefreshHandler={(value) => onRefreshHandler(value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
