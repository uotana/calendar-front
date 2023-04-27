import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import EventCard from './EventCard'

export default function ScheduleView() {
  console.log("---------- SCHEDULE ----------")
  const [eventItens, setEventItens] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/events", {
      method: 'GET',
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.error('Erro ao criar evento:', response.statusText);
      }
    })
    .then(data => {
      setEventItens(data);
    })
    .catch(error => {
      console.error('Erro ao criar evento:', error);
    });
  }, []);

  return (
        <List sx={{width: 'fit-content',
                  display:'flex', 
                  flexDirection: 'row', 
                  flexWrap:'wrap', 
                  justifyContent:'center',
                  alignContent: 'center'}}>
          {eventItens.map((value)=>{
            return(
                <ListItem sx={{
                  maxWidth:300}}
                  key = {value['event_id']}>
                  <EventCard value={value}/>
                </ListItem>
            );  
          })} 
        </List>
  ); 
}
