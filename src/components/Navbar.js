import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Container, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.svg';

const NavBar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export default function Navbar() {
  return (
    <Box>
      <AppBar position="static" color="transparent">
        <Container>
          <NavBar>
            <Box
              component="img"
              sx={{
                height: 60,
              }}
              alt="FieldX Logo"
              src={Logo}
            />
            <div>
              <Button component={Link} to="/login" variant="contained">
                Login
              </Button>
              <Button component={Link} to="/register" variant="contained">
                Register
              </Button>
            </div>
          </NavBar>
        </Container>
      </AppBar>
    </Box>
  );
}
