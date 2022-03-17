import { Box } from "@mui/material";
import React, { memo, VFC } from "react";

export const Footer: VFC = memo(() => {
  return (
    <Box
      style={{
        backgroundColor: "#282828",
        height: "25px",
        paddingTop: "8px",
        bottom: "0px",
        marginTop: "50px",
        marginBottom: "0px",
        fontSize: "10px",
        position: "absolute",
        width: "100%",
      }}
    >
      <p>Copyright &copy; Kitsune inc. All Rights Researved</p>
    </Box>
  );
});
