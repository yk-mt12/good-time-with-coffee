import React, { VFC,memo } from "react";
import { Button } from "@mui/material";
// import { useButton } from '@mui/base/ButtonUnstyled';

type Props = {
  text: string;
  amount: number;
  classname: string;
  updateAmount: (arg: number) => void;
  errorCheck: () => void;
};

export const AmountButton: VFC<Props> = memo((props) => {
  const { text, updateAmount, amount,classname,errorCheck } = props;

  return (
    <div className={classname}>
    <Button variant="outlined" style={{backgroundColor:"#404040",
    color: "#ffffff",
    marginTop: "32px", marginLeft: "16px"}} onClick = {(() => {updateAmount(amount); errorCheck();})} >
      {text}
    </Button>
    </div>
  );
})
