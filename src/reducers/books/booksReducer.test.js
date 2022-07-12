import { types } from "./../../actions/types";
import booksReducer from "./booksReducer";

describe("Reducers -> Books", () => {
  it("Should return default state", () => {
    const newState = booksReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("Should return new state if receiving type", () => {
    const books = [
      {
        id: "abcdefg",
        title: "Judul Buku 1",
        author: ["Author 1"],
        thumbnail: "https://bulma.io/images/placeholders/96x96.png",
        rating: 5,
        is_favorite: true,
      },
      {
        id: "bcdefgh",
        title: "Judul Buku 2",
        author: ["Author 1", "Author 2"],
        thumbnail: "https://bulma.io/images/placeholders/96x96.png",
        rating: 2,
        is_favorite: false,
      },
      {
        id: "cdefghi",
        title: "Judul Buku 3",
        author: ["Author 3"],
        thumbnail: "https://bulma.io/images/placeholders/96x96.png",
        rating: 4,
        is_favorite: true,
      },
    ];

    const newState = booksReducer(undefined, {
      type: types.GET_BOOKS,
      payload: books,
    });

    expect(newState).toEqual(books);
  });
});
