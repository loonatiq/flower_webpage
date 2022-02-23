import Navbar from "../components/Navbar";
import "./Gallery.css";
import pics from "../gallery.json";
import PictureList from "../components/PictureList";

function Gallery() {
  return (
    <>
      <div className="bg-img-gallery">
        <Navbar />
        <div className="container">
          <PictureList pictures={pics} />
        </div>
      </div>
    </>
  );
}

export default Gallery;
