import React, { useEffect, useState } from "react";
import { createDeck, updateDeck } from "../utils/api";
import { useHistory } from "react-router-dom";

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

  /* update user input field */
  const onChangeHandler = (event) => {
    if (event.target.id === "name") {
      setDeckName(event.target.value);
    } else {
      setDescription(event.target.value);
    }
  };

  const cancelButtonHandler = () => {
    history.goBack();
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    /* update an existing deck */
    if (title === "Edit Deck") {
      try {
        await updateDeck({
          name: deckName,
          description: description,
          id: id,
        });
        loadDeck(id);
        history.push(`/decks/${id}`);
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      /* create new deck */
      try {
        const newDeck = await createDeck({
          name: deckName,
          description: description,
        });
        history.push(`/decks/${newDeck.id}`);
      } catch (error) {
        console.log("Error", error);
      }
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

      <button
        onClick={() => cancelButtonHandler()}
        type="button"
        className="btn btn-secondary btn-md"
      >
        Cancel
      </button>
      <button type="submit" className="btn btn-primary btn-md ml-2">
        Submit
      </button>
    </form>
  );
};

export default Form;
