import React from 'react';
import {useState} from 'react';
import Toolbar from '@mui/material/Toolbar';
import ScheduleView from './ScheduleView';
import './styles.css';
import CreateButton from './CreateButton';
import EventForm from './event/EventForm';
import Header from './Header';
import {Sidebar} from './Sidebar';

export default function Calendar(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [allEvents, setAllEvents] = useState([]);
  const [alert, setAlert] = useState(false);
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Header handleDrawerToggle={handleDrawerToggle} />
      <Toolbar/>
      <div>
        <ScheduleView
          allEvents={allEvents} 
          setAllEvents={setAllEvents} 
          alert={alert} 
          setAlert={setAlert}
          />
        <Sidebar position="absolute"
          handleDrawerToggle={handleDrawerToggle} 
          mobileOpen={mobileOpen} 
          props={props}/>
      </div>
      <EventForm 
        open={open} 
        setOpen={setOpen} 
        allEvents={allEvents} 
        setAllEvents={setAllEvents} 
        setAlert={setAlert}
        alert={alert}/>
      <CreateButton handleClickOpen={handleClickOpen} />
    </>
  );
}