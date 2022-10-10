import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const handlerOnChange = (event) => {
    setText(event.target.value);
  };
  const handlerUpClick = () => {
    setText(text.toUpperCase());
  };
  const handlerLoClick = () => {
    setText(text.toLowerCase());
  };
  const clearOnClick = () => {
    setText("");
  };
  const noOfWords=(word)=>{
    if (word[word.length-1]==="" || word[word.length-1]==="\n")
    {
      return word.length-1
    }
    else{
      return word.length
    }
  }
  const formatOnClick = () => {
    let updatingText = text.split(" ").length !== 0 ? text.split(" ") : null;
    let newText = updatingText
      .map((word) => {
        return (
          word.substring(0, 1).toUpperCase() +
          word.substring(1, word.length).toLowerCase()
        );
      })
      .join(" ");
    setText(newText);
  };
  return (
    <>
      <h1 className="py-3">{props.heading}</h1>
      <div className="mb-3 ">
        <textarea
          className={`form-control bg-${props.mode} text-${props.mode === "light" ? "dark" : "light"}`}
          value={text}
          onChange={handlerOnChange}
          id="myBox"
          rows="8"
        ></textarea>
        <div className="flex">
          <button
            className="btn btn-primary my-3 mx-2"
            onClick={handlerUpClick}
          >
            Convet To UpperCase
          </button>
          <button
            className="btn btn-primary my-3 mx-2"
            onClick={handlerLoClick}
          >
            Convet To LowerCase
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={clearOnClick}>
            Clear
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={formatOnClick}>
            Format
          </button>
        </div>
      </div>
      <div className="container-fluid py-3">
        <h2>Your Text Summery</h2>
        <p>
          {noOfWords(text.split(" "))} word and{" "}
          {text.length} characters
        </p>
        <p>
          {noOfWords(text.split(" ")) * 0.008} Minites to
          Read The Whole Sentence
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Write Something to Preview it here"}</p>
      </div>
    </>
  );
}
