import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';
import IconButton from '@mui/material/Icon';

function deleteEvent(event_id){
    console.log(' ----- delete event ----- ')
    const requestOptions = {
        method: 'DELETE',
      }  
    fetch(`http://localhost:3000/events/${event_id}`, requestOptions)
    .then((response)=>{
        console.log(response.json());
        if(response.ok) return response.json();
    })
    .catch(error => {
        console.error('Erro ao criar evento:', error);
      });   
}

const handleDeleteEvent= (id, deleteCard,setDeleteCard, allEvents, setAllEvents) => {
    console.log('handleDeleteEvent')
    console.log('typeof id:' + typeof(id))
    console.log('typeof allEvents: ' + typeof(allEvents))
    const index = allEvents.findIndex(obj => obj.event_id === id);
    console.log('index: ' + index)
    if (index !== -1){
        console.log('evento encontrado')
        console.log('index: ' + index)
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
    console.log('----- delete dialog -----')
    console.log('typeof id:' + typeof(id))
    
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