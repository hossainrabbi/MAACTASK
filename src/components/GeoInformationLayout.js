import React from 'react';
import { Outlet } from 'react-router-dom';
import GeoNavbar from './GeoNavbar';

export default function GeoInformationLayout() {
  return (
    <main>
      <GeoNavbar />
      <Outlet />
    </main>
  );
}
