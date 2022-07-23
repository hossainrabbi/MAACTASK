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
      {region?.region?.length > 0 ? (
        <RegionListTable
          selected={selected}
          region={region}
          handleSelectAllClick={handleSelectAllClick}
        />
      ) : (
        <NoData handleOpenForm={handleOpenRegionForm} />
      )}
    </Box>
  );
}
