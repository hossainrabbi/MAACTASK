import React, { useEffect } from 'react';
import { Outlet, Navigate, useLocation, useNavigate } from 'react-router-dom';

export default function PublicRoute() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('authToken')) {
      console.log('Hello');
      navigate('/');
    }
  }, [navigate]);

  return !JSON.parse(localStorage.getItem('authToken'))?.token ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
}
