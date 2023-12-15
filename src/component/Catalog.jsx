import { useState, useEffect } from "react";
import Loader from "./Loader";
import Card from "./Card";

function Catalog() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((response) => response.json())
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  console.log(data)

  return (
    
    <div className="flex flex-wrap justify-center gap-4">
     {data.map((coffee) => <Card coffee={coffee} key={`coffee-${coffee.id}`} />)}
    </div>
  );
}

export default Catalog;
