import { Box, Typography } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import GeoNavbar from './GeoNavbar';
import { useState } from 'react';
import { MenuIcon, NavBoxItem, NavLinkItem, Sidebar } from './styles';
import { sidebarData } from '../data';
import LocationIcon from '../images/location.svg';

export default function GeoInformationLayout() {
  const [open, setOpen] = useState(true);
  const [onCreateRegion, setOnCreateRegion] = useState(false);
  const [onCreateArea, setOnCreateArea] = useState(false);

  const handleSidebarItem = (itemLink) => {
    if (itemLink === '/geo/region-list') {
      setOnCreateRegion(false);
    }

    if (itemLink === '/geo/area-list') {
      setOnCreateArea(false);
    }
  };

  const handleOpenRegionForm = () => {
    setOnCreateRegion(true);
  };

  const handleOpenAreaForm = () => {
    setOnCreateArea(true);
  };

  let activeStyle = {
    color: '#0052CC',
    position: 'relative',
    // '&::before': {
    //   content: `''`,
    //   position: 'absolute',
    //   left: '-50px',
    //   top: '50px',
    //   width: '50px',
    //   height: '50px',
    //   backgroundColor: '#0052CC',
    // },
  };

  return (
    <main>
      <GeoNavbar />
      <Box sx={{ display: 'flex' }}>
        <Sidebar open={open} component="aside">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {open && (
              <Typography variant="subtitle2" component="h5">
                MENU
              </Typography>
            )}
            <MenuIcon
              sx={{ marginBottom: '10px' }}
              onClick={() => setOpen(!open)}
            >
              {open ? <NavigateBeforeIcon /> : <NavigateNextIcon />}
            </MenuIcon>
          </Box>
          <Box>
            {open && (
              <NavBoxItem>
                <Box
                  component={'img'}
                  src={LocationIcon}
                  sx={{
                    width: '20px',
                    marginRight: '10px',
                  }}
                />
                <Typography variant="subtitle2" component="p">
                  Geo Information
                </Typography>
              </NavBoxItem>
            )}
            {sidebarData.map((item) => (
              <NavLinkItem
                to={item.link}
                key={item.name}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                onClick={() => handleSidebarItem(item.link)}
              >
                {open && (
                  <Box
                    component={item.icon ? 'img' : 'span'}
                    src={item.icon}
                    sx={{
                      width: '20px',
                      marginRight: '10px',
                    }}
                  />
                )}
                <Typography variant="subtitle2" component="p">
                  {item.name}
                </Typography>
              </NavLinkItem>
            ))}
          </Box>
        </Sidebar>
        <Box
          style={{
            width: '100%',
            padding: '20px 25px',
            backgroundColor: '#F5F5F5',
          }}
        >
          <Outlet
            context={{
              onCreateRegion,
              handleOpenRegionForm,
              onCreateArea,
              handleOpenAreaForm,
            }}
          />
        </Box>
      </Box>
    </main>
  );
}
