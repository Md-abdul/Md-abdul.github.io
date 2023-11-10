

import React from "react";
import { Box, Text, Flex, Link, Icon, Tooltip } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <Box id="contact" p={4} textAlign="center">
      <Text
        as="h4"
        id="contact-title"
        mb={4}
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="600"
        textAlign="center"
        mt={20}
      >
        Contact
      </Text>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
        mt={4}
      >
        <Tooltip label="GitHub" fontSize="md">
          <Link
            id="contact-github"
            href="https://github.com/Md-abdul"
            isExternal
            _hover={{ transform: "scale(1.1)" }}
            transition="transform 0.2s"
            m={2}
          >
            <Icon as={FaGithub} boxSize={10} />
          </Link>
        </Tooltip>
        <Tooltip label="LinkedIn" fontSize="md">
          <Link
            id="contact-linkedin"
            href="https://www.linkedin.com/in/md-abdul-qadir-10673b246/"
            isExternal
            _hover={{ transform: "scale(1.1)" }}
            transition="transform 0.2s"
            m={2}
          >
            <Icon as={FaLinkedin} boxSize={10} />
          </Link>
        </Tooltip>
        <Flex
          id="phone-email-icons"
          alignItems="center"
          m={2}
          ml={{ base: 0, md: 4 }}
          mt={{ base: 4, md: 0 }}
        >
          <Tooltip label="Phone" fontSize="md">
            <Icon as={FaPhone} boxSize={8} />
          </Tooltip>
          <Text id="contact-phone" ml={2}>
            +917070801382
          </Text>
          <Tooltip label="Email" fontSize="md">
            <Icon as={FaEnvelope} boxSize={8} ml={2} />
          </Tooltip>
          <Link id="contact-email" href="mailto:mdabdulq62@gmail.com" ml={2} target="_blank">
            mdabdulq62@gmail.com
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Contact;
