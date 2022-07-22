import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PublicLayout from './components/PublicLayout';
import CssBaseline from '@mui/material/CssBaseline';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import GeoInformationLayout from './components/GeoInformationLayout';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from './store/auth-slice';

export default function App() {
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      authAction.loginUser({
        user: JSON.parse(localStorage.getItem('authToken'))?.user,
      })
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      authAction.registerUser({
        user: JSON.parse(localStorage.getItem('authToken'))?.user,
      })
    );
  }, [dispatch]);

  console.log(auth);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route element={<PublicRoute />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Route>
        <Route path="/geo" element={<PrivateRoute />}>
          <Route path="" element={<GeoInformationLayout />}></Route>
        </Route>
      </Routes>
      <CssBaseline />
    </BrowserRouter>
  );
}
