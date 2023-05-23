import React from 'react';
import Card from '@mui/material/Card';
import { useState } from 'react';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider, IconButton, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import ConfirmDelete from './ConfirmDelete';
import EditEvent from './EditEvent';
import ListItem from '@mui/material/ListItem';

export default function EventCard({
  value,
  allEvents, 
  setAllEvents, 
  alert, 
  setAlert }) {

    console.log('event card value: ', value);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [editCard, setEditCard] = useState(false);

  const handleConfirmDelete = () => {
    setConfirmDelete(!confirmDelete);
  };
  const handleEdit = () => {
    setEditCard(!editCard);
  }

  return (
    <ListItem>
      <Card sx={{ alignItens:'center', width: '100%'}}>
        <Box sx={{
          display: 'flex',
          flexDirection:'row', 
          justifyContent:'space-between',
          alignItems:'center', 
          padding:1,
          maxWidth: '100%'
          }}>
          
          <Typography variant='h5'>{value['event_title']}</Typography>
          <Stack flexDirection={'row'}>
            <IconButton onClick={handleEdit}>
              <EditRoundedIcon />
            </IconButton>  
            <IconButton onClick={handleConfirmDelete}>
              <DeleteRoundedIcon />
            </IconButton>
          </Stack>
        </Box>
        <Divider/>
        <CardContent sx={{display:'flex', flexDirection:'column', maxWidth: '100%'}}>
            <Typography paragraph sx={{display:'flex', flexWrap:'wrap', maxWidth: '100%'}}>
              {value['event_description']}
            </Typography>
        </CardContent>
      </Card>
      <ConfirmDelete
        id={value['event_id']} 
        deleteCard={confirmDelete} 
        setDeleteCard={setConfirmDelete} 
        handleDialogOpen={handleConfirmDelete}
        allEvents={allEvents}
        setAllEvents={setAllEvents}/>
      <EditEvent
        value={value}
        open={editCard} 
        setOpen={setEditCard} 
        allEvents={allEvents} 
        setAllEvents={setAllEvents}
        alert={alert} 
        setAlert={setAlert} 
        />
    </ListItem>
  );
}