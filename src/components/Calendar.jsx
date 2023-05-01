import React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react';
import {Box} from '@mui/material';

import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SmallCalendar from './SmallCalendar';
import ScheduleView from './ScheduleView';
import './styles.css';
import Tags from './Tags';
import CreateButton from './CreateButton';
import EventForm from './event/EventForm';
import Header from './Header';
const drawerWidth = 340;

export default function Calendar(props) {
  const { window } = props;

  const [mobileOpen, setMobileOpen] = useState(false);

  const [allEvents, setAllEvents] = useState([]);
  const [checkedLabels, setCheckedLabels] = useState([]);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    console.log('clicked open');
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
        <Tags checkedLabels={checkedLabels} setCheckedLabels={setCheckedLabels}/>
      </Box> 
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div sx={{position:'relative'}}>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header handleDrawerToggle={handleDrawerToggle}/>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="events"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{keepMounted: true,}}
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },}}
          open>
          
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)`}}}>
        <Toolbar />
        <ScheduleView allEvents={allEvents} setAllEvents={setAllEvents}/>
      </Box>
    </Box>
    <EventForm open={open} setOpen={setOpen} allEvents={allEvents} setAllEvents={setAllEvents}/>
    <CreateButton handleClickOpen={handleClickOpen}/>
  </div>
  );
}


Calendar.propTypes = {
  window: PropTypes.func,
};