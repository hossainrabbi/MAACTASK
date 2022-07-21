import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute() {
  const location = useLocation();

  return JSON.parse(localStorage.getItem('authToken'))?.token &&
    JSON.parse(localStorage.getItem('authToken'))?.user?.role === 'HUB' ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
