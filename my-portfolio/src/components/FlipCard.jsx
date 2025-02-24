import React from 'react';
import {
    Box,
    Text,
  } from '@chakra-ui/react';

function FlipCard({ icon, title, text }) {
  return (
    <Box
      position="relative"
      width="250px"
      height="250px"
      mx="auto"
      mt={4}
      sx={{
        perspective: '1000px',
      }}
    >
      <Box
        width="100%"
        height="100%"
        position="relative"
        sx={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s',
          '&:hover': {
            transform: 'rotateY(180deg)',
          },
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          bg="gray.700"
          borderRadius="md"
          position="absolute"
          width="100%"
          height="100%"
          sx={{
            transform: 'rotateY(0deg)',
            backfaceVisibility: 'hidden',
          }}
        >
          {icon}
          <Text mt={2} fontWeight="bold">
            {title}
          </Text>
        </Box>

        <Box
          position="absolute"
          width="100%"
          height="100%"
          bg="gray.600"
          borderRadius="md"
          display="flex"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          px={4}
          sx={{
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
          }}
        >
          <Text fontSize="sm">{text}</Text>
        </Box>
      </Box>
    </Box>
  );
}

export default FlipCard;