import React, { useState, useEffect } from "react";
export const LoadData = (children) => {
  const [word, setWord] = useState({ word: {} });
  useEffect(() => {
    const fetchWord = async () => {
      const response = await fetch(
        "https://random-words-with-pronunciation.p.rapidapi.com/word",
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "da94142ddemsh6346e32e7451b8bp19aa62jsn6480d070945c",
            "x-rapidapi-host": "random-words-with-pronunciation.p.rapidapi.com",
          },
        }
      );
      const data = await response.json();
      setWord(data.results[0]);
      console.log(word);
    };
    fetchWord();
  }, []);
  return null;
  //   return React.Children.map(children, (child) =>
  //     React.cloneElement(child, { word })
  //   );
};
