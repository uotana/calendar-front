import {useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import EventCard from './event/EventCard'
import { getAllEvents } from '../services/event';


export default function ScheduleView({allEvents, setAllEvents, alert}) {
  console.log(allEvents);
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
    <>
        {alert && <h4> Submit Successful</h4>}
        <List sx={{width: 'fit-content',
                  display:'flex', 
                  flexDirection: 'row', 
                  flexWrap:'wrap', 
                  justifyContent:'center',
                  alignContent: 'center'}}>
          {allEvents.map((value)=>{
            return(
                <ListItem sx={{
                  maxWidth:300}}
                  key = {`${value['event_id']}`}>
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
    </>
  ); 
}
