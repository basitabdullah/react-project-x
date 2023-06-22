import { Container, Heading, VStack, Input, Button,Text, Avatar,Image} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={["full","96"]}
          m={'auto'}
          my={'16'}
        >
          <Avatar  alignSelf={"center"} boxSize={"32"}>
          </Avatar>

          <Input
            placeholder={'Name'}
            type="text"
            required
            focusBorderColor={'green.100'}
          />
          <Input
            placeholder={'Email'}
            type="email"
            required
            focusBorderColor={'green.100'}
          />
          <Input
            placeholder={'Password'}
            type="password"
            required
            focusBorderColor={'green.100'}
          />

         

          <Button colorScheme='purple' type='submit'>Sign Up</Button>

          <Text textAlign={"right"}>Already Signed up?{"  "} 
          <Button variant={'link'} colorScheme={"purple"}>
            <Link to={'/signup'}>Login</Link>
          </Button>
          </Text>

        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
