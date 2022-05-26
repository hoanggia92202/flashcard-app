import React, { useEffect } from "react";
import { createDeck, updateDeck } from "../utils/api";
import { useHistory, Link } from "react-router-dom";
import { useState } from "react";

const Form = ({
  defaultDeckName = "",
  defaultDescription = "",
  title,
  id,
  loadDeck,
}) => {
  const history = useHistory();
  const [deckName, setDeckName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setDeckName(defaultDeckName);
    setDescription(defaultDescription);
  }, [defaultDeckName, defaultDescription]);

  const onChangeHandler = (event) => {
    if (event.target.id === "name") {
      setDeckName(event.target.value);
    } else {
      setDescription(event.target.value);
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (title === "Edit Deck") {
      await updateDeck({
        name: deckName,
        description: description,
        id: id,
      });
      //loadDeck(id);
      history.push(`/decks/${id}`);
    } else {
      const newDeck = await createDeck({
        name: deckName,
        description: description,
      });
      history.push(`/decks/${newDeck.id}`);
    }
  };

  return (
    <form onSubmit={(event) => submitHandler(event)}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          onChange={onChangeHandler}
          value={deckName}
          type="text"
          className="form-control"
          id="name"
          placeholder="Deck name"
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
      <Link to={`/decks/${id}`}>
        <button type="button" className="btn btn-secondary btn-lg">
          Cancel
        </button>
      </Link>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
