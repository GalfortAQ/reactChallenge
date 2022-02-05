import "./locationCard.scss";
import React from "react";

export default function LocationCard(item) {
  const location = item.location;
  return (
    <div className="col col-4">
      <div className="locationCard">
        <div className="locationCard__body">
          <div className="row justify-content-md-center locationCard__body--name">
            {location.name}
          </div>
          <div className="row locationCard__body--data">
            <div className="col col-4">Type: {location.type}</div>
            <div className="col col-4">Dimension: {location.dimension}</div>
            <div className="col col-4">Residents {location.residents?.length}</div>
          </div>
          <div className="row justify-content-md-center locationCard__body--created">
            Created: {location.created}
          </div>
        </div>
      </div>
    </div>
  );
}
