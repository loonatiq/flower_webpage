import { useCallback, useEffect, useRef, useState } from "react";
import Loading from "../components/Loading.js";
import "./IO.css";
function IO() {
  const [isLoading, setIsLoading] = useState(false);
  const [pictures, setPictures] = useState([0]);
  const [items, setItems] = useState(0);
  const imgRef = useRef(null);

  const getPictures = async () => {
    setIsLoading(true);
    const response = await fetch(`../../galleryFetch.json`);
    const json = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const slice = json.slice(items, items + 5);
    setPictures((prev) => [...prev, ...slice]);
    setIsLoading(false);
  };

  const increaseItem = useCallback(() => {
    setItems((items) => items + 5);
  }, []);

  const oi = async ([entry], observer) => {
    console.log(isLoading);
    if (entry.isIntersecting) {
      increaseItem();
      observer.unobserve(imgRef.current);
      console.log("oi", items);
    }
  };

  useEffect(() => {
    getPictures();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  useEffect(() => {
    const io = new IntersectionObserver(oi, { threshold: 1 });
    if (imgRef.current) {
      io.observe(imgRef.current);
    }
    return () => {
      console.log("return");
      io.disconnect();
      console.log(isLoading);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pictures]);

  const pictureList = pictures.map((value, index) => {
    return (
      <div key={index} className="picture" ref={imgRef}>
        <img src={value.PictureUrl} alt={value.id}></img>
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
