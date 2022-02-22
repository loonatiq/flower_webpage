import Navbar from "../components/Navbar";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="bg-img-home">
        <Navbar />
        <div className="sentences">
          <h1 className="sentence1">Make Your Day Better</h1>
          <h1 className="sentence2">For Your Precious Moment</h1>
        </div>
      </div>
    </>
  );
}

export default Home;
