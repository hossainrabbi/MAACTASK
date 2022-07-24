import React, { useState } from 'react';
import {
  Avatar,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Box,
  AppBar,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.svg';
import AvatarImage from '../images/avatar.svg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CustomButton, NavBar } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { authAction } from '../store/auth-slice';

export default function Navbar() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const auth = useSelector((store) => store.auth);
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
      <AppBar
        position="static"
        color="transparent"
        sx={{
          boxShadow: 'none',
          borderBottom: '1px solid #C2D2EB',
        }}
      >
        <Container maxWidth="xl">
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
            {auth?.user?.user?.employeeId ? (
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
                    <span>{auth?.user?.user?.name}</span>
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
                      to="/geo/region-list"
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
            ) : (
              <div>
                <CustomButton
                  component={Link}
                  to="/login"
                  variant="contained"
                  bg="#0052CC"
                  padding="5px 20px"
                  style={{ marginRight: '5px' }}
                >
                  Login
                </CustomButton>
                <CustomButton
                  component={Link}
                  to="/register"
                  variant="outlined"
                  shadow="#0052CC"
                  textcolor="#0052CC"
                  padding="5px 20px"
                  style={{ marginLeft: '5px' }}
                >
                  Register
                </CustomButton>
              </div>
            )}
          </NavBar>
        </Container>
      </AppBar>
    </Box>
  );
}
