import React from 'react';
import { TitleBox } from '../../styles';

export default function Title({ titleName, titleDescription, ...res }) {
  return (
    <TitleBox {...res}>
      <h5>{titleName}</h5>
      <h2>{titleDescription}</h2>
    </TitleBox>
  );
}
