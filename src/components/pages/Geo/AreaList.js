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
  const [typeError, setTypeError] = useState('');
  const [areaInput, setAreaInput] = useState('');
  // const [countRegion, setCountRegion] = useState(10);
  const [countArea, setCountArea] = useState(10);
  const [searchArea, setSearchArea] = useState('');
  const [searchRegion, setSearchRegion] = useState('');
  const [selected, setSelected] = useState([]);
  const { region } = useSelector((store) => store.region);
  const { area, isSubmit, loading, error, areaLength } = useSelector(
    (store) => store.area
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeError) toast.error(typeError, options);
    if (error) toast.error(error, options);
    if (isSubmit) {
      setAreaInput('');
      setRegionSelectValue('Select Region');
      toast.success('Area added Successfully', options);
    }
  }, [typeError, isSubmit, error]);

  useEffect(() => {
    dispatch(findRegions(10, searchRegion));
  }, [dispatch, searchRegion]);

  useEffect(() => {
    dispatch(findArea(countArea, searchArea));
  }, [dispatch, countArea, searchArea]);

  const handleAddArea = () => {
    if (
      regionSelectValue === 'Select Region' ||
      regionSelectValue === 'No Data Found'
    ) {
      return setTypeError('Please Select Region');
    }

    if (!areaInput) {
      return setTypeError('Type Area');
    }

    setTypeError('');

    const findRegionId = region.find((item) => item.name === regionSelectValue);

    if (!findRegionId) return setTypeError('Select Region Again');

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

  const handleRegionSearch = (e) => {
    setSearchRegion(e.target.value);
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
      loading={loading}
      searchRegion={searchRegion}
      handleRegionSearch={handleRegionSearch}
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
