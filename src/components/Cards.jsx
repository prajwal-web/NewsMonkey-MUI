import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Cards({item}) {
  return (
    <>
    <Card sx={{ maxWidth: 345, height: '470px' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={item.urlToImage}
        title={item.content} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.author}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.description == "undefined" ? item.description : "President Trump has ramped up actions in the US-China trade war, with potential new tariffs. China, though muted in response, has ways to retaliate, including "}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {item.publishedAt}
        </Typography>
      </CardContent>
      <CardActions>

        <Button size="small"><a href={item.url} target='_blank' style={{ textDecoration: 'none' }}><Button sx={{ color: 'white', background: 'black' }}>Learn More</Button></a></Button>
      </CardActions>
    </Card></>
  );
}
