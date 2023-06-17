import React from 'react';
import { Box, Heading, Image } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
const headingOptions ={
  pos : "absolute",
  left: "50%",
  top: "50%",
  transform : "translate(-50%,-50%)",
  texttransform: "uppercase",
  p:"4",
}

const Home = () => {
  return (
    <Box>
      <MyCarousel />
    </Box>
  );
};
const MyCarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false}>
      <Box w={'full'} h={'100vh'}>
        <Image src={img1} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Watch the future</Heading>
      </Box>

      <Box w={'full'} h={'100vh'}>
        <Image src={img2} />
        <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>Gaming is future</Heading>
      </Box>

      <Box w={'full'} h={'100vh'}>
        <Image src={img3} />
        <Heading bgColor={'blackAlpha.600'} color={'black'} {...headingOptions}>Gaming on Console</Heading>
      </Box>

      <Box w={'full'} h={'100vh'}>
        <Image src={img4} />
        <Heading bgColor={'blackAlpha.600'} color={'black'} {...headingOptions}>Night Life Is Cool</Heading>
      </Box>

     
    </Carousel>
  );
};
export default Home;
