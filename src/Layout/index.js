import React from "react";
import Header from "./Header";
import Deck from "./Deck";
import NotFound from "./NotFound";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Deck />
      </div>
    </>
  );
}

export default Layout;
