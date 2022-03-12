import { Box } from "@mui/material";
import React, { memo, VFC } from "react";

export const Header: VFC = memo(() => {
  return (
    <Box  style={{backgroundColor:"#344955", color:"#fff", height: "80px", paddingTop: "30px"}}>
      <h1>Good Time with Coffee</h1>
    </Box>
  );
});
