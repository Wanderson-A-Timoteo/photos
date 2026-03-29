import { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Loader from "./Loader";
import Gallery from "./Gallery";

function Container({ searchTerm }) {

  const {images, loading, runSearch} = useContext(PhotoContext);

  useEffect(() => {
    console.log("Buscando por: ", searchTerm);
    runSearch(searchTerm);
  }, [searchTerm]);
  
  return (
    <div className="photo-container">
      {loading ? <Loader /> : <Gallery data={images} />}
    </div>
  );
}

export default Container;
