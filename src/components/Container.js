import { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";

function Container({ searchTerm }) {

  const {images, loading, runSearch} = useContext(PhotoContext);

  useEffect(() => {
    console.log("Buscando por: ", searchTerm);
    runSearch(searchTerm);
  }, [searchTerm]);
  
  return (
    <div>
      {loading ? <p>Loading</p> : <p>Gallery</p>}
    </div>
  );
}

export default Container;
