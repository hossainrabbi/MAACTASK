import { Box, FormControl, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { CustomButton, RegionContainer, RegionInputField } from '../../styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CreateTitle from './CreateTitle';
import { useSelector, useDispatch } from 'react-redux';
import { createArea } from '../../../action/area-action';
import { findRegions } from '../../../action/region-action';

export default function AreaList() {
  const { onCreateArea, handleOpenAreaForm } = useOutletContext();
  const [regionSelectValue, setRegionSelectValue] = useState('Select Region');
  const [error, setError] = useState('');
  const [areaInput, setAreaInput] = useState('');
  const [showCount, setShowCount] = useState(10);
  const { region } = useSelector((store) => store.region);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findRegions(showCount));
  }, [dispatch, showCount]);

  const handleAddArea = () => {
    if (
      regionSelectValue === 'Select Region' ||
      regionSelectValue === 'No Data Found'
    ) {
      return setError('Please Select Region');
    }

    if (!areaInput) {
      return setError('Type Area');
    }

    const findRegionId = region.find((item) => item.name === regionSelectValue);

    if (!findRegionId) return setError('Select Region Again');

    dispatch(
      createArea({
        name: areaInput,
        region: findRegionId.id,
      })
    );
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
