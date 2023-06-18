import React from 'react';
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';
const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  texttransform: 'uppercase',
  p: '4',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
          margin={'auto'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          alignItems={'center'}
          direction={['column' ,'row']}
        >
          <Image
            src={img5}
            filter={'hue-rotate(-130deg)'}
            h={['40','300']}
            paddingTop={"4"}
          />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4','16']}
            textAlign={'center'}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            earum eligendi, voluptatem autem eum molestiae praesentium
            cupiditate beatae suscipit repellendus rerum doloribus quia vitae
            cumque quos facere quod ipsum nostrum. Nostrum illo aspernatur magni
            iure similique unde ad laborum nisi iste nihil labore, alias
            repudiandae quod libero quasi, asperiores ex eaque? Tempore veniam
            laboriosam corrupti eius odio alias ipsam. Eligendi officiis iste,
            ad consequatur odit saepe earum ea debitis in accusantium, sapiente
            provident repellat cumque dicta autem eius. Dolorem aut dolor quod.
            Labore est laboriosam soluta, sed vero, repellat tempora fugiat
            ullam laudantium animi placeat quasi, atque sint illum illo deleniti
            necessitatibus. Magni quidem debitis, voluptate aspernatur ab atque
            quas assumenda consequatur quasi et inventore eius eum praesentium
            amet dicta repe
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
const MyCarousel = () => {
  return (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false}>
      <Box w={'full'} h={'100vh'}>
        <Image src={img1} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Watch the future
        </Heading>
      </Box>

      <Box w={'full'} h={'100vh'}>
        <Image src={img2} />
        <Heading bgColor={'whiteAlpha.600'} color={'white'} {...headingOptions}>
          Gaming is future
        </Heading>
      </Box>

      <Box w={'full'} h={'100vh'}>
        <Image src={img3} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Gaming on Console
        </Heading>
      </Box>

      <Box w={'full'} h={'100vh'}>
        <Image src={img4} />
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Night Life Is Cool
        </Heading>
      </Box>
    </Carousel>
  );
};
export default Home;
