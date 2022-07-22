import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  styled,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.svg';
import AvatarImage from '../images/avatar.svg';
import { authAction } from '../store/auth-slice';
import { useDispatch } from 'react-redux';

const NavBar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export default function GeoNavbar() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const dispatch = useDispatch();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    handleCloseUserMenu();
    localStorage.removeItem('authToken');
    dispatch(authAction.logoutUser());
  };

  return (
    <Box>
      <AppBar position="static" color="transparent">
        <NavBar>
          <Box
            component={Link}
            to="/"
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              sx={{
                height: 60,
              }}
              alt="FieldX Logo"
              src={Logo}
            />
          </Box>
          <Box sx={{ flexGrow: 0 }} disableGutters>
            <IconButton onClick={handleOpenUserMenu} disableRipple>
              <Avatar alt="Avatar" src={AvatarImage} />
              <Typography
                variant="subtitle2"
                component="span"
                marginLeft="2px"
                alignItems="center"
                display="flex"
              >
                <span>
                  {JSON.parse(localStorage.getItem('authToken'))?.user?.name}
                </span>
                <ExpandMoreIcon />
              </Typography>
            </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography
                  textAlign="center"
                  variant="p"
                  component={Link}
                  to="/geo"
                  style={{ textDecoration: 'none', color: '#444' }}
                >
                  Dashboard
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </NavBar>
      </AppBar>
    </Box>
  );
}
