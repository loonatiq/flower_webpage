import Navbar from "../components/Navbar";
import "./Gallery.css";
// import images from "../gallery.json";
// import PictureList from "../components/PictureList";
import IO from "./IO";

function Gallery() {
  return (
    <>
      <div className="bg-img-gallery">
        <Navbar />
        <div className="container">
          {/* <PictureList pictures={images} /> */}
          <IO />
        </div>
      </div>
    </>
  );
}

export default Gallery;
