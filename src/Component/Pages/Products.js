import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import { homeObjOne,  homeObjThree, } from '../Pages/HomePage/Data';
import Pricing from '../Pricing/Pricing';

function Products() {

  return (
    <>
    <Pricing />
    <HeroSection {...homeObjOne} />
    <HeroSection {...homeObjThree} />
  </>
  )
}

export default Products