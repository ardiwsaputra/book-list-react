import Rater from "react-rater";
import FavoriteItem from "./FavoriteItem";

const BookItem = (props) => {
  return (
    <div className="column is-one-quarter">
      <div className="card">
        <div className="card-image">
          <figure className="image is-square">
            <img src={props.thumbnail} alt={props.title} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{props.title}</p>
              <p className="subtitle is-6">
                Authors:{" "}
                {props.author.map((item, index) =>
                  props.author.length - 1 === index ? item : item + ", "
                )}
              </p>
            </div>
          </div>
          <div className="content">
            <Rater total={5} rating={props.rating} interactive={false} />
          </div>
          <div className="content">
            <FavoriteItem
              id={props.id}
              is_favorite={props.is_favorite}
              onRefreshHandler={(value) => props.onRefreshHandler(value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
