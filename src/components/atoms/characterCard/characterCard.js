import "./characterCard.scss";
import React, { useState, useEffect } from "react";

export default function CharacterCard(item) {
  const character = item.character;
  const [episode, setEpisode] = useState({});
  var randomEpisode = parseInt(
    Math.random() * (character.episode.length - 0) + 0,
    10
  );
  useEffect(() => {
    if (character.episode[randomEpisode] !== undefined) {
      fetch(character.episode[randomEpisode])
        .then((response) => response.json())
        .then((data) => {
          setEpisode(data);
        })
        .catch((error) => console.log(error));
    } else {
      setEpisode({ name: "Coming soon" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="card">
      <div className="card-header card__header">Portal License</div>
      <div className="card-body card__body">
        <div className="row justify-content-md-center card__body--episode">
          Episode: {episode.name}
        </div>
        <div className="row">
          <div className="col-4 card__body--img">
            <img
              width="100px"
              height="100px"
              alt="Not Found"
              src={character.image}
            ></img>
          </div>
          <div className="col-8 card__body--content">
            <div className="row justify-content-md-center ">
              <div className="card__body--content name">{character.name}</div>
              <div className="card__body--content location">
                {character.location.name}
              </div>
            </div>
            <div className="row">
              <div className="col col-4 card__body--content data">
                Status {character.status}
              </div>
              <div className="col col-4 card__body--content data">
                Species {character.species}
              </div>
              <div className="col col-4 card__body--content data">
                Gender {character.gender}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
