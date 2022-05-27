import { Link } from "react-router-dom";
import { deleteCard } from "../utils/api";

const Card = ({ front, back, id, deckId, loadDeck }) => {
  const deleteButtonHandler = async () => {
    const confirm = window.confirm(
      "\nDelete this card ?\n\nYou will not be able to recover it."
    );

    if (confirm) {
      await deleteCard(id);
      /* reload the list of decks */
      loadDeck(deckId);
    }
  };
  return (
    <div className="row">
      <div className="col-sm-7">
        <div className="card">
          <div className="card-body d-flex flex-column">
            <div className="row d-flex justify-content-between">
              <p className="card-title col-6">{front}</p>
              <p className="card-title col-6">{back}</p>
            </div>
            <div className="align-self-end">
              <Link to={`/decks/${deckId}/cards/${id}/edit`}>
                <button type="button" className="btn btn-secondary btn-md">
                  Edit
                </button>
              </Link>
              <button
                onClick={deleteButtonHandler}
                type="button"
                className="btn btn-danger btn-md ml-2"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
