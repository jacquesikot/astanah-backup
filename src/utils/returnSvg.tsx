import React from 'react';
import {
  ShoeIcon,
  MakeupIcon,
  CreamIcon,
  ManiPedi,
  BabyIcon,
  DrinksIcon,
  ChildIcon,
  WomanIcon,
  ManIcon,
  LaptopIcon,
  PhoneIcon,
  PerfumeIcon,
  ClothingIcon,
  ChargerIcon,
} from '../Svg';

// retrurn no image icon at the end
const returnSvg = (index: number) => {
  if (index === 0) {
    return <ShoeIcon />;
  } else if (index === 1) {
    return <MakeupIcon />;
  } else if (index === 2) {
    return <CreamIcon />;
  } else if (index === 3) {
    return <ManiPedi />;
  } else if (index === 4) {
    return <BabyIcon />;
  } else if (index === 5) {
    return <DrinksIcon />;
  } else if (index === 6) {
    return <ChildIcon />;
  } else if (index === 7) {
    return <WomanIcon />;
  } else if (index === 8) {
    return <LaptopIcon />;
  } else if (index === 9) {
    return <PerfumeIcon />;
  } else if (index === 10) {
    return <ManIcon />;
  } else if (index === 11) {
    return <ClothingIcon />;
  } else if (index === 12) {
    return <PhoneIcon />;
  } else if (index === 13) {
    return <ChargerIcon />;
  }
};

export default returnSvg;
