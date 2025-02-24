import React from 'react';
import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';

function ProjectCard({ project }) {
  return (
    <Box
      bg="gray.800"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      borderColor="gray.700"
      boxShadow="lg"
    >
      {project?.image && (
        <Image
          src={project.image}
          alt={project.title}
          objectFit="cover"
          w="100%"
          h="200px"
        />
      )}
      <Box p={4}>
        <Heading as="h3" size="md" mb={2}>
          {project.title}
        </Heading>
        <Text fontSize="sm" mb={4}>
          {project.bodyText}
        </Text>
        {project?.links?.length > 0 && (
          <Stack direction="row" wrap="wrap">
            {project.links.map((link) => (
              <Button
                key={link.href}
                variant="outline"
                colorScheme="blue"
                size="sm"
                onClick={() => window.open(link.href, '_blank')}
              >
                {link.text}
              </Button>
            ))}
          </Stack>
        )}
      </Box>
    </Box>
  );
}

export default ProjectCard;
