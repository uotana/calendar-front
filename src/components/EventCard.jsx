import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import Box from '@mui/material/Box';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function EventCard(value) {
  console.log("---------- CARD ----------")
  const eventItem = value.value
  console.log(eventItem['event_description'])

  return (
    <Card sx={{ alignItens:'center', width:380}}>
      <Box sx={{padding:1}}>
        <Typography variant='h5'>{eventItem['event_title']}</Typography>
      </Box>
      <Divider/>
      <CardContent sx={{display:'flex', flexDirection:'column', minWidth:'3rem'}}>
          <Typography paragraph sx={{display:'flex', flexWrap:'wrap'}}>
            {eventItem['event_description']}
          </Typography>
      </CardContent>
    </Card>
  );
}