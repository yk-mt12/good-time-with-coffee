import { Button, ButtonGroup } from "@mui/material";
import React, { memo } from "react";

import { useStopwatch } from "react-timer-hook";
// import { TimerButton } from "./Button/TimerButton";

export const Timer = memo(() => {
  const { seconds, minutes, isRunning, start, reset, pause } = useStopwatch({
    autoStart: false,
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "24px", marginTop: "24px" }}>Drip timer</h1>
      <div style={{ fontSize: "48px" }}>
        <span>{minutes}</span>.<span>{seconds}</span>
      </div>
      <p style={{ margin: "8px 0" }}>
        {isRunning ? "Dripping." : "Don't you drip?"}
      </p>

      <ButtonGroup variant="outlined">
        <Button
          style={{ backgroundColor: "#404040", color: "#ffffff" }}
          onClick={start}
        >
          Start
        </Button>
        <Button
          onClick={pause}
          style={{ backgroundColor: "#404040", color: "#ffffff" }}
        >
          Pause
        </Button>
        <Button
          style={{ backgroundColor: "#404040", color: "#ffffff" }}
          onClick={
            reset as unknown as React.MouseEventHandler<HTMLButtonElement>
          }
        >
          Reset
        </Button>
      </ButtonGroup>
    </div>
  );
});
