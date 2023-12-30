// Footer.js
import React from "react";
import { Box, Flex, Link, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  const { colorMode } = useColorMode();
  const linkColor = useColorModeValue("teal.500", "teal.300");

  return (
    <Box
      as="footer"
      borderTop="1px"
      borderColor={useColorModeValue("gray.200", "gray.600")}
      py="4"
      mt="8"
      textAlign="center"
    >
      <Flex
        align="center"
        justify="center"
        direction={{ base: "row", md: "row" }}
        gap="4"
      >
        
        <Link
          href="https://github.com/your-username/your-portfolio-repo"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub size="24" color={linkColor} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/your-linkedin-profile"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin size="24" color={linkColor} />
        </Link>
        <Link
          href="https://twitter.com/your-twitter-handle"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <FaTwitter size="24" color={linkColor} />
        </Link>
        <Link
          href="mailto:your.email@example.com"
          title="Email"
        >
          <IoMail size="24" color={linkColor} />
        </Link>
        
      </Flex>

      <Text mt="4" fontSize="sm" color="gray.500" align="center">
        © {new Date().getFullYear()} Md Abdul Qadir. All rights reserved. ❤️❤️
      </Text>

      {/* <SkillIcons /> Assuming you have a component to display your skills with icons */}
    </Box>
  );
};

export default Footer;
