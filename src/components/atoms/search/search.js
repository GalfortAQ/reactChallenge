import "./search.scss";
import React, { useState, useEffect } from "react";

const Search = ({ getFoundCharacter, getFoundLocation, getFoundEpisode }) => {
  const [query, setQuery] = useState("");
  const [typeSearch, setTypeSearch] = useState("character");
  const handlerTyperSearch = (type) => {
    setTypeSearch(type);
  };
  const handlerSearch = (value) => {
    setQuery(value);
    if (typeSearch === "character") {
      getFoundCharacter(value);
    }
    if (typeSearch === "location") {
      getFoundLocation(value);
    }
    if (typeSearch === "episode") {
      getFoundEpisode(value);
    }
  };
  useEffect(() => {}, []);
  return (
    <div className="search">
      <div className="row">
        <div className="col col-3">
          <select
            className="mb-3 search__select"
            onChange={(event) => handlerTyperSearch(event.target.value)}
          >
            <option value="character">Character</option>
            <option value="location">Location</option>
            <option value="episode">Episode</option>
          </select>
        </div>
        <div className="col col-9">
          <input
            type="text"
            placeholder={`Search ${typeSearch}`}
            className="search__input"
            onChange={(event) => handlerSearch(event.target.value)}
            value={query}
          />
        </div>
      </div>
      {/* <div className="row">
        <div className="search__warning">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-exclamation-triangle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            Warning: Think carefully about the characters after the first, Danger
            of catastrophe, We are still working on it
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Search;
