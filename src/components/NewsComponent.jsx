import React from 'react'
import NewsItem from './NewsItem'
import { Grid2,Typography } from '@mui/material'

export default function NewsComponent() {
  return (
    <>
    <Typography textAlign='center' variant='h3' sx={{fontFamily:'cursive',marginBottom:'20px'}}>NewsMonkey - Top Headlines</Typography>
     <Grid2 container spacing={3}>
      <NewsItem/>
      </Grid2>
    </>
  )
}
