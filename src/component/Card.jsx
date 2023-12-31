import { useState } from "react";
import PropTypes from "prop-types";
import Star from "../assets/Star_fill.svg";
import EmptyStar from "../assets/Star.svg";

function Card({ coffee }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="container h-full flex flex-col gap-2 sm:w-1/4">
      <div className="relative ">
        {/* skeleton image appears when the image has not fully rendered*/}
        {!imageLoaded && (
          <img
            className={`rounded-lg w-full bg-pallete-grey animate-pulse ${
              imageLoaded ? "hidden invisible" : "block"
            }`}
            height={48}
            width={64}
          />
        )}

        {/* actual image */}
        <img
          src={coffee.image}
          alt=""
          className={`rounded-lg w-full ${imageLoaded ? "block" : "hidden"}`}
          onLoad={handleImageLoad}
        />
        {coffee.popular && (
          <span className="badge text-label absolute top-2 left-2">
            Popular
          </span>
        )}
      </div>
      <div className="container flex justify-between">
        <h3 className="text-body text-pallete-light">{coffee.name}</h3>
        <div className="bg-pallete-green rounded-md ">
          <span className="text-price text-pallete-dark px-1 font-semibold">
            {coffee.price}
          </span>
        </div>
      </div>
      <div className="container flex justify-between">
        {coffee.rating ? (
          <div className="flex items-center">
            <img src={Star} alt="" width={24} height={24} />
            <h3 className="text-label text-pallete-light mx-1">
              {coffee.rating}
            </h3>
            <span className="text-label text-pallete-grey">{`(${coffee.votes} votes)`}</span>
          </div>
        ) : (
          <div className="flex items-center">
            <img src={EmptyStar} alt="" width={24} height={24} />
            <h3 className="text-label text-pallete-light ml-2 mr-1">
              {coffee.rating}
            </h3>
            <span className="text-label text-pallete-grey">{`(${coffee.votes} votes)`}</span>
          </div>
        )}

        {!coffee.available && (
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
  coffee: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    rating: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.oneOf([null]),
    ]),
    votes: PropTypes.number,
    popular: PropTypes.bool,
    available: PropTypes.bool,
  }),
};

export default Card;
