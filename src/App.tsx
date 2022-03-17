import React, { useState } from "react";
import { ThemeProvider, Typography, useTheme, Box } from "@mui/material";

import { Header } from "./components/page/Header";
import { AmountBeans } from "./components/ui/AmountBeans";
import "./App.css";
import { Timer } from "./components/ui/Timer";
import { ItemInput } from "./components/ui/ItemInput";
import { Footer } from "./components/page/Footer";
import Head from "./components/page/Head";
// import { SelectRatio } from "./components/ui/Select/SelectRatio";


function App() {
  const theme = useTheme();
  const [amount, setAmount] = useState<number>(0);
  const updateAmount = (props: number) => {
    setAmount(props);
  };

  return (
    <div className="App">
      <Head />
      <ThemeProvider theme={theme}>
        <Typography alignItems="center" variant="body1" minWidth={350} m={0}
        style={{backgroundColor: "#181818", color: "#ffffff", height: "100vh"}} >
          <Header />
          <Box display="flex" justify-content="center" alignItems="center">
            {/* <SelectRatio /> */}
            <ItemInput
              updateAmount={updateAmount}
              classname={"input-amount"}
            />
          </Box>
          <Box justify-content="center" alignItems="center" sx={{  mt: 3}}>
            <AmountBeans amount={amount} />
          </Box>
          <Box>
            <Timer />

          </Box>
          <Footer/>
        </Typography>
      </ThemeProvider>
    </div>
  );
}

export default App;
