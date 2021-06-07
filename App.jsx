import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import "./style.css";

function App(title) {
  return (
    <div>
      <Header />
      <Footer />
      <Note />
      <Note />
      <Note />
    </div>
  );
}

export default App;
