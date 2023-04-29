import React from "react"
import { IconButton } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
export default function Footer({handleClickOpen}){
 return(   
        <>
            <div id='footer'>
                <IconButton id='create' onClick={handleClickOpen}>
                    <AddCircleRoundedIcon color="primary" size='large'/>
                </IconButton>
            </div>
                
        </> 
    );
}