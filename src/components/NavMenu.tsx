import { Box, Drawer } from '@mui/material';
import React from 'react';
import NavList from './NavList';

interface NavMenuProps {
  // anchor: JSX.Element;
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavMenu({ menuOpen, setMenuOpen }: NavMenuProps) {
  return (
    <Drawer anchor="left" open={menuOpen} onClick={() => { setMenuOpen(false) }}>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <NavList />
      </Box>
    </Drawer>
  );
}
