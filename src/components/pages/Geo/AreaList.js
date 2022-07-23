import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import CreateTitle from './CreateTitle';
import { useSelector, useDispatch } from 'react-redux';
import { createArea, findArea } from '../../../action/area-action';
import { findRegions } from '../../../action/region-action';
import NoData from './NoData';
import { toast } from 'react-toastify';
import AreaListHeader from './AreaListHeader';
import AreaListTable from './AreaListTable';

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
    <AreaListHeader
      regionSelectValue={regionSelectValue}
      setRegionSelectValue={setRegionSelectValue}
      region={region}
      areaInput={areaInput}
      setAreaInput={setAreaInput}
      handleAddArea={handleAddArea}
      createLoading={createLoading}
    />
  ) : (
    <Box>
      <CreateTitle listTitle="Area List" handleOpenForm={handleOpenAreaForm} />
      {area?.length > 0 ? (
        <AreaListTable
          selected={selected}
          area={area}
          handleSelectAllClick={handleSelectAllClick}
        />
      ) : (
        <NoData handleOpenForm={handleOpenAreaForm} />
      )}
    </Box>
  );
}
