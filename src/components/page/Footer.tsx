import { Box } from "@mui/material";
import React, { memo, VFC } from "react";

export const Footer: VFC = memo(() => {
  return (
    <Box
      style={{
        backgroundColor: "#344955",
        color: "#fff",
        height: "60px",
        paddingTop: "18px",
        bottom: "0px",
        marginTop: "20px",
        marginBottom: "0px",
        fontSize: "15px",
        position: "absolute",
        width: "100%"
      }}
    >
<p>Copyright &copy; Kitsune inc. All Rights Researved</p>
    </Box>
  );
});
