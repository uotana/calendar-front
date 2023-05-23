import AppBar from '@mui/material/AppBar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AccountMenu from './AccountMenu';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Typography, Toolbar, Stack } from '@mui/material';

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
          <Toolbar sx={{alignItems:'center', justifyContent:'space-between'}}>
            <Stack sx={{flexDirection:'row', alignItems:'center'}}>
              <IconButton 
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle.handleDrawerToggle}>
                  <MenuIcon sx={{width: 36, height:36}}/>
              </IconButton>
              <Typography sx={{padding: '2 1'}} variant='h4'>Agenda</Typography>
            </Stack>
            {auth && (
              <>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="account-settings"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle sx={{width:37, height:37}}/>
                </IconButton>
                <AccountMenu anchorEl={anchorEl} handleClose={handleClose}/>
              </>
            )}
        </Toolbar>
      </AppBar>
    );
}