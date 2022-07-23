import { Box } from '@mui/material';
import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddIcon from '@mui/icons-material/Add';
import { CustomButton, RegionContainer } from '../../styles';

export default function CreateTitle({ listTitle, handleOpenForm }) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 15px',
      }}
    >
      <RegionContainer>
        <h3>{listTitle}</h3>
        <p>
          Geo <ChevronRightIcon />{' '}
          <span style={{ color: '#0052CC' }}>Geo List</span>
        </p>
      </RegionContainer>
      <div>
        <CustomButton
          variant="contained"
          bg="#0B2E4E"
          padding="10px 20px"
          startIcon={<AddIcon />}
          onClick={handleOpenForm}
        >
          Create New
        </CustomButton>
      </div>
    </Box>
  );
}
