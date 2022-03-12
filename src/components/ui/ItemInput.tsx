import React, { VFC, useState, memo } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";

import { AmountButton } from "./Button/AmountButton";
import { TextField } from "@mui/material";

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

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: Number(event.target.value) });
    };

  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap" }}
      m="auto"
      className={classname}
    >
      <div>
        <FormControl variant="standard" sx={{ mx: 1, mt: 3, width: "25ch" }}>
          <TextField
            value={values.amount}
            onChange={handleChange("amount")}
            label="Input the amount to drip. (ml)"
            variant="standard"
            style={{color: "#344955"}}
            focused
          />
        </FormControl>
      </div>
      <AmountButton
        classname={"add-amount"}
        text={"add"}
        updateAmount={updateAmount}
        amount={values.amount}
      />
    </Box>
  );
});
