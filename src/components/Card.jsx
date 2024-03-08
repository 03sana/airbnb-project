import React from "react";

export default function Card(props) {
  console.log(props.openSpots);
  return (
    <div className="card">
      {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
      <img
        src={`/images/${props.img}`}
        alt="Image of Katie Zaferes."
        className="card--image"
      />
      <div className="card--stats">
        <img src="/images/star.png" alt="Star icon" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <h2>{props.title}</h2>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
