import {
  Box,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@mui/material';
import React from 'react';
import { CustomButton, RegionContainer, RegionInputField } from '../../styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import { createRegion, findRegions } from '../../../action/region-action';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import CreateTitle from './CreateTitle';
import NoData from './NoData';
import { toast } from 'react-toastify';

const options = {
  autoClose: 1000,
  position: toast.POSITION.TOP_RIGHT,
};

export default function RegionList() {
  const { onCreateRegion, handleOpenRegionForm } = useOutletContext();
  const [error, setError] = useState('');
  const [regionInput, setRegionInput] = useState('');
  const [showCount, setShowCount] = useState(10);
  const region = useSelector((store) => store.region);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    if (error) toast.error(error, options);
    if (region.createError) toast.error(region.createError, options);
    if (region.isSubmit) {
      setRegionInput('');
      toast.success('Region added Successfully', options);
    }
  }, [error, region.isSubmit, region.createError]);

  console.log(region.isSubmit);

  useEffect(() => {
    dispatch(findRegions(showCount));
  }, [dispatch, showCount]);

  const handleAddRegion = () => {
    if (!regionInput) return setError('Type Region');
    setError('');

    dispatch(
      createRegion({
        name: regionInput,
      })
    );
  };

  const handleSelectAllClick = (e) => {
    if (e.target.checked) {
      const newSelecteds = region?.region?.map((item) => item.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
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
              disabled={region.createLoading}
            >
              {region.createLoading ? 'Loading...' : 'Add Region'}
            </CustomButton>
          </div>
        </RegionInputField>
      </Box>
    </Box>
  ) : (
    <Box>
      <CreateTitle
        listTitle="Region List"
        handleOpenForm={handleOpenRegionForm}
      />
      {region?.region?.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    indeterminate={
                      selected.length > 0 &&
                      selected.length < region?.region?.length
                    }
                    checked={
                      region?.region?.length > 0 &&
                      selected.length === region?.region?.length
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
              </TableRow>
            </TableHead>
            <TableBody>
              {region?.region?.map((item, i) => (
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
                  <TableCell component="td">{item.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <NoData handleOpenForm={handleOpenRegionForm} />
      )}
    </Box>
  );
}
