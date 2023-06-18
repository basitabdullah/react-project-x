import React from 'react';
import {
  Box,
  Button,
  HStack,
  Heading,
  Stack,
  VStack,
  Input,
  Text,
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size={'md'} textTransform={'uppercase'} textAlign={["center","left"]}>
            Subscribe to get updates
          </Heading>
          <HStack borderBottom={'2px solid gray'} py={'3'}>
            <Input
              placeholder="Enter Your Email"
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor='none'
            ></Input>
            <Button
              p={'0'}
              color={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={"20"} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid gray']}
          borderRight={['none', '1px solid gray']}
        >
          <Heading textAlign={'center'} textTransform={'uppercase'}>
            Video Hub
          </Heading>
          <Text>All rights reserved</Text>
        </VStack>

        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>

          <Button variant={'link'} colorScheme={'whiteAlpha'}>
            <a target={"blank"} href="https://github.com/basitabdullah/react-project-x">
              Youtube
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'whiteAlpha'}>
            <a target={"blank"} href="https://github.com/basitabdullah/react-project-x">
              Instagram
            </a>
          </Button>

          <Button variant={'link'} colorScheme={'whiteAlpha'}>
            <a target={"blank"} href="https://github.com/basitabdullah/react-project-x">
              Github
            </a>
          </Button>
          
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
