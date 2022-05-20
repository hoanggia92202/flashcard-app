import React from "react";
import { createDeck } from "../utils/api";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Form = () => {
  const history = useHistory();
  const [deckName, setDeckName] = useState("");
  const [description, setDescription] = useState("");

  const onChangeHandler = (event) => {
    if (event.target.id === "name") {
      setDeckName(event.target.value);
    } else {
      setDescription(event.target.value);
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const newDeck = await createDeck({
      name: deckName,
      description: description,
    });
    history.push(`/decks/${newDeck.id}`);
  };

  return (
    <form onSubmit={(event) => submitHandler(event)}>
      <div className="form-group">
        <label htmlFor="name">Deck Name</label>
        <input
          onChange={onChangeHandler}
          value={deckName}
          type="text"
          className="form-control"
          id="name"
          placeholder="name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          onChange={onChangeHandler}
          value={description}
          className="form-control"
          id="description"
          rows="7"
          placeholder="Brief description of the deck"
        ></textarea>
      </div>
      <a href="/" id="cancel" name="cancel" className="btn btn-secondary">
        Cancel
      </a>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
