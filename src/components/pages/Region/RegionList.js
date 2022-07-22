import { Box, Paper, styled, TextField } from '@mui/material';
import React from 'react';
import { CustomButton } from '../../styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddIcon from '@mui/icons-material/Add';
import { useOutletContext } from 'react-router-dom';

const RegionContainer = styled(Box)(() => ({
  h3: {
    margin: 0,
  },
  p: {
    display: 'flex',
    alignItems: 'center',
    margin: 0,
  },
}));

const RegionInputField = styled(Paper)(() => ({
  padding: '25px',
  display: 'inline-block',
  width: '500px',
  marginTop: '50px',
  small: {
    color: '#495057',
    marginBottom: '10px',
    display: 'inline-block',
  },
  '& .input-button': {
    marginTop: '50px',
    textAlign: 'right',
  },
}));

export default function RegionList() {
  const { onCreateRegion, setOnCreateRegion } = useOutletContext();

  return onCreateRegion ? (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '25px 15px',
        }}
      >
        <RegionContainer>
          <h3>Region List</h3>
          <p>
            Geo <ChevronRightIcon /> Geo List <ChevronRightIcon /> Create Geo
          </p>
        </RegionContainer>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <RegionInputField>
          <small>Region</small>
          <TextField fullWidth placeholder="Add Region" />
          <div className="input-button">
            <CustomButton variant="contained" bg="#0B2E4E" padding="10px 20px">
              Create New
            </CustomButton>
          </div>
        </RegionInputField>
      </Box>
    </Box>
  ) : (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 15px',
      }}
    >
      <RegionContainer>
        <h3>Region List</h3>
        <p>
          Geo <ChevronRightIcon /> Geo List
        </p>
      </RegionContainer>
      <div>
        <CustomButton
          variant="contained"
          bg="#0B2E4E"
          padding="10px 20px"
          startIcon={<AddIcon />}
          onClick={() => setOnCreateRegion(true)}
        >
          Create New
        </CustomButton>
      </div>
    </Box>
  );
}
