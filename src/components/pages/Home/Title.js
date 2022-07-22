import { Box, styled } from '@mui/material';
import React from 'react';

const TitleBox = styled(Box)((props) => ({
  h5: {
    fontSize: '20px',
    marginBottom: 0,
    color: '#0052CC',
  },
  h2: {
    fontSize: props.descriptionsize,
    fontWeight: '700',
    marginTop: '5px',
    color: '#0B141F',
  },
}));

export default function Title({ titleName, titleDescription, ...res }) {
  return (
    <TitleBox {...res}>
      <h5>{titleName}</h5>
      <h2>{titleDescription}</h2>
    </TitleBox>
  );
}
