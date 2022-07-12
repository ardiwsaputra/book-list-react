import React, { useState } from "react";

const SearchForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const inputChangeTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const submitHandler = (event) => {
    const bookData = {
      title: enteredTitle,
    };

    props.onSearchBookData(bookData);
  };

  return (
    <div>
      <div className="field is-half" data-test="SearchFormComponent">
        <label className="label">Keyword</label>
        <div className="control">
          <input
            className="input"
            type="text"
            value={enteredTitle}
            onChange={inputChangeTitleHandler}
          />
        </div>
      </div>
      <div className="field">
        <button
          type="submit"
          className="button is-primary"
          disabled={enteredTitle === ""}
          onClick={submitHandler}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
