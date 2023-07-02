import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import MapIcon from '@mui/icons-material/Map';
import InfoIcon from '@mui/icons-material/Info';
export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const list = () => (
    <Box
      sx={{ width: { sm: '100vw', xs: '100vw', md: '40vw', lg: '20vw' } }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Home', 'History', 'Maps', 'About'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <HomeIcon />}
                {index === 1 && <NightsStayIcon />}
                {index === 2 && <MapIcon />}
                {index === 3 && <InfoIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
  const toggleDrawer = () => (event) => {
    setOpen(!open);
  };
  return (
    <AppBar
      position="static"
      sx={{
        background: 'white',
      }}
    >
      <Toolbar sx={{ margin: { lg: '0 5rem' } }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: 'black' }}
        >
          Farmsetu
        </Typography>
        <IconButton
          size="large"
          edge="start"
          color="black"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleDrawer()}
        >
          <MenuIcon />
          <Drawer anchor="right" open={open} onClose={toggleDrawer()}>
            {list()}
          </Drawer>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
