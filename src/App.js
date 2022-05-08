import React, { useState } from "react";
import Books from "./components/Books/Books";
import SearchBook from "./components/SearchBook/SearchBook";

const App = () => {
  const [books, setBooks] = useState([]);
  const [keywordSearch, setKeywordSearch] = useState("");

  const fetchBookHandler = async (keyword = "") => {
    fetch(
      `https://api.kontenbase.com/query/api/v1/4f759565-664a-4acc-9fd7-fb1c42562a2b/favorite_books`
    )
      .then((res) => {
        return res.json();
      })
      .then((favoriteData) => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyword}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            const transformedBooks = data.items.map((bookData) => {
              const favoriteFind = favoriteData.find(
                (favoriteItem) => favoriteItem.book_id === bookData.id
              );

              return {
                id: favoriteFind ? favoriteFind._id : bookData.id,
                title: bookData.volumeInfo.title,
                author: bookData.volumeInfo.authors ?? [],
                thumbnail: bookData.volumeInfo
                  ? bookData.volumeInfo.imageLinks
                    ? bookData.volumeInfo.imageLinks.thumbnail
                    : "https://bulma.io/images/placeholders/96x96.png"
                  : "https://bulma.io/images/placeholders/96x96.png",
                rating: bookData.volumeInfo.ratingsCount ?? 0,
                is_favorite: favoriteFind ? true : false,
              };
            });
            setBooks(transformedBooks);
          });
      });
  };

  return (
    <div className="box">
      <div className="container">
        <SearchBook
          searchBook={(enteredData) => {
            fetchBookHandler(enteredData.title);
            setKeywordSearch(enteredData.title);
          }}
        />
        <Books
          items={books}
          onRefreshHandler={(value) => {
            if (value) {
              fetchBookHandler(keywordSearch);
            }
          }}
        />
      </div>
    </div>
  );
};

export default App;
