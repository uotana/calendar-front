import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';
import IconButton from '@mui/material/Icon';
import { deleteEvent } from '../../services/event';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const handleDeleteEvent= (id, deleteCard,setDeleteCard, allEvents, setAllEvents) => {
    const index = allEvents.findIndex(obj => obj.event_id === id);
    if (index !== -1){
        deleteEvent(id);
        allEvents.splice(index, 1);
        setAllEvents([...allEvents]);
        setDeleteCard(!deleteCard);
    }  
    else{
        throw error;
    }
};

export default function DeleteDialog({id, deleteCard, setDeleteCard, handleDialogOpen, allEvents, setAllEvents}){
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    return(
        <Dialog
            fullScreen={fullScreen}
            open={deleteCard}
            onClose={handleDialogOpen}>
            <DialogTitle id="responsive-dialog-title">
                Apagar evento
            </DialogTitle>
            <DialogContent>
                Após deletar o evento, ele não poderá ser recuperado. Tem certeza que deseja deletar?
            </DialogContent>
            <DialogActions>
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