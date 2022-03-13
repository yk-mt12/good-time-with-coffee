import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const ratioList = [
  {
    key: 14,
    value: 14,
  },
  {
    key: 15,
    value:  15,
  },
  {
    key: 16,
    value:  16,
  },
  {
    key: 17,
    value:  17,
  },
  {
    key: 18,
    value:  18,
  },
];

export const SelectRatio = () => {
  // const [ratio, setRatio] = React.useState(ratioList[16]);

  // const handleChange = (event: SelectChangeEvent) => {
  //   setRatio(ratioList[event.target.value]);
  // };

  // return (
      // <FormControl>
      //   <InputLabel shrink id="demo-simple-select-placeholder-label-label">
      //     ratio
      //   </InputLabel>
      //   <Select
      //     labelId="demo-simple-select-placeholder-label-label"
      //     id="demo-simple-select-placeholder-label"
      //     value={ratio.key.toString()}
      //     onChange={handleChange}
      //   >
      //     {ratioList.map((r) =>(
      //       <MenuItem key={r.key} value={r.key}>
      //         {r.value}
      //       </MenuItem>
      //     ))}
      //   </Select>
      // </FormControl>
  // );
};
