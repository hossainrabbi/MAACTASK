import {
  Box,
  Checkbox,
  InputAdornment,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { SmallFormControl, SmallTextField } from '../../styles';
import { makeLengthArray } from '../../../utils/length';

export default function AreaListTable({
  selected,
  area,
  handleSelectAllClick,
  searchArea,
  handleAreaSearch,
  countArea,
  handleCountArea,
  areaLength,
}) {
  return (
    <TableContainer component={Paper}>
      <Box
        sx={{
          padding: '20px',
          display: 'flex',
          justifyContent: 'right',
        }}
      >
        <SmallTextField
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          value={searchArea}
          onChange={handleAreaSearch}
        />
        <SmallFormControl>
          <Select
            value={
              makeLengthArray(areaLength)[0] >= countArea
                ? countArea
                : makeLengthArray(areaLength)[0]
            }
            onChange={handleCountArea}
          >
            {makeLengthArray(areaLength).map((item, i) => (
              <MenuItem key={Math.random() * item + i} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </SmallFormControl>
      </Box>
      <Table sx={{ minWidth: 650 }} aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                color="primary"
                indeterminate={
                  selected.length > 0 && selected.length < area?.length
                }
                checked={area?.length > 0 && selected.length === area?.length}
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
  );
}
