import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';
import IconButton from '@mui/material/Icon';

function deleteEvent(event_id){
    const requestOptions = {
        method: 'DELETE',
      }  
    fetch(`http://localhost:3000/events/${event_id}`, requestOptions)
    .then((response)=>{
        if(response.ok) return response.json();
    })
    .catch(error => {
        console.error('Erro ao criar evento:', error);
      });   
}

const handleDeleteEvent= (id, deleteCard,setDeleteCard, allEvents, setAllEvents) => {
    const index = allEvents.findIndex(obj => obj.event_id === id);
    if (index !== -1){
        deleteEvent(id);
        allEvents.splice(index, 1);
        setAllEvents(allEvents);
        setDeleteCard(!deleteCard);
    }  
    else{
        throw error;
    }
};

export default function DeleteDialog({id, deleteCard, setDeleteCard, handleDialogOpen, allEvents, setAllEvents}){
    return(
        <Dialog
            open={deleteCard}
            onClose={handleDialogOpen}>
            <DialogTitle>
                Apagar evento
            </DialogTitle>
            <DialogContent>
                Após deletar o evento, ele não poderá ser recuperado. Tem certeza que deseja deletar?
            </DialogContent>
            <DialogActions sx={{
                display:'flex', flexDirection:'row', justifyContent:'space-evenly'
                }}>
                    <IconButton onClick={handleDialogOpen} color='gray' >
                        Cancelar
                    </IconButton>
                    <IconButton onClick={()=>{handleDeleteEvent(id, deleteCard, setDeleteCard, allEvents,setAllEvents)}}  color='primary'>
                        Apagar
                    </IconButton>
            </DialogActions>
        </Dialog>
    );
}