import { Box, TextField } from '@mui/material';
import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { CustomButton, RegionContainer, RegionInputField } from '../../styles';

export default function RegionListHeader({
  regionInput,
  handleAddRegion,
  region,
  setRegionInput,
}) {
  return (
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
            Geo <ChevronRightIcon /> Geo List <ChevronRightIcon />{' '}
            <span style={{ color: '#0052CC' }}>Create Geo</span>
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
          <TextField
            fullWidth
            placeholder="Add Region"
            value={regionInput}
            onChange={(e) => setRegionInput(e.target.value)}
          />
          <div className="input-button">
            <CustomButton
              variant="contained"
              bg="#0B2E4E"
              padding="10px 20px"
              onClick={handleAddRegion}
              disabled={region.loading}
            >
              {region.loading ? 'Loading...' : 'Add Region'}
            </CustomButton>
          </div>
        </RegionInputField>
      </Box>
    </Box>
  );
}
