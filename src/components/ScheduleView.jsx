import { useEffect } from 'react';
import List from '@mui/material/List';
import EventCard from './event/EventCard'
import { getAllEvents } from '../services/event';


export default function ScheduleView({allEvents, setAllEvents, alert, setAlert}) {
  
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
    })
    return ()=>{
      ignore = true;
    }
  },[allEvents, alert]);
  
  useEffect(() => {
    if(alert) {
      setTimeout(() => {
        setAlert(false);
      }, 8000)
    }
  }, [alert]);

  return (
    <>
        {alert && <h4>Successful</h4>}
        <List sx={{
          width: '100%',
          display:'flex', 
          flexDirection: 'row', 
          flexWrap:'wrap', 
          justifyContent:'center',
          alignContent: 'center',
          }}>
          {
            allEvents.map((value)=>{
              console.log('value: ');
              console.log(value);
                return(
                  <EventCard 
                    key={value['event_id']}
                    value={value}
                    allEvents={allEvents}
                    setAllEvents={setAllEvents}
                    alert={alert}
                    setAlert={setAlert}/>
                );  
          })} 
        </List>
    </>
  ); 
}
