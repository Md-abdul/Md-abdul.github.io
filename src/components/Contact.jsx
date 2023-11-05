import React from 'react';
import { Box, Text, Flex, Link, Icon } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <Box id="contact" p={4} textAlign="center">
      <Text as="h4" fontSize="xl" id="contact-title" mb={4}>
        Contact
      </Text>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection={{ base: 'column', md: 'row' }}
        mt={4}
      >
        <Link
          id="contact-github"
          href="https://github.com/Md-abdul"
          isExternal
          _hover={{ transform: 'scale(1.1)' }}
          transition="transform 0.2s"
          m={2}
        >
          <Icon as={FaGithub} boxSize={10} />
        </Link>
        <Link
          id="contact-linkedin"
          href="https://www.linkedin.com/in/md-abdul-qadir-10673b246/"
          isExternal
          _hover={{ transform: 'scale(1.1)' }}
          transition="transform 0.2s"
          m={2}
        >
          <Icon as={FaLinkedin} boxSize={10} />
        </Link>
        <Flex id="phone-icon" alignItems="center" m={2}>
          <Icon as={FaPhone} boxSize={8} />
          <Text id="contact-phone" ml={2}>
            +917070801382
          </Text>
        </Flex>
        <Flex id="email-icon" alignItems="center" m={2}>
          <Icon as={FaEnvelope} boxSize={8} />
          <Text id="contact-email" ml={2}>
            mdabdulq62@gmail.com
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Contact;
