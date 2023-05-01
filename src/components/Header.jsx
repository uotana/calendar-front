import AppBar from '@mui/material/AppBar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AccountMenu from './AccountMenu';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Typography, Toolbar, Box } from '@mui/material';

export default function Header(handleDrawerToggle){
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

    return(
        <AppBar position="fixed">
        <Toolbar>
            <IconButton color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle.handleDrawerToggle} sx={{ mr: 2, }}>
              <MenuIcon sx={{width: 35, height:35}}/>
            </IconButton>
            <Box sx={{display:'flex', justifyContent: 'center', alignItems:'Center'}}>
                <Typography sx={{padding: 2.5}} variant='h4'>Agenda</Typography>
            </Box>
            <div id='header'>
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
                      <AccountCircle sx={{width:35, height:35}}/>
                      </IconButton>
                      <AccountMenu anchorEl={anchorEl} handleClose={handleClose}/>
                  </div>
                  )}
              </div>
            </div>
        </Toolbar>
      </AppBar>
    );
}