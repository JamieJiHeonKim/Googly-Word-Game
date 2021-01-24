import React, { useEffect, useCallback, props, renderTooltip } from "react";
import { useRecoilState } from "recoil";
// import { Button } from "./Style";
import { Button } from "react-bootstrap"
import { controlOptions } from "./Atom";

export const Control = ({ onClear }) => {
  const [controlState, setControlState] = useRecoilState(controlOptions);
  const { isRunning, speed } = controlState;

  const togglePause = () => {
    setControlState((oldState) => {
      return { ...oldState, isRunning: !oldState.isRunning };
    });
  };

  const onStart = useCallback(() => {
    setControlState({ ...controlState, isRunning: true });
  }, [controlState, setControlState]);

  const onChangeSpeed = useCallback(
    (event) => {
      setControlState({ ...controlState, speed: event.target.value });
    },
    [setControlState, controlState]
  );

  useEffect(() => {
    document.addEventListener("visibilitychange", () => {
      setControlState((oldState) => {
        return { ...oldState, isRunning: false };
      });
    });
    return () => document.removeEventListener("visibilitychange");
  }, [setControlState]);

  return (
    <div className="control">
      <div
        className="control__buttons"
        style={{ display: "flex", float: "right" }}
      >
        {isRunning ? (
          <Button variant="warning" size="lg" 
            onClick={togglePause}
            style={{ marginRight: 10 }}
          >
            PAUSE
          </Button>
        ) : (
          <Button variant="success" size="lg" 
            onClick={onStart}
            style={{ marginRight: 10 }}
          >
            START
          </Button>
        )}
        <Button variant="danger" size="lg" 
          onClick={onClear}
          style={{ marginRight: "auto" }}
        >
          CLEAR
        </Button>
      </div>
      <div className="control__speed" style={{ float: "left" }}>
        <h5 style={{ color: "DodgerBlue" }}>{`Speed : ${speed}`}</h5>
        <input
          type="range"
          min="1"
          max="10"
          value={speed}
          onChange={onChangeSpeed}
          style={{ marginLeft: "auto" }}
        />
        </div>
    </div>
  );
};

export default React.memo(Control);
