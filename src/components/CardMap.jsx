import React from "react";
import './CardMap.css';

function CardMap({ image, mode, mapName }) {
  return (
    <div className="server__map">
      <div className="server__map-image-w">
        <div className="server__map-image-overlay"></div>
        <img
          src={image}
          alt={mapName}
          className="server__map-image"
        />
      </div>
      <div className="server__map-mode">{mode}</div>
      <div className="server__map-mapn">{mapName}</div>
    </div>
  );
}

export default CardMap;
