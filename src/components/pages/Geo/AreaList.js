import { Box, FormControl, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { CustomButton, RegionContainer, RegionInputField } from '../../styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CreateTitle from './CreateTitle';

export default function AreaList() {
  const { onCreateArea, handleOpenAreaForm } = useOutletContext();
  const [regionSelectValue, setRegionSelectValue] = useState('Select Region');
  const [areaInput, setAreaInput] = useState('');

  const handleAddArea = () => {
    // dispatch(
    //   createRegion({
    //     name: regionInput,
    //   })
    // );
  };

  return onCreateArea ? (
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
          <h3>Area List</h3>
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
          <FormControl fullWidth>
            <Select
              value={regionSelectValue}
              onChange={(e) => setRegionSelectValue(e.target.value)}
              style={{ marginBottom: '20px' }}
            >
              <MenuItem
                value="Select Region"
                disabled
                style={{ display: 'none' }}
              >
                Select Region
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <small>Area</small>
          <TextField
            fullWidth
            placeholder="Type Area"
            value={areaInput}
            onChange={(e) => setAreaInput(e.target.value)}
          />
          <div className="input-button">
            <CustomButton
              variant="contained"
              bg="#0B2E4E"
              padding="10px 20px"
              onClick={handleAddArea}
            >
              Add Area
            </CustomButton>
          </div>
        </RegionInputField>
      </Box>
    </Box>
  ) : (
    <Box>
      <CreateTitle listTitle="Area List" handleOpenForm={handleOpenAreaForm} />
    </Box>
  );
}
