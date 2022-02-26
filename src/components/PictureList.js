// import { useRef, useState } from "react";
// import "./PictureList.css";

// function PictureList({ pictures }) {
//   const [isLoading, setIsLoading] = useState(false);
//   const picRef = useRef();
//   const [picture, setPicture] = useState(pictures);
//   console.log(pictures);
//   console.log(picture);

//   const picList = pictures.map((value) => {
//     return (
//       <div key={value.id} className="picture">
//         <img src={value.PictureUrl} alt={value.id}></img>
//       </div>
//     );
//   });

//   return <>{picList}</>;
// }

// export default PictureList;
