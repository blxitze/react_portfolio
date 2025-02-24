import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TypingEffect from '../components/TypingEffect';
import '../StarBackground.css';

function Home() {
  return (
    <Box
      as={motion.div}
      key="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="background"
      minH="100vh"
      position="relative"
    >
      <Box id="stars" />
      <Box id="stars2" />
      <Box id="stars3" />
      <Box
        position="relative"
        zIndex={1} 
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minH="100vh"
        px={4}
      >
        <Heading
          textAlign="center"
          fontSize={['3xl', '4xl', '7xl']}
          color="white"
          mb={4}
        >
          Hi, I’m{' '}
          <Box as="span" color="yellow.400">
            Urazaliev Ayan
          </Box>
        </Heading>
        <Text color="white" fontSize={['md', '3xl']} mb={8}>
          <TypingEffect />
        </Text>
        <Button
      as={Link}
      to="/about"
      width="170px"
      height="50px"
      position="relative"
      border="2px solid white"
      borderRadius="none"
      variant="solid"
      bg="transparent"
      color="white"
      overflow="hidden"
      _hover={{
        color: 'black',
        background: 'white',
      }}
    >
      VIEW MY PORTFOLIO
    </Button>
      </Box>
    </Box>
  );
}

export default Home;
