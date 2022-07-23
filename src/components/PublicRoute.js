import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PublicRoute() {
  const location = useLocation();
  const auth = useSelector((store) => store.auth);

  return !auth?.user?.token ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
