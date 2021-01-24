import React, { useState } from "react";

export const WordList = ({ word, children }) => {
  let list_word = [{}];
  list_word.push({ word });
  return React.Children.map(children, (child) =>
    React.cloneElement(child, { list_word })
  );
};
