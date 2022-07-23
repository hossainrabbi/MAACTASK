import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PrivateRoute() {
  const location = useLocation();
  const auth = useSelector((store) => store.auth);

  return auth?.user?.token && auth?.user?.user?.role === 'HUB' ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
