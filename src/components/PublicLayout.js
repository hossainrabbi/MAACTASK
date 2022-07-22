import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import BG from '../images/bg.svg';

export default function PublicLayout() {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
}
