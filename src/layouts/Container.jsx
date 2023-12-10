function Container() {
  return (
    <div className="bg-pallete-lightDark mx-auto relative px-12 pt-16 bottom-48 w-4/5 rounded-lg h-screen">
      <img
        src="/public/vector.svg"
        alt=""
        className="absolute left-1/2 top-5 z-0"
      />
      <div className="text-center m-auto sm:w-4/5 md:w-1/2 z-10 relative">
        <h1 className="text-heading z-10 sm:mb-2 md:mb-4">Our Collection</h1>
        <p className="text-body">
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
      </div>

      <div></div>
    </div>
  );
}

export default Container;
