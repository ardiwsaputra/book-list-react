const FavoriteItem = (props) => {
  const postFavorite = (book_id) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ book_id: book_id }),
    };
    fetch(
      "https://api.kontenbase.com/query/api/v1/4f759565-664a-4acc-9fd7-fb1c42562a2b/favorite_books",
      requestOptions
    )
      .then((response) => response.json())
      .then(() => props.onRefreshHandler(true));
  };

  const deleteFavorite = (book_id) => {
    fetch(
      `https://api.kontenbase.com/query/api/v1/4f759565-664a-4acc-9fd7-fb1c42562a2b/favorite_books/${book_id}`,
      {
        method: "DELETE",
      }
    ).then(() => props.onRefreshHandler(true));
  };

  return (
    <button
      className={!props.is_favorite ? "button is-primary" : "button is-danger"}
      onClick={() => {
        if (!props.is_favorite) {
          postFavorite(props.id);
        } else {
          deleteFavorite(props.id);
        }
      }}
    >
      {`${!props.is_favorite ? "+" : "-"}`} Favorite
    </button>
  );
};

export default FavoriteItem;
