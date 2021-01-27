import React, { useState, useEffect } from "react";
import ReactStoreIndicator from "react-score-indicator";
import { ScoreFont } from "./Style";

import { ConfettiAnimation } from "./Confetti";

export const Score = ({ change }) => {
  const [count, setCount] = useState(0);
  const [recycle, setRecycle] = useState(false);

  useEffect(() => {
    if (
      (count === 9) |
      (count === 19) |
      (count === 29) |
      (count === 39) |
      (count === 49) |
      (count === 59) |
      (count === 69) |
      (count === 79) |
      (count === 89) |
      (count === 99) 
    ) {
      setRecycle(true);
    } else {
      setRecycle(false);
    }

    if (change) {
      setCount(change);
    }
  }, [change]);

  return (
    <>
      <ConfettiAnimation run={true} recycle={recycle} />

      <ScoreFont>Score</ScoreFont>
      <ReactStoreIndicator
        value={count}
        maxValue={100}
        lineWidth={15}
        lineGap={3}
        fadedOpacity={20}
      />
    </>
  );
};
