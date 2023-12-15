import PropTypes from "prop-types";
import Star from "../assets/Star_fill.svg";
import EmptyStar from "../assets/Star.svg";

function Card({ image, popular, name, price, rating, votes, available }) {
  return (
    <div className="container h-full flex flex-col gap-2">
      <div className="relative ">
        <img src={image} alt="" className="rounded-lg w-full" />
        {popular && (
          <span className="badge text-label absolute top-2 left-2">
            Popular
          </span>
        )}
      </div>
      <div className="container flex justify-between">
        <h3 className="text-body text-pallete-light">{name}</h3>
        <div className="bg-pallete-green rounded-md ">
          <span className="text-price text-pallete-dark px-1 font-semibold">
            {price}
          </span>
        </div>
      </div>
      <div className="container flex justify-between">
        {rating ? (
          <div className="flex items-center">
            <img src={Star} alt="" width={24} height={24} />
            <h3 className="text-label text-pallete-light mx-1">{rating}</h3>
            <span className="text-label text-pallete-grey">{`(${votes} votes)`}</span>
          </div>
        ) : (
          <div className="flex items-center">
            <img src={EmptyStar} alt="" width={24} height={24} />
            <h3 className="text-label text-pallete-light ml-2 mr-1">
              {rating}
            </h3>
            <span className="text-label text-pallete-grey">{`(${votes} votes)`}</span>
          </div>
        )}

        {!available && (
          <div className="rounded-md">
            <span className="text-label text-pallete-red px-1 font-semibold">
              Sold Out
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
Card.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  rating: PropTypes.number || null,
  votes: PropTypes.number,
  popular: PropTypes.bool,
  available: PropTypes.bool,
};

export default Card;
