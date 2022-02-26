import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Loading from "../components/Loading.js";

function IO() {
  const [isLoading, setIsLoading] = useState(false);
  const [pictures, setPictures] = useState([0]);
  const [items, setItems] = useState(0);
  const imgRef = useRef(null);

  const getPictures = async () => {
    setIsLoading(true);
    const response = await fetch(`../../galleryFetch.json`);
    const json = await response.json();
    const slice = json.slice(items, items + 5);
    setPictures((prev) => [...prev, ...slice]);
    setIsLoading(false);
  };

  const increaseItem = useCallback(() => {
    setItems((items) => items + 5);
  }, []);

  const oi = async ([entry]) => {
    if (entry.isIntersecting) {
      increaseItem();
      console.log("oi", items);
    }
  };

  useEffect(() => {
    getPictures();
  }, [items]);

  useEffect(() => {
    const io = new IntersectionObserver(oi);
    if (imgRef.current) {
      io.observe(imgRef.current);
    }
    return () => {
      console.log("return");
      io.disconnect();
    };
  }, [pictures]);

  const pictureList = pictures.map((value, index) => {
    return (
      <div key={index} className="picture" ref={imgRef}>
        <img src={value.PictureUrl} alt={value.id}></img>
        <div>{items}</div>
      </div>
    );
  });

  return (
    <>
      {pictureList}
      <div>{isLoading ? <Loading /> : ""}</div>
    </>
  );
}

export default IO;
