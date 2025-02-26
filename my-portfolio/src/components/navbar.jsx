import React, { useState, useEffect } from 'react';
import { Flex, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 0) {
        setIsScrolled(true)
      } 
      else {
        setIsScrolled(false)
      }
    };

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, [])

  return (
    <Flex
      as="nav"
      w='100%'
      h='10%'
      bg={isScrolled ? 'black' : 'transparent'}
      color="white"
      align="center"
      justify="flex-end"
      gap={12}
      py={6} 
      position="fixed"
      top="0"
      zIndex="1000"
      pt='5vh'
      pr='20vw'
      transition="background-color 0.3s"
    >
      <ChakraLink
        as={Link}
        to="/"
        fontSize="xl"
        fontWeight="semibold"
        color="white"
        position="relative"
        _after={{
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: 0,
          height: '2px',
          bg: 'white',
          transition: 'width 0.3s ease',
        }}
        _hover={{
          _after: {
            width: '70%',
          },
        }}
      >
        HOME
      </ChakraLink>
      <ChakraLink
        as={Link}
        to="/about"
        fontSize="xl"
        fontWeight="semibold"
        color="white"
        position="relative"
        _after={{
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: 0,
          height: '2px',
          bg: 'white',
          transition: 'width 0.3s ease',
        }}
        _hover={{
          _after: {
            width: '70%',
          },
        }}
      >
        ABOUT
      </ChakraLink>
      <ChakraLink
        as={Link}
        to="/projects"
        fontSize="xl"
        fontWeight="semibold"
        color="white"
        position="relative"
        _after={{
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: 0,
          height: '2px',
          bg: 'white',
          transition: 'width 0.3s ease',
        }}
        _hover={{
          _after: {
            width: '70%',
          },
        }}
      >
        PROJECTS
      </ChakraLink>
      <ChakraLink
        as={Link}
        to="/contact"
        fontSize="xl"
        fontWeight="semibold"
        color="white"
        position="relative"
        _after={{
          content: '""',
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: 0,
          height: '2px',
          bg: 'white',
          transition: 'width 0.3s ease',
        }}
        _hover={{
          _after: {
            width: '70%',
          },
        }}
      >
        CONTACT
      </ChakraLink>
    </Flex>
  );
}

export default Navbar;
