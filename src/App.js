import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PublicLayout from './components/PublicLayout';
import CssBaseline from '@mui/material/CssBaseline';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import GeoInformationLayout from './components/GeoInformationLayout';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Home from './components/pages/Home';
import RegionList from './components/pages/RegionList';
import AreaList from './components/pages/AreaList';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path="" element={<Home />} />
          <Route element={<PublicRoute />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Route>

        <Route path="/geo" element={<PrivateRoute />}>
          <Route path="" element={<Navigate to="/geo/region-list" replace />} />
          <Route path="" element={<GeoInformationLayout />}>
            <Route path="region-list" element={<RegionList />} />
            <Route path="area-list" element={<AreaList />} />
          </Route>
        </Route>
      </Routes>
      <CssBaseline />
    </BrowserRouter>
  );
}
