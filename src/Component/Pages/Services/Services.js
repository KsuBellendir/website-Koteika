import React from 'react';
import HeroSection from '../../HeroSection/HeroSection';
import { homeObjOne,  homeObjThree, } from '../HomePage/Data';
import Pricing from '../../Pricing/Pricing';

function Services() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Services;