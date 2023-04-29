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
import { useState, useEffect } from 'react';


async function createEvent(data){
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: (JSON.stringify(data)),
  }
  const response = await fetch('http://localhost:3000/events', requestOptions);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Erro ao criar evento');
  }
}

export default function EventForm({open, setOpen, allEvents, setAllEvents}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState(false);
  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value); 

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateEvent = () => {

    if(title){
      createEvent({ event_title: title, event_description: description })
        .then((data) => {
          console.log('Evento criado com sucesso:', data);
          const newEvents = [...allEvents, data];
          console.log(newEvents);
          setAllEvents(newEvents);
          setTitleError(false);
          setTitle('');
          setDescription('');
        })
        .catch((error) => {
          console.error(error);
          alert('Erro ao criar evento');
        });
        setOpen(false);
        return;
    }
    setTitleError(true);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-event"
      >
        <DialogTitle id="responsive-dialog-title">
          {'Adicione um evento'}
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            Insira abaixo os dados para criar o evento.
          </DialogContentText>
          <TextField
            autoFocus
            required
            error={titleError}
            margin="normal"
            id="name"
            label="title"
            type="title"
            fullWidth
            variant="outlined"
            size='Normal'
            value={title}
            onChange={handleTitleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="description"
            type="text"
            fullWidth
            variant="outlined"
            multiline
            value={description}
            onChange={handleDescriptionChange}
          />
        </DialogContent>

        <DialogActions>
            <IconButton onClick={handleClose} color='gray' >
              Cancelar
            </IconButton>
          
            <IconButton onClick={handleCreateEvent}  
              color='primary'>
              Criar evento
            </IconButton>
          
        </DialogActions>
    </Dialog>
    </div>
  )
}