import Navbar from "../components/Navbar";
import "./Gallery.css";
// import pics from "../gallery.json";
import PictureList from "../components/PictureList";
import { useEffect, useState } from "react";

function Gallery() {
  const [images, setimages] = useState([]);
  const getImages = async () => {
    const response = await fetch("../../gallery.json");
    const json = await response.json();
    setimages(json);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <div className="bg-img-gallery">
        <Navbar />
        <div className="container">
          <PictureList pictures={images} />
        </div>
      </div>
    </>
  );
}

export default Gallery;
