import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import About from '../../../images/about.svg';
import Title from './Title';
import AvatarImage from '../../../images/avatar.svg';
import {
  AboutTitle,
  AboutUsContainer,
  CounterContainer,
  CounterCount,
} from '../../styles';
import { countProject } from '../../../data';

export default function AboutUs() {
  return (
    <AboutUsContainer>
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
        <Grid container spacing={1}>
          {countProject.map((countItem) => (
            <Grid key={countItem.name} item xs={3}>
              <CounterContainer>
                <Box
                  component="img"
                  src={countItem.icon}
                  alt={countItem.name}
                />
                <CounterCount variant="h5">
                  {`${countItem.count} ${
                    countItem.name === 'In Operations' ? 'day' : '+'
                  }`}
                </CounterCount>
                <Typography
                  sx={{ fontSize: '24px', color: '#4E4E4E' }}
                  variant="subtitle1"
                >
                  {countItem.name}
                </Typography>
              </CounterContainer>
            </Grid>
          ))}
        </Grid>
      </Container>
    </AboutUsContainer>
  );
}
