import React, { VFC,memo } from "react";
import { Button } from "@mui/material";
// import { useButton } from '@mui/base/ButtonUnstyled';

type Props = {
  text: string;
  amount: number;
  classname: string;
  updateAmount: (arg: number) => void;
};

export const AmountButton: VFC<Props> = memo((props) => {
  const { text, updateAmount, amount,classname } = props;

  return (
    <div className={classname}>
    <Button variant="contained" style={{backgroundColor:"#344955",
    color:"#fff", marginTop: "32px", marginLeft: "16px"}} onClick = {(() => updateAmount(amount))} >
      {text}
    </Button>
    </div>
  );
})
