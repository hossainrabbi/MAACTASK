import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  styled,
  TextField,
  Typography,
  Button,
} from '@mui/material';

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

export default function Login() {
  return (
    <Container>
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
        >
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
            id="email"
            label="Enter Your Email"
            type="email"
            variant="filled"
          />
          <InputTextField
            id="password"
            label="Password"
            type="password"
            variant="filled"
          />
          <Button
            style={{ width: '100%', marginTop: '15px', padding: '20px 10px' }}
            variant="contained"
            type="submit"
          >
            Sign in
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
