import { Box, Container, Grid, styled } from '@mui/material';
import React from 'react';
import ProductionImage from '../../../images/production.svg';
import ProductionIcon from '../../../images/productionIcon.svg';
import Title from './Title';

const ProductionFeaturesContainer = styled(Box)(() => ({
  marginBottom: '50px',
  img: {
    padding: '8px',
    borderRadius: '10px',
    boxShadow: '0px 5px 7px 1px #dbdbdb',
  },
  h4: {
    color: '#0B141F',
    fontSize: '26px',
    marginTop: '5px',
    marginBottom: 0,
  },
  p: {
    fontSize: '16px',
    color: '#4E4E4E',
  },
}));

const productionFeatures = [
  {
    title: 'Real-time analytics',
    description:
      'See product usage, sign-ins, feature metrics change as users work on your.',
  },
  {
    title: 'Intuitive dashboard',
    description:
      'See product usage, sign-ins, feature metrics change as users work on your.',
  },
  {
    title: 'Smart suggestions',
    description:
      'See product usage, sign-ins, feature metrics change as users work on your.',
  },
  {
    title: 'Multiple views',
    description:
      'See product usage, sign-ins, feature metrics change as users work on your.',
  },
  {
    title: 'AI-led diagnoses',
    description:
      'See product usage, sign-ins, feature metrics change as users work on your.',
  },
  {
    title: 'Responsive',
    description:
      'See product usage, sign-ins, feature metrics change as users work on your.',
  },
];

export default function ProductsFeatures() {
  return (
    <Container>
      <Title
        titleName="Products Features"
        titleDescription="Make more out of your data"
        descriptionsize="48px"
        textAlign="center"
      />
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Box
            sx={{
              marginTop: '120px',
            }}
          >
            {productionFeatures
              .slice(0, Math.ceil(productionFeatures.length / 2))
              .map((item) => (
                <ProductionFeaturesContainer
                  key={item.title}
                  sx={{
                    textAlign: 'right',
                  }}
                >
                  <img src={ProductionIcon} alt={ProductionIcon} />
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </ProductionFeaturesContainer>
              ))}
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              maxWidth: '100%',
            }}
            component="img"
            src={ProductionImage}
            alt="ProductionImage"
          />
        </Grid>
        <Grid item xs={3}>
          <Box
            sx={{
              marginTop: '120px',
            }}
          >
            {productionFeatures
              .slice(
                Math.ceil(productionFeatures.length / 2),
                productionFeatures.length
              )
              .map((item) => (
                <ProductionFeaturesContainer key={item.title}>
                  <img src={ProductionIcon} alt={ProductionIcon} />
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </ProductionFeaturesContainer>
              ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
