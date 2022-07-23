import React from 'react';
import Faq from '../../Faq';
import AboutUs from './AboutUs';
import Client from './Client';
import Hero from './Hero';
import ProductsFeatures from './ProductsFeatures';

export default function index() {
  return (
    <div>
      <Hero />
      <hr style={{ border: '1px solid #E1E1E1' }} />
      <ProductsFeatures />
      <AboutUs />
      <Faq />
      <Client />
    </div>
  );
}
