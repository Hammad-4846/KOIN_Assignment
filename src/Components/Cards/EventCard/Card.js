import React from "react";

import "./Card.scss";

function Card({ Icon, title, description , bgColor}) {
  return (
    <div className="EventCard">
      <div className="icon" style={{backgroundColor : bgColor}}>
        <i className={`fa-solid ${Icon}`}></i>
      </div>
      <div className="detail">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
