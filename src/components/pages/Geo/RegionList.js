import Box from '@mui/material/Box';
import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import { createRegion, findRegions } from '../../../action/region-action';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import CreateTitle from './CreateTitle';
import NoData from './NoData';
import { toast } from 'react-toastify';
import RegionListTable from './RegionListTable';
import RegionListHeader from './RegionListHeader';

const options = {
  autoClose: 1000,
  position: toast.POSITION.TOP_RIGHT,
};

export default function RegionList() {
  const { onCreateRegion, handleOpenRegionForm } = useOutletContext();
  const [error, setError] = useState('');
  const [regionInput, setRegionInput] = useState('');
  const [countRegion, setCountRegion] = useState(10);
  const [searchRegion, setSearchRegion] = useState('');
  const region = useSelector((store) => store.region);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    if (error) toast.error(error, options);
    if (region.error) toast.error(region.error, options);
    if (region.isSubmit) {
      setRegionInput('');
      toast.success('Region added Successfully', options);
    }
  }, [error, region.isSubmit, region.error]);

  useEffect(() => {
    dispatch(findRegions(countRegion, searchRegion));
  }, [dispatch, countRegion, searchRegion]);

  const handleAddRegion = () => {
    if (!regionInput) return setError('Type Region');
    setError('');

    dispatch(
      createRegion({
        name: regionInput,
      })
    );
  };

  const handleRegionSearch = (e) => {
    setSearchRegion(e.target.value);
  };

  const handleCountRegion = (e) => {
    setCountRegion(e.target.value);
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
    <RegionListHeader
      regionInput={regionInput}
      handleAddRegion={handleAddRegion}
      region={region}
      setRegionInput={setRegionInput}
    />
  ) : (
    <Box>
      <CreateTitle
        listTitle="Region List"
        handleOpenForm={handleOpenRegionForm}
      />
      {region?.region?.length === 0 ? (
        <NoData handleOpenForm={handleOpenRegionForm} />
      ) : (
        <RegionListTable
          selected={selected}
          region={region}
          searchRegion={searchRegion}
          countRegion={countRegion}
          handleSelectAllClick={handleSelectAllClick}
          handleRegionSearch={handleRegionSearch}
          handleCountRegion={handleCountRegion}
        />
      )}
    </Box>
  );
}
