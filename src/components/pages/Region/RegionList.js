import { Box, TextField } from '@mui/material';
import React from 'react';
import { CustomButton, RegionContainer, RegionInputField } from '../../styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AddIcon from '@mui/icons-material/Add';
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import { createRegion } from '../../../action/region-action';
import { useDispatch } from 'react-redux';

export default function RegionList() {
  const { onCreateRegion, setOnCreateRegion } = useOutletContext();
  const [regionInput, setRegionInput] = useState('');
  const dispatch = useDispatch();

  const handleAddRegion = () => {
    dispatch(
      createRegion({
        name: regionInput,
      })
    );
  };

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
            >
              Add Region
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
