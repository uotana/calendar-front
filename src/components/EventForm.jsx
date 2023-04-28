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


function createEvent(data){
  console.log('-------- creating event -------')
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: (JSON.stringify(data)),
  }
  useEffect(() => {
    ('-------- use effect -------')
    fetch("http://localhost:3000/events", requestOptions)
    .then(async response => {
      response.json();
      console.log('fetch sem erro');
    })
    .catch(error => {
      this.setState({ errorMessage: error.toString() });
      console.error('There was an error!', error);
      }),[]}
    )
}
export default function EventForm({open, setOpen, setAllEvents}) {

  console.log('--------- event form ----------')
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value); 

  const handleClose = () => {
    setOpen(false);
  };

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
            required
            margin="dense"
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
          <div>
            <IconButton onClick={()=>{
              createEvent({event_title: title, event_description: description})}}  
              color='primary'>
              Criar evento
            </IconButton>

          </div>
        </DialogActions>
    </Dialog>
    </div>
  )
}