import {useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import EventCard from './event/EventCard'
import { getAllEvents } from '../services/event';


export default function ScheduleView({allEvents, setAllEvents, alert}) {
  useEffect(()=>{
    let ignore = false;
    if(allEvents.length && !alert) {
      return;
    }
    getAllEvents()
    .then(data => {
      if(ignore){
        setAllEvents(data);
      }})
    .catch(error => {
      console.error('Erro:', error);
    });
    return ()=>{
      ignore = true;
    }
  },[allEvents, alert]);
  
  return (
        <List sx={{width: 'fit-content',
                  display:'flex', 
                  flexDirection: 'row', 
                  flexWrap:'wrap', 
                  justifyContent:'center',
                  alignContent: 'center'}}>
          {alert && <h2> Submit Successful</h2>}
          {allEvents.map((value)=>{
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
