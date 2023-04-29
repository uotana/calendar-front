import React from 'react';
import Card from '@mui/material/Card';
import { useState } from 'react';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider, IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import DeleteDialog from './DeleteDialog';

export default function EventCard({id, title, description, allEvents, setAllEvents}) {
  console.log("---------- CARD ----------")

  console.log(title, description)
  const [deleteCard, setDeleteCard] = useState(false);

  const handleDialogOpen= () => {
    setDeleteCard(!deleteCard);
  };

  return (
  <>
      <Card sx={{ alignItens:'center', width:380}}>
      <Box sx={{
        display: 'flex',
        flexDirection:'row', 
        justifyContent:'spaced-between',
        alignItems:'center', 
        padding:1,
        }}>
          <Box>
          <Typography variant='h5'>{title}</Typography>
          </Box>
        
        <IconButton onClick={handleDialogOpen}>
          <DeleteRoundedIcon />
        </IconButton>  
      </Box>
      <Divider/>
      <CardContent sx={{display:'flex', flexDirection:'column', minWidth:'3rem'}}>
          <Typography paragraph sx={{display:'flex', flexWrap:'wrap'}}>
            {description}
          </Typography>
      </CardContent>
    </Card>
    <DeleteDialog
      id={id} 
      deleteCard={deleteCard} 
      setDeleteCard={setDeleteCard} 
      handleDialogOpen={handleDialogOpen}
      allEvents={allEvents}
      setAllEvents={setAllEvents}/>
  </>
  );
}