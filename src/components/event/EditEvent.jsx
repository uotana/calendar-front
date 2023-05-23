import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { editEvent } from '../../services/event';

export default function EditEvent({
  value,
  open, 
  setOpen, 
  allEvents, 
  setAllEvents, 
  alert, 
  setAlert }) {
  
    console.log('event edit value: ', value);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [newTitle, setNewTitle] = useState(value['event_title']);
  const [newDescription, setNewDescription] = useState(value['event_description']);
  const [titleError, setTitleError] = useState(false);
  const handleTitleChange = (event) => setNewTitle(event.target.value);
  const handleDescriptionChange = (event) => setNewDescription(event.target.value); 

  const handleClose = () => {
    setOpen(false);
  };
  const handleEditEvent = () => {
    if(newTitle){
      editEvent(value['event_id'], newTitle, newDescription)
      .then((data) => {
        if(data){
          const updatedEventIndex = allEvents.findIndex(event => event.event_id === data[0].event_id);
        if (updatedEventIndex !== -1) {
          const updatedEvents = [...allEvents];
          updatedEvents[updatedEventIndex] = data[0]; 
          setAllEvents(updatedEvents);
          setAlert(true);
          setOpen(false);
        }
      }})
      .catch((error)=> {
        console.error('Error:', error);
      })
    
    }
    setTitleError(true);
  };

  return (
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-event"
      >
        <DialogTitle id="responsive-dialog-title">
          {'Editar evento'}
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            Altere os dados do evento.
          </DialogContentText>
          <TextField
            autoFocus
            required
            error={titleError}
            margin="normal"
            id="name"
            label="Título"
            type="title"
            fullWidth
            variant="outlined"
            size='Normal'
            value={newTitle}
            onChange={handleTitleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Descrição"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            value={newDescription}
            onChange={handleDescriptionChange}
          />
        </DialogContent>

        <DialogActions>
            <IconButton onClick={handleClose} color='gray' >
              Cancelar
            </IconButton>
            <IconButton onClick={handleEditEvent}  
              color='primary'>
              Editar evento
            </IconButton>
        </DialogActions>
    </Dialog>
  )
}