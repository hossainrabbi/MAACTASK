import { Box, Container, styled } from '@mui/material';
import React from 'react';
import MobileImage from '../../../images/mobile.svg';
import { CustomButton } from '../../styles';

const HeroContainer = styled(Box)(() => ({
  textAlign: 'center',
  marginTop: '100px',
  h1: {
    fontSize: '58px',
    width: '800px',
    margin: '0 auto',
    color: '#0B141F',
  },
}));

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
