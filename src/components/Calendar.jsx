import * as React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AccountMenu from './AccountMenu';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SmallCalendar from './SmallCalendar';
import './styles.css';
import Labels from './Tags';
import ScheduleView from './ScheduleView';
import EventForm from './EventForm'
const drawerWidth = 340;

function Calendar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [checkedLabels, setCheckedLabels] = useState([]);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [formOpen, setFormOpen] = useState(true);
  const toggleForm = () =>{
    setFormOpen(!formOpen);
  }

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
    <div sx={{position:'relative'}}>
      <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed"
        sx={{width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },}}>
        <Toolbar>
            <IconButton color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
              <MenuIcon />
            </IconButton>
            <div id='header'>
              <div className='logo'>
                  <Typography variant="h4" noWrap component="div">Agenda</Typography>
              </div>
              <div className='toolbar-header'>
                  {auth && (
                  <div>
                      <IconButton
                      size="large"
                      aria-label="account of current user"
                      aria-controls="account-settings"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                      >
                      <AccountCircle/>
                      </IconButton>
                      <AccountMenu anchorEl={anchorEl} handleClose={handleClose}/>
                  </div>
                  )}
              </div>
            </div>
        </Toolbar>
      </AppBar>
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
        <ScheduleView/>
      </Box>
    </Box>
    
    <div id='footer'>
      <EventForm/>
    </div>
  </div>

  );
}

Calendar.propTypes = {
  window: PropTypes.func,
};

export default Calendar;