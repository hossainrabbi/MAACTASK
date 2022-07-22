import { Box, Typography } from '@mui/material';
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import GeoNavbar from './GeoNavbar';
import { useState } from 'react';
import { MenuIcon, Sidebar } from './styles';
import { sidebarData } from '../data';

export default function GeoInformationLayout() {
  const [open, setOpen] = useState(true);

  return (
    <main>
      <GeoNavbar />
      <Box sx={{ display: 'flex' }}>
        <Sidebar component="aside">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant="subtitle2" component="h5">
              MENU
            </Typography>
            <MenuIcon onClick={() => setOpen(!open)}>
              <NavigateBeforeIcon />
            </MenuIcon>
          </Box>
          <Box>
            {sidebarData.map((item) => (
              <Box
                component={NavLink}
                to={item.link}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '5px 0',
                  textDecoration: 'none',
                  color: '#757575',
                  marginBottom: '5px',
                }}
                key={item.name}
              >
                <Box
                  component={item.icon ? 'img' : 'span'}
                  src={item.icon}
                  sx={{
                    width: '20px',
                    marginRight: '10px',
                  }}
                />
                <Typography variant="subtitle2" component="p">
                  {item.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Sidebar>
        <Box
          style={{
            width: '100%',
            padding: '20px 25px',
            backgroundColor: '#dddddd',
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
          quasi vitae dolor, quia ab dolorum enim, quibusdam ipsum deleniti
          omnis commodi voluptates? Rem ipsam vitae magni quo eos atque debitis!
          <Outlet />
        </Box>
      </Box>
    </main>
  );
}
