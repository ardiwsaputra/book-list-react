import React, { useState } from "react";
import SharedButton from "../SharedButton/SharedButton";

const BookItem = (props) => {
  const { thumbnail, title, author, rating, id, is_favorite, keywords } = props;

  const [isFavorite, setIsFavorite] = useState(false);
  // const postFavorite = (book_id) => {
  //   const requestOptions = {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ book_id: book_id }),
  //   };
  //   fetch(
  //     "https://api.kontenbase.com/query/api/v1/4f759565-664a-4acc-9fd7-fb1c42562a2b/favorite_books",
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then(() => onRefreshHandler(true));
  // };

  // const deleteFavorite = (book_id) => {
  //   fetch(
  //     `https://api.kontenbase.com/query/api/v1/4f759565-664a-4acc-9fd7-fb1c42562a2b/favorite_books/${book_id}`,
  //     {
  //       method: "DELETE",
  //     }
  //   ).then(() => onRefreshHandler(true));
  // };

  const handleFavorite = () => {
    if (!isFavorite) {
      setIsFavorite(true);
      // postFavorite(props.id);
    } else {
      setIsFavorite(false);
      // deleteFavorite(props.id);
    }
  };

  const configButtonFavorite = {
    btnText: `${!isFavorite ? "+" : "-"} Favorite`,
    btnColor: !isFavorite ? "primary" : "danger",
    btnEmitEvent: handleFavorite,
  };

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
              <p className="subtitle is-6" data-test="AuthorMoreThanOne">
                Authors:{" "}
                {author.map((item, index) =>
                  author.length - 1 === index ? item : item + ", "
                )}
              </p>
            </div>
          </div>
          <div className="content">Rating: {rating}/5</div>
          <div className="content">
            <SharedButton
              data-test="FavoriteButton"
              {...configButtonFavorite}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
