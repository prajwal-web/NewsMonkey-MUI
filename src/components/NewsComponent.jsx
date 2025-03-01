import React, { useState } from 'react'
import NewsItem from './NewsItem'
import { Grid2,Typography } from '@mui/material'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function NewsComponent() {
  const [category, setCategory] = useState("")
  console.log(category );
  
  return (
    <>
     <Box  display='flex' justifyContent='space-between'>
     <Typography textAlign='center' variant='h3' sx={{fontFamily:'cursive',marginBottom:'20px'}}>NewsMonkey - Top Headlines</Typography>
      <FormControl  sx={{width:200,marginRight:5}}>
        <InputLabel id="demo-simple-select-label"> Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Select By Category"
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
        >
          <MenuItem value="business">business</MenuItem>
          <MenuItem value="entertainment">Entertainment</MenuItem>
          <MenuItem value="sports">Sports</MenuItem>
        </Select>
      </FormControl>
    </Box>
   
     <Grid2 container spacing={3}>
      <NewsItem category={category}/>
      </Grid2>
    </>
  )
}
