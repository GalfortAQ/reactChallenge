import "./table.scss";
import React, { useEffect, useState } from "react";
import FormAddCharacter from "../../atoms/formAddCharacter/formAddCharacter";
import CharacterCard from "../../atoms/characterCard/characterCard";
import LocationCard from "../../atoms/locationCard/locationCard";
import EpisodeCard from "../../atoms/episodeCard/episodeCard";
import Pagination from "../../atoms/pagination/pagination";
import Search from "../../atoms/search/search";

function Table() {
  const initialUrl = "https://rickandmortyapi.com/api/character";
  const [localCharacters, setLocalCharacters] = useState(JSON.parse(localStorage.getItem("localCharacters")));
  const [results, setResults] = useState(localCharacters);
  const [info, setInfo] = useState({});
  const [typeSearch, setTypeSearch] = useState("character");
  const setLocalStorage = (value) => {
    try {
      setLocalCharacters(value);
      window.localStorage.setItem("localCharacters",JSON.stringify(value));
    } catch (error) {console.error(error)}
  };
  const getData = async (url) => {
    setResults([]);
    try {
      const jsonRES = await fetch(url).then((response) => response.json());
      if (!jsonRES.error) {
        if (typeSearch === "character") {
          setResults(localCharacters.concat(jsonRES.results));
        } else {
          setResults(jsonRES.results);
        }
        setInfo(jsonRES.info);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const onPrevious = () => {
    getData(info.prev);
  };
  const onNext = () => {
    getData(info.next);
  };
  const getFoundCharacter = (value) => {
    setTypeSearch("character");
    getData(`https://rickandmortyapi.com/api/character/?name=${value}`);
  };
  const getFoundLocation = (value) => {
    setTypeSearch("location");
    getData(`https://rickandmortyapi.com/api/location/?name=${value}`);
  };
  const getFoundEpisode = (value) => {
    setTypeSearch("episode");
    getData(`https://rickandmortyapi.com/api/episode/?name=${value}`);
  };
  const addCharacter = (newCharacter) => {
    localCharacters.push(newCharacter);
    setLocalStorage(localCharacters)
    getData(initialUrl);
  };
  useEffect(() => {
    getData(initialUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="table container">
      <Search
        getFoundCharacter={getFoundCharacter}
        getFoundLocation={getFoundLocation}
        getFoundEpisode={getFoundEpisode}
      />
      <br />
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <div className="row">
        {typeSearch === "character" ? (
          <div className="table__characters">
            <div
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="col col-4 table__characters--add"
            >
              <div className="table__characters--add-header">
                Portal License
              </div>
              <div className="table__characters--add-body">
                <div className="body-content">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-plus-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    <path
                      fillRule="evenodd"
                      d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                    />
                  </svg>
                  <br />
                  Add Character
                </div>
              </div>
            </div>
            {results.map((item, index) => (
              <div key={index} className="col col-4">
                <CharacterCard character={item} />
              </div>
            ))}
          </div>
        ) : null}
        {typeSearch === "location"
          ? results.map((item, index) => (
              <LocationCard key={index} location={item} />
            ))
          : null}
        {typeSearch === "episode"
          ? results.map((item, index) => (
              <EpisodeCard key={index} episode={item} />
            ))
          : null}
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog  modal-dialog-centered modalAddCharacter">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                New character
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <FormAddCharacter addCharacter={addCharacter} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
