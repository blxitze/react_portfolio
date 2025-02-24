import React, { useState } from 'react';
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Button,
  SimpleGrid,
  IconButton
} 
from '@chakra-ui/react';
import FlipCard from '../components/FlipCard';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSync } from 'react-icons/fa';
import { FaReact, FaGithub, FaCss3Alt } from 'react-icons/fa';
import { SiPython, SiDjango, SiFigma } from 'react-icons/si';


function About() {
  const [showTools, setShowTools] = useState(false);

  const tools = [
    { id: 1, icon: <FaReact size="8rem" color="white" />, title: 'React', text: 'This project was made on React :D' },
    { id: 2, icon: <SiDjango size="8rem" color="white" />, title: 'Django', text: 'I’m not bad at it, look in the PROJECTS section' },
    { id: 3, icon: <SiFigma size="8rem" color="white" />, title: 'Figma', text: 'Here I make design layouts and prototypes' },
    { id: 4, icon: <SiPython size="8rem" color="white" />, title: 'Python', text: 'My first programming language...' },
    { id: 5, icon: <FaGithub size="8rem" color="white" />, title: 'GitHub', text: 'А как без владения Git-ом?' },
    { id: 6, icon: <FaCss3Alt size="8rem" color="white" />, title: 'CSS3', text: 'And here are the styles and layout' },
  ];

  return (
    <Box
      as={motion.div}
      key="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      bg="black"
      color="white"
      minH="100vh"
      py={8}
      px={[4, 16]}
      position="relative"
      overflow="hidden"
    >
      <IconButton
        icon={<FaSync />}
        colorScheme="#111"
        aria-label="Toggle Tools"
        position="absolute"
        w='60px'
        h='60px'
        top="50vh"
        right="4"
        borderRadius="full"
        border='2px solid white'
        onClick={() => setShowTools(prev => !prev)}
      />

      <AnimatePresence mode="wait">
        {!showTools && (
          <motion.div
            key="aboutBlock"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Text
              fontSize={['4xl', '4xl']}
              fontWeight="bold"
              color="white"
              position="absolute"
              top="10%"
              left="50%"
              transform="translateX(-50%)"
              zIndex={0}
            >
              ABOUT ME
            </Text>
            <Text
              fontSize={['4xl', '9xl']}
              fontWeight="bold"
              color="rgba(255,255,255,0.08)"
              position="absolute"
              top="10%"
              left="50%"
              transform="translateX(-50%)"
              zIndex={0}
            >
              ABOUT ME
            </Text>

            <Flex
              direction={['column', 'row']}
              align="center"
              justify="center"
              zIndex={1}
              position="relative"
              mt='120px'
              mb='100px'
              pt="17vh"
              height="80vh"
            >
              <Box textAlign="center" mb={[8, 0]}>
                <Image
                  src="portfolioahhface.jpg"
                  alt="My face"
                  maxW="400px"
                  minH="600px"
                  objectFit="cover"
                  mx="auto"
                  borderRadius="md"
                />
              </Box>

              <Box ml={[0, 20]} mt={[4, 0]}>
                <Heading as="h2" fontSize={['3xl', '6xl']} mb={2}>
                  Hi There! I'm Ayan
                </Heading>
                <Heading as="h3" fontSize="3xl" color="gray.400" mb={4}>
                  Software Engineer
                </Heading>

                <Text mb={6} textAlign="left" fontSize="xl" color="#A0AEC0">
                  Im a Software Engineer, currently learning React.<br/>
                  Love to explore.<br/>
                </Text>

                <Text mb={5} color="#A0AEC0" whiteSpace='pre'>Birthday     :   November 17, 2008</Text>
                <Text mb={5} color="#A0AEC0" whiteSpace='pre'>Phone     :   +7 707 850 3787</Text>
                <Text mb={5} color="#A0AEC0" whiteSpace='pre'>Email     :   aian.urazaliyev@gmail.com</Text>
                <Text mb={5} color="#A0AEC0" whiteSpace='pre'>From     :   Kazakhstan</Text>
                <Text mb={5} color="#A0AEC0" whiteSpace='pre'>Language     :   English, Russian</Text>
                <Text mb={5} color="#A0AEC0" whiteSpace='pre'>Freelance      :   Available</Text>

                <Button
                  as="a"
                  href="Resume.pdf"
                  download
                  colorScheme="white"
                  border='1px solid white'
                  borderRadius='none'
                  mt={4}
                  w='100px'
                  h='40px'
                  _hover={{
                    color: 'black',
                    background: 'white',
                  }}
                >
                  Resume
                </Button>
              </Box>
            </Flex>
          </motion.div>
        )}

        {showTools && (
          <motion.div
            key="toolsBlock"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
              <Text
              fontSize={['4xl', '4xl']}
              fontWeight="bold"
              color="white"
              position="absolute"
              top="10%"
              left="50%"
              transform="translateX(-50%)"
              zIndex={0}
            >
              MY TOOLS
            </Text>
            <Text
              fontSize={['4xl', '9xl']}
              fontWeight="bold"
              color="rgba(255,255,255,0.08)"
              position="absolute"
              top="10%"
              left="50%"
              transform="translateX(-50%)"
              zIndex={0}
            >
              MY TOOLS
            </Text>

            <SimpleGrid columns={[1, 2, 3]} spacing={5} maxW="1200px" mx="auto" mt='30vh'>
              {tools.map(tool => (
                <FlipCard
                  key={tool.id}
                  icon={tool.icon}
                  title={tool.title}
                  text={tool.text}
                />
              ))}
            </SimpleGrid>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}

export default About;
