import React, { useState } from 'react';
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Text,
  IconButton,
  Flex,
} from '@chakra-ui/react';
import { FaGithub, FaTelegram, FaInstagram } from 'react-icons/fa';
import { motion} from 'framer-motion';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert('fill all required fields.');
      return;
    }
    console.log('Form data:', form);
    setForm({ name: '', email: '', subject: '', message: '' });
  };
  return (
    <Box
      as={motion.div}
      key="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      bg="black"        
      color="white"
      minH="100vh"       
      py={10}
      px={[4, 16]}
      mt='10vh'
    >
      <Heading textAlign="center" mb={6} fontSize='3rem'>
        Contact Me
      </Heading>
      <Flex
        direction={['column', 'row']}
        justify="center"
        align="start"
        gap={8}
      >
        <Box
          flex="1"
          p={6}
          borderRadius="md"
          boxShadow="lg"
          maxW='30vw'
        >
          <Heading size="md" mb={4} fontSize='2rem'>
            Send A Message
          </Heading>

          <form onSubmit={handleSubmit}>
            <FormControl mb={3}>
              <FormLabel fontSize='1.5rem'>Your Name</FormLabel>
              <Input
                borderRadius='none'
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mb={3}>
              <FormLabel fontSize='1.5rem'>Your Email</FormLabel>
              <Input
                borderRadius='none'
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mb={3}>
              <FormLabel fontSize='1.5rem'>Subject</FormLabel>
              <Input
                borderRadius='none'
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mb={3}>
              <FormLabel fontSize='1.5rem'>Message</FormLabel>
              <Textarea
                borderRadius='none'
                name="message"
                placeholder="Your message..."
                value={form.message}
                onChange={handleChange}
                rows={5}
              />
            </FormControl>

            <Button
              type="submit"
              colorScheme="black"
              border='1px solid white'
              borderRadius='none'
              mt={4}
              _hover={{
                color: 'black',
                background: 'white',
              }}
            >
              Send Message
            </Button>
          </form>
        </Box>

        <Box
          flex="1"
          p={6}
          borderRadius="md"
          boxShadow="lg"
          maxW='30vw'
        >
          <Heading size="md" mb={4} fontSize='2rem'>
            Get in Touch
          </Heading>
          <Text mb={4} fontSize='1.2rem'>
            Whether you want to get in touch, talk about a project collaboration, 
            or just say hi, I'd love to hear from you. Simply fill the form 
            and send me an email.
          </Text>
          <Flex gap={4} mt={4}>
            <IconButton
              as="a"
              href="https://github.com/blxitze"
              target="_blank"
              rel="noreferrer"
              icon={<FaGithub />}
              aria-label="GitHub"
              colorScheme="white"
              border='1px solid white'
            />
            <IconButton
              as="a"
              href="https://instagram.com/auyraznliev"
              target="_blank"
              rel="noreferrer"
              icon={<FaInstagram />}
              aria-label="Instagram"
              colorScheme="white"
              border='1px solid white'
            />
            <IconButton
              as="a"
              href="https://t.me/bleitzzze"
              target="_blank"
              rel="noreferrer"
              icon={<FaTelegram />}
              aria-label="Telegram"
              colorScheme="white"
              border='1px solid white'
            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Contact;
