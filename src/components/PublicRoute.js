import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

export default function PublicRoute() {
  const location = useLocation();
  const auth = useSelector((store) => store.auth);

  return !auth?.user ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
