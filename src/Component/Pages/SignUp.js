import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import { homeObjOne,  homeObjThree, } from '../Pages/HomePage/Data';

function SignUp() {
  return (
    <>
 
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default SignUp;