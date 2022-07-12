import React from "react";

import SearchForm from "./SearchForm";

const SearchBook = (props) => {
  const saveBookDataHandler = (enteredBookData) => {
    props.searchBook(enteredBookData);
  };

  return (
    <div className="box" data-test="SearchBookComponent">
      <p className="title is-4">Searching</p>
      <SearchForm onSearchBookData={saveBookDataHandler} />
    </div>
  );
};

export default SearchBook;
