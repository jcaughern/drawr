import { AppBar, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import NavMenu from './NavMenu';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <AppBar>
      <Toolbar variant="regular">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        >
          <MenuIcon />
        </IconButton>
        <NavMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </Toolbar>
    </AppBar>
  );
}
