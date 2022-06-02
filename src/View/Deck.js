import { Link, useHistory } from "react-router-dom";
import { deleteDeck, readDeck } from "../utils/api";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Deck = () => {
  const history = useHistory();
  const { deckId } = useParams();
  const [deckInfo, setDeckInfo] = useState({});

  // load a deck
  useEffect(() => {
    async function loadDeck() {
      const deck = await readDeck(deckId);
      setDeckInfo({ ...deck });
    }
    loadDeck();
  }, [deckId]);

  // delete deck
  const deleteButtonHandler = async () => {
    const confirm = window.confirm(
      "\nDelete this deck ?\n\nYou will not be able to recover it."
    );
    if (confirm) {
      try {
        await deleteDeck(deckInfo.id);
        history.push("/");
      } catch (error) {
        console.log("Error", error);
      }
    }
  };

  return (
    <div className="row">
      <div className="col-sm-7">
        <div className="card">
          <div className="card-body  ">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">{deckInfo.name}</h5>
            </div>
            <p className="card-text">{deckInfo.description}</p>
            <div className="row">
              <div className="col-9">
                <Link to={`/decks/${deckInfo.id}/edit`}>
                  <button type="button" className="btn btn-secondary btn-md">
                    Edit
                  </button>
                </Link>
                <Link to={`/decks/${deckInfo.id}/study`}>
                  <button type="button" className="btn btn-primary btn-md ml-2">
                    Study
                  </button>
                </Link>
                <Link to={`/decks/${deckInfo.id}/cards/new`}>
                  <button type="button" className="btn btn-primary btn-md ml-2">
                    Add Cards
                  </button>
                </Link>
              </div>
              <div className="col-3">
                <button
                  onClick={deleteButtonHandler}
                  type="button"
                  className="btn btn-danger btn-md"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deck;
