import React, { useState } from "react";

import PlayGame from "./PlayGame";
import { Score } from "./Score";
import { ConfettiAnimation } from "./Confetti";
import { RecoilRoot } from "recoil";
import { Animation } from "./Animation";
import { LoadData } from "./LoadData";
import Speech from "react-speech";

export const GamePage = () => {
  return (
    <>
      <ConfettiAnimation run={false} />
      <div>
        <RecoilRoot>{<Animation />}</RecoilRoot>
      </div>
    
    </>
  );
};
