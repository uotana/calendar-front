import React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react';
import {Box,Typography} from '@mui/material';
import Drawer from '@mui/material/Drawer';
import SmallCalendar from './SmallCalendar';
import Divider from '@mui/material/Divider';
import Labels from './Labels';

export function Sidebar({handleDrawerToggle, mobileOpen, props}){
  const drawerXsScreen = '90%';
  const drawerSmScreen = '50%';
  const drawerMdScreen = '40%';
  const drawerLgScreen = '25%';
    const { window } = props;
    const [checkedLabels, setCheckedLabels] = useState([]);


  const drawer = (
    <>
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
    </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


    return(
      <>

            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{ keepMounted: true, }}
              sx={{
                display: { xs: 'block', lg: 'block'},
                '& .MuiDrawer-paper': { 
                  boxSizing: 'border-box', 
                  width: { xs: drawerXsScreen, sm: drawerSmScreen, md: drawerMdScreen, lg: drawerLgScreen  } },
              }}>
              {drawer}
            </Drawer>

            {/* <Drawer
              variant="permanent"
              sx={{
                display: { xs: 'none', lg: 'block' },
                '& .MuiDrawer-paper': { 
                  boxSizing: 'border-box', width: { xs: drawerSmallScreen, md: drawerMediumScreen, lg: drawerLargeScreen } },
              }}
              open>

              {drawer}
            </Drawer> */}
        
      </>
    );
}


Sidebar.propTypes = {
    window: PropTypes.func,
  };