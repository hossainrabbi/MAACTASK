import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Button, Alert } from '@mui/material';
import { useState } from 'react';
import { loginUser } from '../../action/auth-action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { InputTextField } from '../styles';

export default function Login() {
  const [loginData, setLoginData] = useState({
    employeeId: '',
    password: '',
  });
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || '/';

  useEffect(() => {
    if (auth?.isSubmit) {
      navigate(from, { replace: true });
    }
  }, [auth?.isSubmit, navigate, from]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginData));
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          width: '100%',
          height: '100%',
          padding: '50px 50px 50px',
        }}
      >
        <Box
          component="form"
          sx={{
            padding: '50px',
            backgroundColor: '#fff',
          }}
          onSubmit={handleLogin}
        >
          {auth.error && (
            <Alert severity="error" style={{ marginBottom: '10px' }}>
              {auth.error}
            </Alert>
          )}
          <Typography variant="h4" align="center" gutterBottom component="h3">
            Welcome Back!
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            gutterBottom
            component="p"
          >
            Please login to your account
          </Typography>
          <InputTextField
            id="employeeId"
            label="Enter Your Employee Id"
            type="text"
            variant="filled"
            value={loginData.employeeId}
            onChange={(e) =>
              setLoginData({
                ...loginData,
                employeeId: e.target.value,
              })
            }
          />
          <InputTextField
            id="password"
            label="Password"
            type="password"
            variant="filled"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({
                ...loginData,
                password: e.target.value,
              })
            }
          />
          <Button
            style={{ width: '100%', marginTop: '15px', padding: '20px 10px' }}
            variant="contained"
            type="submit"
            disabled={auth.loading}
          >
            {auth.loading ? 'Loading...' : 'Sign in'}
          </Button>
          <Typography
            variant="subtitle1"
            align="center"
            gutterBottom
            component="p"
            marginTop="20px"
            marginBottom="0px"
          >
            Don’t have any account? <Link to="/login">Sign Up</Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
