// import { useState } from "react";
import Navbar from "../components/Navbar";
import "./FAQs.css";

function FAQs() {
  // const [faqToggle, setFaqToggle] = useState(false);

  // const faqToggleClick = (e) => {
  //   // setFaqToggle((faqToggle) => !faqToggle);
  //   console.log("toggleclicked!");
  //   console.log(e.target.children);
  // };

  return (
    <>
      <div className="bg-img-faq">
        <Navbar />
        {/* <div className="FAQcontainer">
          <ul className="questionList">
            <div className="question" onClick={faqToggleClick}>
              어떻게 하나요?
              <p className={"answerOff"}>이렇게 합니다.</p>
            </div>
          </ul>
        </div> */}
      </div>
    </>
  );
}

export default FAQs;
