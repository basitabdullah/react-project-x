import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack
} from '@chakra-ui/react'
import { BiAlignLeft } from "react-icons/bi"
import { Link } from "react-router-dom"


const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button
        pos={"fixed"}
        zIndex={"overlay"}
        top={"4"}
        left={"4"}
        colorScheme='purple'
        padding={"0"}
        w={"10"}
        height={"10"}
        borderRadius={"full"}
        onClick={onOpen}

      >
        <BiAlignLeft size={"20"} />
      </Button>

      <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay></DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Video Hub</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={"flex-start"}>
              <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                <Link to={"/"}>Home</Link>
              </Button>

              <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                <Link to={"/videos"}>Videos</Link>
              </Button>

              <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                <Link to={"/videos?category=free"}>Free Videos</Link>
              </Button>

              <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                <Link to={"/uploads"}>Upload Video</Link>
              </Button>
            </VStack>
            <HStack pos={"absolute"} bottom={"10"} left={"0"} w={'full'} justifyContent={"center"}>
              <Button onClick={onClose} colorScheme='purple'>
                <Link to={"/login"}>Login</Link>
              </Button>

              <Button onClick={onClose} colorScheme='purple' variant={"outline"}>
                <Link to={"/signup"} >Sign up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>


    </>
  )
}

export default Header