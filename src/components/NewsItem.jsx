import React, { useState } from "react";
import FetchNewsApi from "./FetchNewsApi";
import { Box, Button, CircularProgress,Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import Cards from "./Cards";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function NewsItem({category}) {
  const [page, setPage] = useState(1);
  const { data, loading } = FetchNewsApi(page,category); 

  return (
    <><Box>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh" width='100vw'>
          <CircularProgress />
        </Box>
      ) : (
        <Grid2 container spacing={2} justifyContent="center">
          {data.slice(0, 20).map((item, index) => (
            <Grid2 item xs={12} sm={6} md={3} key={index}>
              <Cards item={item} />
            </Grid2>
          ))}
        </Grid2>
      )}

      {!loading && <Box display="flex" justifyContent="center" alignItems="center" mt={3}>
        <Button
          variant="contained"
          sx={{ mx: 2, color: "white", background: "black" }}
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          disabled={page === 1}
          startIcon={<ArrowBackIcon />}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          sx={{ mx: 2, color: "white", background: "black" }}
          onClick={() => setPage((prev) => prev + 1)}
          disabled={page === 4}
          endIcon={<ArrowForwardIcon />}
        >
          Next
        </Button>
      </Box>}

    </Box></>
  );
}
