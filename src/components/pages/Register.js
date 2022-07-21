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
          />
          <InputTextField
            id="email"
            label="Enter Your Email"
            type="email"
            variant="filled"
          />
          <InputTextField
            id="userId"
            label="Your ID"
            type="text"
            variant="filled"
          />
          <InputTextField
            id="mobileNum"
            label="Your Mobile Number"
            type="text"
            variant="filled"
          />
          <InputTextField
            id="password"
            label="Password"
            type="password"
            variant="filled"
          />
          <InputTextField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            variant="filled"
          />
          <FormControl
            variant="filled"
            style={{ width: '100%', marginBottom: '20px' }}
          >
            <InputLabel id="roleLabel">Select Your Role</InputLabel>
            <InputSelect
              labelId="roleLabel"
              id="role"
              value="HUB"
              label="Select Your Role"
            >
              <MenuItem value={'HUB'}>HUB</MenuItem>
            </InputSelect>
          </FormControl>
          <Typography variant="subtitle1" gutterBottom component="label">
            <Checkbox /> I read and agree to the Terms &amp; Conditions
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
