import React from "react";

export default function Card() {
  return (
    <div className="card">
      <img
        src="/images/katie-zaferes.png"
        alt="Image of Katie Zaferes."
        className="card--image"
      />
      <div className="card--stats">
        <img src="/images/star.png" alt="Star icon" className="card--star" />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <h2>Life Lessons with Katie Zaferes</h2>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
}
