// import React, { useState, Fragment } from "react";
import React from "react";

export const Word = (props) => {
  const { color, x, y, size, word, index, onClick } = props;
  // console.log("click --->,", click)
  const wordStyle = {
    backgroundColor: color,
    word: word,
    // height: `${size}px`,
    // width: `${size}px`,
    left: `${props.x}px`,
    top: `${props.y}px`,
  };

  return (
    <div className="word" style={wordStyle} onClick={() => onClick(index)}>
      {word}
    </div>
  );
};

export default Word;
