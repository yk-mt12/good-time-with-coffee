import { Box } from "@mui/material";
import React, { memo, VFC } from "react";

export const Header: VFC = memo(() => {
  return (
    <Box  style={{backgroundColor:"#344955", color:"#fff", height: "50px", paddingTop: "5px", fontSize: "14px", fontWeight: "solid"}}>
      <h1>Good Time with Coffee</h1>
    </Box>
  );
});
