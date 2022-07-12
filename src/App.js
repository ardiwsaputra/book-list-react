import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Books from "./components/Books/Books";
import SearchBook from "./components/SearchBook/SearchBook";
import { fetchBooks } from "./actions";

const App = () => {
  const [keywordSearch, setKeywordSearch] = useState("");

  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  return (
    <div className="box">
      <div className="container">
        <SearchBook
          searchBook={(enteredData) => {
            dispatch(fetchBooks(enteredData.title));
            setKeywordSearch(enteredData.title);
          }}
        />
        <Books items={books} keywords={keywordSearch} />
      </div>
    </div>
  );
};

export default App;
