import { MAX_POINTS, COLORS, SIZES, WORDS } from "./Constants";

export const createWord = () => {
  // pick random color and size

  const color = COLORS[Math.floor(Math.random() * COLORS.length)];
  const word = WORDS[Math.floor(Math.random() * WORDS.length)];
  const size = SIZES[Math.floor(Math.random() * SIZES.length)];
  console.log("words description---------->", word, color);
  let x = Math.floor(Math.random() * 100);

  return {
    color,
    word,
    size,
    x,
    y: 0,
  };
};

export const removeWord = (words, index) => {
  const newWords = [...words];
  console.log("newWords--->", newWords);
  newWords.splice(index, 1);
  return newWords;
};
