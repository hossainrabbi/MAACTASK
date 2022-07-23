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
  // const [countRegion, setCountRegion] = useState(10);
  const [countArea, setCountArea] = useState(10);
  const [searchArea, setSearchArea] = useState('');
  const [selected, setSelected] = useState([]);
  const { region } = useSelector((store) => store.region);
  const { area, isSubmit, createLoading, createError, areaLength } =
    useSelector((store) => store.area);
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
    dispatch(findRegions(10, ''));
  }, [dispatch]);

  useEffect(() => {
    dispatch(findArea(countArea, searchArea));
  }, [dispatch, countArea, searchArea]);

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

  const handleAreaSearch = (e) => {
    setSearchArea(e.target.value);
  };

  const handleCountArea = (e) => {
    setCountArea(e.target.value);
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
      {area?.length === 0 ? (
        <NoData handleOpenForm={handleOpenAreaForm} />
      ) : (
        <AreaListTable
          selected={selected}
          area={area}
          handleSelectAllClick={handleSelectAllClick}
          searchArea={searchArea}
          handleAreaSearch={handleAreaSearch}
          countArea={countArea}
          handleCountArea={handleCountArea}
          areaLength={areaLength}
        />
      )}
    </Box>
  );
}
