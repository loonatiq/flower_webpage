import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TopBtn from "../components/TopBtn";
import "./Gallery.css";
// import images from "../gallery.json";
// import PictureList from "../components/PictureList";
import IO from "./IO";

function Gallery() {
  const [sort, setSort] = useState("bouquet");
  const [title, setTitle] = useState("꽃다발");
  useEffect(() => {
    // console.log(sort);
  }, [sort]);

  const handleBtnClick = (e) => {
    setSort(e.target.value);
    setTitle(e.target.name);
  };

  // const galleryID = document.getElementById("gallery");

  return (
    <>
      <div id="gallery" className="bg-img-gallery">
        <Navbar />
        <div className="btns">
          <button name="꽃다발" value="bouquet" onClick={handleBtnClick}>
            꽃다발
          </button>
          <button name="꽃바구니" value="basket" onClick={handleBtnClick}>
            꽃바구니
          </button>
          <button
            name="조화, 비누꽃"
            value="artificial"
            onClick={handleBtnClick}
          >
            조화, 비누꽃
          </button>
          <button name="프리저브드" value="preserved" onClick={handleBtnClick}>
            프리저브드
          </button>
        </div>
        <h3 className="title">{title}</h3>
        <div className="container">
          {/* <PictureList pictures={images} /> */}
          <IO sort={sort} />
        </div>
        <TopBtn getId={"gallery"} />
      </div>
    </>
  );
}

export default Gallery;
