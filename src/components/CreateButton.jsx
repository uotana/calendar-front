import React from "react"
import { IconButton } from '@mui/material';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
export default function CreateButton({handleClickOpen}){
 return(   
        <IconButton id='create' 
            onClick={handleClickOpen}>
            <AddCircleRoundedIcon color="primary"
                sx={{width:60, height:60}}/>
        </IconButton>
    );
}