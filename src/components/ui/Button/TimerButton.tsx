/**
 * 2022.03.12
 * Timer.tsxからロジックとviewを分ける。
 * useStopWatchからstart, pause, resetなどの関数を受け取り、ボタンを押した時、オンクリックイベントで実行する。
 */

import React, { VFC, memo } from "react";
import { Button } from "@mui/material";
import { useStopwatch } from "react-timer-hook";

type Props = {
  text: string;
  start: () => void;
  // pause: () => void;
  // reset: () => void;
  // functionCheck: () => void;
};

export const TimerButton: VFC<Props> = memo((props) => {
  const { text, start } = props;
  // const { start, reset, pause } = useStopwatch({ autoStart: false });

  return (
    <div>
      <Button
        variant="contained"
        style={{ margin: "3px" }}
        color="primary"
        onClick={() => console.log('clicked')}
      >
        {text}
      </Button>
    </div>
  );
}
)