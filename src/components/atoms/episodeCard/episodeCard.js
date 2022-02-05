import "./episodeCard.scss";
import React, { useEffect, useState } from "react";
import EpisodeDetail from "../episodeDetail/episodeDetail";

export default function EpisodeCard(item) {
  const episode = item.episode;
  // eslint-disable-next-line no-unused-vars
  const [characters, setCharacters] = useState([]);
  const getCharactersData = async (items) => {
    await items.forEach((element) => {
      fetch(element)
        .then((response) => response.json())
        .then((data) => {
          characters.push(data);
          // setCharacters(characters)
        });
    });

    console.log(characters);
  };
  const getCharacters = (items) => {
    getCharactersData(items);
  };
  useEffect(() => {
    getCharactersData([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="row episodeCard">
      <div className="col col-2">{episode.episode}</div>
      <div className="col col-5">"{episode.name}"</div>
      <div className="col col-4">Air date: {episode.air_date}</div>
      <div
        className="col col-1"
        data-bs-toggle="modal"
        data-bs-target="#episodeModal"
      >
        <EpisodeDetail episode={episode} getCharacters={getCharacters} />
      </div>
      <div
        className="modal fade"
        id="episodeModal"
        aria-labelledby="episodeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="episodeModalLabel">
                {episode.name}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-auto me-auto">{episode.episode}</div>
                <div className="col-auto">Air date: {episode.air_date}</div>
                <div className="col">
                  {episode.characters?.length} character(s) appear in this
                  episode
                </div>
              </div>

              <div className="row">
                {characters.map((item, index) => (
                  <div key={index}>{item.name}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
