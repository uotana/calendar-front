// import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { useTheme } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';

export default function EventForm() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {setOpen(true);};
  const handleClose = () => {setOpen(false); };

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const createEvent = () =>{
    const data = { title, description};
  
    // useEffect(() => {
      fetch("http://localhost:3000/events", {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: (JSON.stringify(data)),
      })
      .then(response => {
        if (response.ok) {
          handleClose();
          return response.json();
        } else {
          console.error('Erro ao criar evento:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Erro ao criar evento:', error);
      });
    // }, []);
  }

  return (
    <div>
      <div>
      <Button onClick={handleClickOpen}>
        <AddCircleRoundedIcon color="primary"/>
      </Button>
      </div>
      
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
          {/* <Button autoFocus > */}
            <IconButton onClick={handleClose} color='gray' >
              Cancelar
            </IconButton>
          {/* </Button> */}
          <div>
          {/* <Button autoFocus> */}
            <IconButton onClick={createEvent}  color='primary'>
              Criar evento
            </IconButton>
          {/* </Button> */}
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}