import React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react';
import {Box,Typography} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import SmallCalendar from './SmallCalendar';
import Divider from '@mui/material/Divider';
import Labels from './Labels';

export function Sidebar({handleDrawerToggle, mobileOpen, props}){
    const drawerWidth = 340;
    const { window } = props;
    const [checkedLabels, setCheckedLabels] = useState([]);


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


    return(
        <>
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
      </>
    );
}


Sidebar.propTypes = {
    window: PropTypes.func,
  };