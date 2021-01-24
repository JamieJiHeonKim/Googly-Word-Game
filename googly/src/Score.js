import React, { useState, useEffect } from "react";
import ReactStoreIndicator from "react-score-indicator";
import { Button, ScoreFont } from "./Style";

import { ConfettiAnimation } from "./Confetti";

export const Score = ({ correct }) => {
  const [count, setCount] = useState(0);
  const [recycle, setRecycle] = useState(false);

  useEffect(() => {
    if (count === 100) {
      setRecycle(true);
    } else {
      setRecycle(false);
    }
    if (correct) {
      setCount(count + 5);
    }
  });

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
