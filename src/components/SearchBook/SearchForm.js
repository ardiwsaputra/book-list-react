import React, { useState } from "react";
import SharedButton from "../SharedButton/SharedButton";

const SearchForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const inputChangeTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const submitHandler = () => {
    const bookData = {
      title: enteredTitle,
    };

    props.onSearchBookData(bookData);
  };

  const configButtonSearch = {
    btnText: `Search`,
    btnColor: "primary",
    btnEmitEvent: submitHandler,
  };

  return (
    <div>
      <div className="field is-half" data-test="SearchFormComponent">
        <label className="label">Keyword</label>
        <div className="control">
          <input
            data-test="InputKeyword"
            className="input"
            type="text"
            value={enteredTitle}
            onChange={inputChangeTitleHandler}
          />
        </div>
      </div>
      <div className="field">
        <SharedButton disabled={enteredTitle === ""} {...configButtonSearch} />
      </div>
    </div>
  );
};

export default SearchForm;
