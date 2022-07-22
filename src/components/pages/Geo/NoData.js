import { Box, Paper } from '@mui/material';
import React from 'react';
import NoDataFoundImage from '../../../images/noDataFound.png';

export default function NoData({ handleOpenForm }) {
  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '700px',
        textAlign: 'center',
      }}
    >
      <Box>
        <Box component="img" src={NoDataFoundImage} alt="NoDataFoundImage" />
        <Box
          sx={{
            color: '#9FA3A6',
            fontSize: '20px',
          }}
        >
          Currently you have no Data.
          <br />
          For next step first
          <span
            style={{
              color: '#556EE6',
              marginLeft: '5px',
              cursor: 'pointer',
              userSelect: 'none',
            }}
            onClick={handleOpenForm}
          >
            Create Region
          </span>
        </Box>
      </Box>
    </Paper>
  );
}
