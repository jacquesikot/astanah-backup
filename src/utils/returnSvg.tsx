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

const width = 30;

// retrurn no image icon at the end
const returnSvg = (index: number) => {
  if (index === 0) {
    return <ShoeIcon width={width} />;
  } else if (index === 1) {
    return <MakeupIcon width={width} />;
  } else if (index === 2) {
    return <CreamIcon width={width} />;
  } else if (index === 3) {
    return <ManiPedi width={width} />;
  } else if (index === 4) {
    return <BabyIcon width={width} />;
  } else if (index === 5) {
    return <DrinksIcon width={width} />;
  } else if (index === 6) {
    return <ChildIcon width={width} />;
  } else if (index === 7) {
    return <WomanIcon width={width} />;
  } else if (index === 8) {
    return <LaptopIcon width={width} />;
  } else if (index === 9) {
    return <PerfumeIcon width={width} />;
  } else if (index === 10) {
    return <ManIcon width={width} />;
  } else if (index === 11) {
    return <ClothingIcon width={width} />;
  } else if (index === 12) {
    return <PhoneIcon width={width} />;
  } else if (index === 13) {
    return <ChargerIcon width={width} />;
  }
};

export default returnSvg;
