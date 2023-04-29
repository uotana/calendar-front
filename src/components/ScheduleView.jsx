import {useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import EventCard from './event/EventCard'

export default function ScheduleView({allEvents, setAllEvents}) {
  console.log("---------- SCHEDULE ----------")

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
    .then(data => {setAllEvents(data);})
    .catch(error => {
      console.error('Erro ao criar evento:', error);
    });
  }, [setAllEvents]);

  return (
        <List sx={{width: 'fit-content',
                  display:'flex', 
                  flexDirection: 'row', 
                  flexWrap:'wrap', 
                  justifyContent:'center',
                  alignContent: 'center'}}>
          {allEvents.map((value)=>{
            console.log(value)
            return(
                <ListItem sx={{
                  maxWidth:300}}
                  key = {`event_${value['event_id']}`}>
                  <EventCard 
                    id={value['event_id']}
                    title={value['event_title']}
                    description={value['event_description']}
                    allEvents={allEvents}
                    setAllEvents={setAllEvents}/>
                </ListItem>
            );  
          })} 
        </List>
  ); 
}
