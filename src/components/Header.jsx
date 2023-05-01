import AppBar from '@mui/material/AppBar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AccountMenu from './AccountMenu';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Toolbar } from '@mui/material';

export default function Header(handleDrawerToggle){
    const drawerWidth = 340;
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
        <AppBar position="fixed"
        sx={{width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },}}>
        <Toolbar>
            <IconButton color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle.handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
              <MenuIcon />
            </IconButton>
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
                      <AccountCircle/>
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