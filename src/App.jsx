import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import NewsComponent from "./components/NewsComponent";

export default function App() {
  const [bool, setBool] = useState(false);

  return (
    <>
    <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' sx={{marginTop:'40px',color:'green'}}>
      {!bool && (
          <><Typography variant='h4'>Click here to see the news...</Typography><Button variant="contained" onClick={() => setBool(true)}>
            Click here
          </Button></>
      )}
      </Box>
      {bool && <NewsComponent />}
    </>
  );
}
