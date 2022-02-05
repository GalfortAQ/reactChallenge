import React, { useState } from "react";

const FormAddCharacter = ({ addCharacter }) => {
  const [newCharacter, setNewCharacter] = useState({
    id: 827,
    name: "",
    gender: "Male",
    status: "Alive",
    species: "",
    inputLocation: "",
    location: { name: "" },
    image: "",
    episode: [],
  });
  const handlerInputChange = (event) => {
    setNewCharacter({
      ...newCharacter,
      [event.target.name]: event.target.value,
    });
  };
  const handlerAddCharacter = (event) => {
    event.preventDefault();
    newCharacter.location.name = newCharacter.inputLocation;
    addCharacter(newCharacter);
    document.getElementById("addCharacterForm").reset();
  };
  return (
    <form id="addCharacterForm" onSubmit={handlerAddCharacter}>
      <div className="mb-3">
        <label className="col-form-label">Name:</label>
        <input
          placeholder="Enter name"
          type="text"
          className="form-control"
          name="name"
          onChange={handlerInputChange}
        />
      </div>
      <div className="mb-3">
        <label className="col-form-label">Gender:</label>
        <select
          className="form-select"
          aria-label="Default select example"
          name="gender"
          onChange={handlerInputChange}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="col-form-label">Species:</label>
        <input
          placeholder="Enter species"
          type="text"
          className="form-control"
          name="species"
          onChange={handlerInputChange}
        />
      </div>
      <div className="mb-3">
        <label className="col-form-label">Actual Location:</label>
        <input
          placeholder="Enter location"
          type="text"
          className="form-control"
          name="inputLocation"
          onChange={handlerInputChange}
        />
      </div>
      <div className="mb-3">
        <label className="col-form-label">Picture:</label>
        <div className="input-group flex-nowrap">
          <span className="input-group-text" id="addon-wrapping">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-link-45deg"
              viewBox="0 0 16 16"
            >
              <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
              <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
            </svg>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Picture URL"
            aria-label="Username"
            aria-describedby="addon-wrapping"
            name="image"
            onChange={handlerInputChange}
          />
        </div>
      </div>
      <div className="mb-3">
        <div className="row container justify-content-md-center">
          <button type="submit" className="btn btn-primary">
            Add Character
          </button>
        </div>
      </div>
    </form>
  );
};
export default FormAddCharacter;
