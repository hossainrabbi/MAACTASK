import {
  Box,
  Checkbox,
  FormControl,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { CustomButton, RegionContainer, RegionInputField } from '../../styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CreateTitle from './CreateTitle';
import { useSelector, useDispatch } from 'react-redux';
import { createArea, findArea } from '../../../action/area-action';
import { findRegions } from '../../../action/region-action';
import NoData from './NoData';
import { toast } from 'react-toastify';

const options = {
  autoClose: 1000,
  position: toast.POSITION.TOP_RIGHT,
};

export default function AreaList() {
  const { onCreateArea, handleOpenAreaForm } = useOutletContext();
  const [regionSelectValue, setRegionSelectValue] = useState('Select Region');
  const [error, setError] = useState('');
  const [areaInput, setAreaInput] = useState('');
  const [countRegion, setCountRegion] = useState(10);
  const [countArea, setCountArea] = useState(10);
  const [selected, setSelected] = useState([]);
  const { region } = useSelector((store) => store.region);
  const { area, isSubmit, createLoading, createError } = useSelector(
    (store) => store.area
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) toast.error(error, options);
    if (createError) toast.error(createError, options);
    if (isSubmit) {
      setAreaInput('');
      setRegionSelectValue('Select Region');
      toast.success('Area added Successfully', options);
    }
  }, [error, isSubmit, createError]);

  useEffect(() => {
    dispatch(findRegions(countRegion));
  }, [dispatch, countRegion]);

  useEffect(() => {
    dispatch(findArea(countArea));
  }, [dispatch, countArea]);

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

    setError('');

    const findRegionId = region.find((item) => item.name === regionSelectValue);

    if (!findRegionId) return setError('Select Region Again');

    dispatch(
      createArea({
        name: areaInput,
        region: findRegionId.id,
      })
    );
  };

  const handleSelectAllClick = (e) => {
    if (e.target.checked) {
      const newSelecteds = area?.map((item) => item.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
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
  ) : (
    <Box>
      <CreateTitle listTitle="Area List" handleOpenForm={handleOpenAreaForm} />
      {area?.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    indeterminate={
                      selected.length > 0 && selected.length < area?.length
                    }
                    checked={
                      area?.length > 0 && selected.length === area?.length
                    }
                    onChange={handleSelectAllClick}
                    inputProps={{
                      'aria-label': 'select all desserts',
                    }}
                  />
                </TableCell>
                <TableCell width="200px" component="th">
                  Sl. No.
                </TableCell>
                <TableCell component="th">Region</TableCell>
                <TableCell component="th">Area</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {area?.map((item, i) => (
                <TableRow
                  key={item._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={selected.indexOf(item.name) !== -1}
                      inputProps={{
                        'aria-labelledby': `enhanced-table-checkbox-${i}`,
                      }}
                    />
                  </TableCell>
                  <TableCell component="td">{i + 1}</TableCell>
                  <TableCell component="td">{item.region?.name}</TableCell>
                  <TableCell component="td">{item.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <NoData handleOpenForm={handleOpenAreaForm} />
      )}
    </Box>
  );
}
