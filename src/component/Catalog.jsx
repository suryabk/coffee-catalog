import { useState, useEffect } from "react";
import Loader from "./Loader";
import Card from "./Card";

function Catalog() {
  const [coffeeData, setCoffeeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [availableOnly, setAvailableOnly] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((res) => {
        setCoffeeData(res);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="my-4 flex flex-col gap-4">
      <div className="flex justify-center gap-4 text-label text-pallete-light">
        <button
          type="button"
          className={availableOnly ? "" : "button-active"}
          onClick={() => setAvailableOnly(false)}
        >
          All Product
        </button>
        <button
          type="button"
          className={availableOnly ? "button-active" : ""}
          onClick={() => setAvailableOnly(true)}
        >
          Available Now
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {loading && <Loader />}
        {coffeeData
          .filter((data) => (availableOnly ? data.available === true : data))
          .map((coffee) => (
            <Card coffee={coffee} key={`coffee-${coffee.id}`} />
          ))}
      </div>
    </div>
  );
}

export default Catalog;
