import React, { useState } from "react";
import PlayGame from "./PlayGame";
import { Score } from "./Score";
import { ConfettiAnimation } from "./Confetti";
import { RecoilRoot } from "recoil";
import { Animation } from "./Animation";

export const GamePage = () => {
  return (
    <>
      <ConfettiAnimation run={false} />
      <Score />
      <PlayGame />
      <div>
        <RecoilRoot>{<Animation />}</RecoilRoot>
      </div>
    </>
  );
};
