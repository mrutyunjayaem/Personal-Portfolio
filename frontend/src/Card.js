import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name text-4xl">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom px-4 py-3">
        <p className="info">{props.content}</p>
      </div>
    </div>
  );
}

export default Card;