import "./TopBtn.css";
function TopBtn({ getId }) {
  const handleTopClick = (e) => {
    console.log("topclicked!");
    // console.log(getId);
    // console.log(document.getElementById(getId).scrollTop);
    document.getElementById(getId).scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="topBtn" onClick={handleTopClick}>
        TOP
      </div>
    </>
  );
}

export default TopBtn;
