import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  SimpleGrid,
  Button,
  Center,
  Select,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { motion} from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

function Projects({ header }) {
  const allProjects = useSelector((state) => state.projects.allProjects);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedTech, setSelectedTech] = useState('all');
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    if (selectedTech === 'all') {
      setFilteredProjects(allProjects);
    } else {
      const newList = allProjects.filter((proj) =>
        proj.techStack?.includes(selectedTech)
      );
      setFilteredProjects(newList);
    }
  }, [selectedTech, allProjects]);

  const numberOfItems = showMore ? filteredProjects.length : 6;

  return (
    <Box py={8} px={[4, 16]} mt='10vh'
    as={motion.div}
    key="projects"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
      <Heading mb={6} textAlign="center">
        {header || 'My Projects'}
      </Heading>

      <Center mb={4}>
        <Select
          placeholder="Select technology"
          value={selectedTech}
          onChange={(e) => setSelectedTech(e.target.value)}
          width="200px"
        >
          <option value="all">All</option>
          <option value="React">React</option>
          <option value="Python">Python</option>
          <option value="Django">Django</option>
          <option value=".NET">.NET</option>
          <option value="HTML/CSS">HTML/CSS</option>
        </Select>
      </Center>

      <SimpleGrid columns={[1, 2, 3]} spacing={6}>
        {filteredProjects
          .slice(0, numberOfItems)
          .map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
      </SimpleGrid>
      {!showMore && filteredProjects.length > 6 && (
        <Center mt={6}>
          <Button colorScheme="white"
          border='1px solid white'
          borderRadius='none'
          onClick={() => setShowMore(true)}
          _hover={{
            color: 'black',
            background: 'white',
          }}
          >
            Show More
          </Button>
        </Center>
      )}
    </Box>
  );
}

export default Projects;
