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
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <p className="card-title">{front}</p>
              <p className="card-title">{back}</p>
            </div>
            <div>
              <Link to={`/decks/${deckId}/cards/${id}/edit`}>
                <button type="button" className="btn btn-secondary btn-lg">
                  Edit
                </button>
              </Link>
              <button
                onClick={deleteButtonHandler}
                type="button"
                className="btn btn-danger btn-lg"
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
