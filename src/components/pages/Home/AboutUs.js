import { Box, Container, Grid, styled } from '@mui/material';
import React from 'react';
import About from '../../../images/about.svg';
import Title from './Title';
import AvatarImage from '../../../images/avatar.svg';
import BG from '../../../images/bg.svg';

const AboutTitle = styled('div')(() => ({
  p: {
    fontSize: '22px',
    color: '#4E4E4E',
    marginTop: 0,
  },
  h3: {
    fontSize: '22px',
    color: '#0B141F',
  },
}));

export default function AboutUs() {
  return (
    <section style={{ backgroundImage: `url(${BG})` }}>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Box component="img" src={About} alt="About Us" />
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Title
                titleName="About Us"
                titleDescription="A dedicated solution for startups and enterprises"
                descriptionsize="40px"
              />
              <p
                style={{
                  paddingBottom: '30px',
                  marginBottom: 0,
                  fontSize: '20px',
                }}
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <Box
                sx={{
                  display: 'flex',
                  gap: '30px',
                  alignItems: 'start',
                  paddingTop: '30px',
                  borderTop: '1px solid #F0F0F0',
                }}
              >
                <Box component="img" src={AvatarImage} alt="AvatarImage" />
                <AboutTitle>
                  <p>
                    "Fieldx is for teams that care about their product growth."
                  </p>
                  <h3>CEO, FieldX</h3>
                </AboutTitle>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
