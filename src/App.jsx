import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Card from "./components/Card.jsx";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />

      <Card />
    </div>
  );
}