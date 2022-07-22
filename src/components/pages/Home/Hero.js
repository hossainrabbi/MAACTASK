import { Box, Container } from '@mui/material';
import React from 'react';
import MobileImage from '../../../images/mobile.svg';
import { CustomButton, HeroContainer } from '../../styles';

export default function Hero() {
  return (
    <Container>
      <HeroContainer>
        <h1>Analytics that transform your product inside-out</h1>
        <Box
          sx={{
            marginTop: '40px',
          }}
        >
          <CustomButton
            variant="contained"
            bg="#0052CC"
            padding="15px 30px"
            style={{ marginRight: '10px' }}
          >
            Request for Demo
          </CustomButton>
          <CustomButton
            variant="outlined"
            shadow="#0052CC"
            padding="15px 30px"
            style={{ marginLeft: '10px' }}
          >
            Download
          </CustomButton>
        </Box>
        <div>
          <img src={MobileImage} alt="MobileImage" />
        </div>
      </HeroContainer>
    </Container>
  );
}
