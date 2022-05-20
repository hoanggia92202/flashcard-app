import { Link } from "react-router-dom";

const Card = ({ front, back }) => {
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
              <Link>
                <button type="button" className="btn btn-secondary btn-lg">
                  Edit
                </button>
              </Link>
              <button type="button" className="btn btn-danger btn-lg">
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
