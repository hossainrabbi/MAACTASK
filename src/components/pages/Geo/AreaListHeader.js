import { Box, FormControl, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';
import { CustomButton, RegionContainer, RegionInputField } from '../../styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function AreaListHeader({
  regionSelectValue,
  setRegionSelectValue,
  region,
  areaInput,
  setAreaInput,
  handleAddArea,
  createLoading,
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
              {region?.length > 0 ? (
                region?.map((item) => (
                  <MenuItem key={item._id} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))
              ) : (
                <MenuItem value={'No Data Found'} disabled>
                  No Data Found
                </MenuItem>
              )}
            </Select>
          </FormControl>
          <small>Area</small>
          <TextField
            fullWidth
            placeholder={
              regionSelectValue === 'Select Region' ||
              regionSelectValue === 'No Data Found'
                ? 'Before Type Area Please Select Region'
                : 'Type Area'
            }
            value={areaInput}
            onChange={(e) => setAreaInput(e.target.value)}
            disabled={
              regionSelectValue === 'Select Region' ||
              regionSelectValue === 'No Data Found'
            }
          />
          <div className="input-button">
            <CustomButton
              variant="contained"
              bg="#0B2E4E"
              padding="10px 20px"
              onClick={handleAddArea}
              disabled={createLoading}
            >
              {createLoading ? 'Loading...' : 'Add Area'}
            </CustomButton>
          </div>
        </RegionInputField>
      </Box>
    </Box>
  );
}
