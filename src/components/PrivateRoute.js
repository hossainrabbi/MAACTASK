import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute() {
  const location = useLocation();
  const auth = useSelector((store) => store.auth);

  return JSON.parse(localStorage.getItem('authToken'))?.token &&
    auth?.user?.role === 'HUB' ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
