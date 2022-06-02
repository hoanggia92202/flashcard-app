import React from "react";
import Navigation from "./Navigation";
import Deck from "./Deck";
import Cards from "./Cards";

const Main = () => {
  return (
    <>
      <Navigation />
      <Deck />
      <h2 className="mt-4">Cards</h2>
      <Cards />
    </>
  );
};

export default Main;
