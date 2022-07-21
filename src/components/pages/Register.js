import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
  TextField,
  Typography,
  Checkbox,
  Button,
} from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../action/auth-action';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const InputTextField = styled(TextField)(() => ({
  backgroundColor: 'transparent !important',
  width: '100%',
  marginBottom: '20px',
  '.css-19mk8g1-MuiInputBase-root-MuiFilledInput-root': {
    backgroundColor: 'transparent !important',
  },
  '.css-19mk8g1-MuiInputBase-root-MuiFilledInput-root:hover': {
    backgroundColor: 'transparent !important',
  },
}));

const InputSelect = styled(Select)(() => ({
  backgroundColor: 'transparent !important',
  '.css-19mk8g1-MuiInputBase-root-MuiFilledInput-root': {
    backgroundColor: 'transparent !important',
  },
  '.css-19mk8g1-MuiInputBase-root-MuiFilledInput-root:hover': {
    backgroundColor: 'transparent !important',
  },
}));

export default function Register() {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    employeeId: '',
    phoneNumber: '',
    password: '',
    passwordConfirm: '',
    role: '',
    agree: false,
  });
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);
  const location = useLocation();
  const navigate = useNavigate();

  console.log(auth.error);

  const from = location?.state?.from?.pathname || '/';

  useEffect(() => {
    if (auth?.isSubmit) {
      navigate(from, { replace: true });
    }
  }, [auth?.isSubmit, from, navigate]);

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser(registerData));
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
          onSubmit={handleRegister}
        >
          <Typography variant="h4" align="center" gutterBottom component="h3">
            Create Account
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            gutterBottom
            component="p"
          >
            Fill in the details below to create an account
          </Typography>
          <InputTextField
            id="name"
            label="Enter Your Full Name"
            type="text"
            variant="filled"
            required
            value={registerData.name}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                name: e.target.value,
              })
            }
          />
          <InputTextField
            id="email"
            label="Enter Your Email"
            type="email"
            variant="filled"
            required
            value={registerData.email}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                email: e.target.value,
              })
            }
          />
          <InputTextField
            id="employeeId"
            label="Your ID"
            type="text"
            variant="filled"
            required
            value={registerData.employeeId}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                employeeId: e.target.value,
              })
            }
          />
          <InputTextField
            id="phoneNumber"
            label="Your Mobile Number"
            type="text"
            variant="filled"
            required
            value={registerData.phoneNumber}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                phoneNumber: e.target.value,
              })
            }
          />
          <InputTextField
            id="password"
            label="Password"
            type="password"
            variant="filled"
            required
            value={registerData.password}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                password: e.target.value,
              })
            }
          />
          <InputTextField
            id="passwordConfirm"
            label="Confirm Password"
            type="password"
            variant="filled"
            required
            value={registerData.passwordConfirm}
            onChange={(e) =>
              setRegisterData({
                ...registerData,
                passwordConfirm: e.target.value,
              })
            }
          />
          <FormControl
            variant="filled"
            style={{ width: '100%', marginBottom: '20px' }}
            required
          >
            <InputLabel id="roleLabel">Select Your Role</InputLabel>
            <InputSelect
              labelId="roleLabel"
              id="role"
              label="Select Your Role"
              value={registerData.role}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  role: e.target.value,
                })
              }
            >
              <MenuItem value={'HUB'}>HUB</MenuItem>
            </InputSelect>
          </FormControl>
          <Typography variant="subtitle1" gutterBottom component="label">
            <Checkbox
              required
              checked={registerData.agree}
              onChange={(e) =>
                setRegisterData({
                  ...registerData,
                  agree: e.target.checked,
                })
              }
            />{' '}
            I read and agree to the Terms &amp; Conditions
          </Typography>
          <Button
            style={{ width: '100%', marginTop: '15px', padding: '20px 10px' }}
            variant="contained"
            type="submit"
          >
            Create Account
          </Button>
          <Typography
            variant="subtitle1"
            align="center"
            gutterBottom
            component="p"
            marginTop="20px"
            marginBottom="0px"
          >
            Already have an account? <Link to="/login">Sign In</Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
