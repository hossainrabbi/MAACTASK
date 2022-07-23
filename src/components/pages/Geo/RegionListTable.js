import {
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';

export default function RegionListTable({
  selected,
  region,
  handleSelectAllClick,
}) {
  return (
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
  );
}
