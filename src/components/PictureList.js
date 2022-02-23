import "./PictureList.css";

function PictureList({ pictures }) {
  const picList = pictures.map((value) => {
    return (
      <div key={value.id} className="picture">
        <img src={value.PictureUrl}></img>
      </div>
    );
  });

  return <>{picList}</>;
}

export default PictureList;
