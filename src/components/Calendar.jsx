import React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react';
import {Box, Typography} from '@mui/material';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import SmallCalendar from './SmallCalendar';
import ScheduleView from './ScheduleView';
import './styles.css';
import Labels from './Labels';
import CreateButton from './CreateButton';
import EventForm from './event/EventForm';
import Header from './Header';

const drawerWidth = 340;

export default function Calendar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [allEvents, setAllEvents] = useState([]);
  const [checkedLabels, setCheckedLabels] = useState([]);
  const [alert, setAlert] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const drawer = (
    <Box>
      <Box sx={{display:'flex', justifyContent: 'center', alignItems:'Center'}}>
          <Typography sx={{padding: 2.5}} variant='h4'>Agenda</Typography>
      </Box>
      <Box>
        <SmallCalendar/>
      </Box>
      <Divider />
      <Box>
        <Labels checkedLabels={checkedLabels} setCheckedLabels={setCheckedLabels}/>
      </Box> 
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Header handleDrawerToggle={handleDrawerToggle} />
          <Box
            component="nav"
            sx={{width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          >
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{ keepMounted: true, }}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}>
              {drawer}
            </Drawer>

            <Drawer
              variant="permanent"
              sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
              }}
              open>

              {drawer}
            </Drawer>
          </Box>
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


Calendar.propTypes = {
  window: PropTypes.func,
};