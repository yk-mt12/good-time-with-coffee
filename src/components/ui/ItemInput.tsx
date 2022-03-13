import React, { VFC, useState, memo, useRef } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";

import { AmountButton } from "./Button/AmountButton";
import { textFieldStyle } from "../assets/textFieldStyle";

type Props = {
  updateAmount: (arg: number) => void;
  classname: string;
};

interface State {
  amount: number;
}

export const ItemInput: VFC<Props> = memo((props) => {
  const { updateAmount, classname } = props;
  const [values, setValues] = useState<State>({
    amount: 0,
  });
  // const classes = useStyles();
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputError, setInputError] = useState(false);

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: Number(event.target.value) });
    };

  const errorCheck = () => {
    if (inputRef.current) {
      const ref = inputRef.current;
      if (!ref.validity.valid) {
        setInputError(true);
      } else {
        setInputError(false);
      }
      console.log(values);
    }
  };

  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap" }}
      m="auto"
      className={classname}
    >
      <div>
        <FormControl
          variant="standard"
          sx={{ mx: 1, mt: 3, width: "25ch", color: "ffffff" }}
        >
          <TextField
            error={inputError}
            defaultValue=""
            placeholder="0"
            onChange={
              handleChange("amount")
            }
            label="Input the amount to drip. (ml)"
            variant="standard"
            focused
            sx={textFieldStyle}
            inputProps={{ maxLength: 4, pattern: "[1-9][0-9]*" }}
            inputRef={inputRef}
            helperText={inputRef?.current?.validationMessage}
          />
        </FormControl>
      </div>
      <AmountButton
        classname={"add-amount"}
        text={"add"}
        updateAmount={updateAmount}
        errorCheck={errorCheck}
        amount={values.amount}
      />
    </Box>
  );
});
