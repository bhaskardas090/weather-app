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
import HomeIcon from '@mui/icons-material/Home';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import MapIcon from '@mui/icons-material/Map';
import InfoIcon from '@mui/icons-material/Info';

import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const list = () => (
    <Box
      sx={{ width: { sm: '100vw', xs: '100vw', md: '40vw', lg: '20vw' } }}
      role="presentation"
      // onClick={toggleDrawer(false)}
      // onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          'Home',
          'History',
          'Precipitation',
          'Temperature',
          'GoogleMaps',
          'About',
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Link
              to={text.toLocaleLowerCase()}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 && <HomeIcon />}
                  {index === 1 && <NightsStayIcon />}
                  {index >= 2 && index <= 5 && <MapIcon />}
                  {index === 6 && <InfoIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
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
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Farmsetu
          </Link>
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
