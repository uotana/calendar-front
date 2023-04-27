import React from "react"
import EventForm from './EventForm';
import { IconButton } from '@mui/material';
import {useState} from 'react';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';

export default function Footer({setAllEvents}){

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        console.log('clicked open');
        setOpen(true);
      };

    return(   
        <>
            <div id='footer'>
                <IconButton id='create' onClick={handleClickOpen}>
                    <AddCircleRoundedIcon color="primary" size='large'/>
                </IconButton>
            </div>
            <EventForm open={open} setOpen={setOpen} setAllEvents={setAllEvents}/>    
        </> 
    );
}