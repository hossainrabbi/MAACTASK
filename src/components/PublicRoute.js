import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

export default function PublicRoute() {
  const location = useLocation();

  return !JSON.parse(localStorage.getItem('authToken'))?.user ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
