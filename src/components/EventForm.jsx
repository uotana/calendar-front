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

export default function EventForm({open, setOpen, setAllEvents}) {

  console.log('--------- event form ----------')
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  console.log('open: ' + open);
  console.log('setAllEvents: ' + setAllEvents);
  console.log('type of open: ' + typeof(open));
  console.log('setAllEvents: ' + typeof(setAllEvents));

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value); 

  const handleClose = () => {
    setOpen(false);
  };

  function createEvent(){
    console.log('-------- creating form -------')
    const data = { title, description};
    console.log(data);
    console.log('type of data: ' + typeof(data))
    useEffect(() => {
      async () => {
        const resp = await fetch("http://localhost:3000/events", {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: (data),
        });
        const events = await response.json();
        setAllEvents(events);
        handleClose();
      }
    })}

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
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
            margin="dense"
            id="name"
            label="title"
            type="title"
            fullWidth
            variant="standard"
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
            variant="standard"
            value={description}
            onChange={handleDescriptionChange}
          />
        </DialogContent>

        <DialogActions>
            <IconButton onClick={handleClose} color='gray' >
              Cancelar
            </IconButton>
          <div>
            <IconButton onClick={createEvent}  color='primary'>
              Criar evento
            </IconButton>
          </div>
        </DialogActions>
    </Dialog>
    </div>
  )}