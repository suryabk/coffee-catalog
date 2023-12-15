import Catalog from "./Catalog";
import Content from "./Content";

function Container() {
  return (
    <div className="bg-pallete-lightDark mx-auto relative px-4 sm:px-8 pt-16 pb-24 bottom-48 w-5/6 rounded-lg h-full overflow-x-hidden">
      <Content />
      <Catalog />
    </div>
  );
}

export default Container;
