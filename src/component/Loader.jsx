function Loader() {
  return (
    <div className="my-4 flex flex-col gap-4 justify-center items-center pt-8 sm:pt-12">
      <div className="spinner"></div>
      <span className="text-pallete-yellow animate-pulse">Loading . . .</span>
    </div>
  );
}

export default Loader;
