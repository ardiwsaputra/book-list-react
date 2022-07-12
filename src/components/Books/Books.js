import React from "react";

import BookItem from "../Books/BookItem";

const Books = (props) => {
  const { items, keywords } = props;

  if (!items) {
    return null;
  }

  return (
    <div className="card p-3" data-test="BooksComponent">
      <p className="title is-4">List of Books</p>
      <div className="columns is-desktop is-multiline">
        {items.length > 0 ? (
          items.map((item, index) => (
            <BookItem
              key={index}
              id={item.id}
              is_favorite={item.is_favorite}
              title={item.title}
              rating={item.rating}
              author={item.author}
              thumbnail={item.thumbnail}
              keywords={keywords}
            />
          ))
        ) : (
          <div
            className="container is-fullheight p-2"
            data-test="NoDataComponent"
          >
            <p className="subtitle">Tidak ada data</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Books;
