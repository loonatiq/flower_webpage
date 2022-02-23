import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./routes/Contact";
import FAQs from "./routes/FAQs";
import Gallery from "./routes/Gallery";
import Home from "./routes/Home";
import Location from "./routes/Location";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/faqs" element={<FAQs />}></Route>
        <Route path="/location" element={<Location />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
