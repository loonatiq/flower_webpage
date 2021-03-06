import { useCallback, useEffect, useRef, useState } from "react";
import Loading from "../components/Loading.js";
import "./IO.css";
function IO({ sort }) {
  const [isLoading, setIsLoading] = useState(false);
  const [pictures, setPictures] = useState([0]);
  const [items, setItems] = useState(0);
  const [ref, setRef] = useState();
  const imgRef = useRef(null);
  const sortRef = useRef(sort);
  const num = 4;
  //JSON에서 불러온 데이터 4개씩 배열에 넣기
  const getPictures = async () => {
    setIsLoading(true);
    const response = await fetch(`../../galleryFetch${sort}.json`);
    const json = await response.json();
    await new Promise((resolve) => setTimeout(resolve, 500));
    const slice = json.slice(items, items + num);
    setPictures((prev) => [...prev, ...slice]);
    // console.log(1);
    // console.log(imgRef.current);
    setIsLoading(false);
  };

  //배열 시작하는 위치 변경
  const increaseItem = useCallback(() => {
    setItems((items) => items + num);
  }, []);

  const oi = async ([entry]) => {
    //이전 ref값과 현재 ref값이 같을 시 배열 시작위치 유지
    setRef(imgRef.current);
    if (ref !== imgRef.current) {
      //이미지 인터섹션 중에만 배열 시작 위치 변경
      if (entry.isIntersecting) {
        // console.log(entry);
        increaseItem();
      }
    }
  };

  useEffect(() => {
    console.log(sortRef);
    console.log("sort:", sort);
    setItems(0);
    setPictures([0]);
  }, [sort]);

  //배열 시작 위치 변경시 새 데이터 불러오기
  useEffect(() => {
    getPictures();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  //인터섹션 옵저버 등록 및 해제
  useEffect(() => {
    const io = new IntersectionObserver(oi, { threshold: 1 });
    if (imgRef.current) {
      io.observe(imgRef.current);
    }
    //중복 값 가져오지 않도록 옵저버 연결 끊기
    return () => {
      //unobserve 사용 시 가져올 데이터가 없더라도 데이터 요청 시도
      io.disconnect();
      // io.unobserve(imgRef.current);
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
      <div className="loading">{isLoading ? <Loading /> : ""}</div>
    </>
  );
}

export default IO;
