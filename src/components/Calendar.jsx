import React from 'react';
import {useState} from 'react';
import {Box, Typography} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import ScheduleView from './ScheduleView';
import './styles.css';
import CreateButton from './CreateButton';
import EventForm from './event/EventForm';
import Header from './Header';
import {Sidebar} from './Sidebar';
const drawerWidth = 340;

export default function Calendar(props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [allEvents, setAllEvents] = useState([]);
  const [alert, setAlert] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Header handleDrawerToggle={handleDrawerToggle} />
        <Sidebar handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} props={props}/>
        <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
            <Toolbar />
            <ScheduleView allEvents={allEvents} setAllEvents={setAllEvents} alert={alert}/>
        </Box>
      </Box>
      <EventForm 
        open={open} 
        setOpen={setOpen} 
        allEvents={allEvents} 
        setAllEvents={setAllEvents} 
        setAlert={setAlert}/>
      <CreateButton handleClickOpen={handleClickOpen} />
    </>
  );
}