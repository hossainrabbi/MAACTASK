import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import { productionFeatures } from '../../../data';
import ProductionImage from '../../../images/production.png';
import ProductionIcon from '../../../images/productionIcon.svg';
import { FeaturesImageGrid, ProductionFeaturesContainer } from '../../styles';
import Title from './Title';

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
        <Grid item xs={6} lg={3}>
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
                  className="text-right"
                >
                  <img src={ProductionIcon} alt={ProductionIcon} />
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </ProductionFeaturesContainer>
              ))}
          </Box>
        </Grid>
        <FeaturesImageGrid item xs={0} lg={6}>
          <Box
            sx={{
              maxWidth: '100%',
            }}
            component="img"
            src={ProductionImage}
            alt="ProductionImage"
          />
        </FeaturesImageGrid>
        <Grid item xs={6} lg={3}>
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
                <ProductionFeaturesContainer
                  className="text-left"
                  key={item.title}
                >
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
