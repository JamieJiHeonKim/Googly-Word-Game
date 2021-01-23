import React, { useState, useEffect } from "react";
import ReactStoreIndicator from "react-score-indicator";
import { Button, ScoreFont } from "./Style";

export const Score = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <ScoreFont>Score</ScoreFont>
      <ReactStoreIndicator
        value={count}
        maxValue={100}
        lineWidth={15}
        lineGap={3}
        fadedOpacity={20}
      />
      <Button buttonColor="green" onClick={() => setCount(count + 1)}>
        Click Bait
      </Button>
    </>
  );
};
