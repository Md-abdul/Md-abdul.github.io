import React from "react";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import profileImage from "../assets/abdulreminpic.jpeg";
import Md_Abdul_Resume from "../assets/Md_Abdul_Qadir_Resume.pdf.pdf"
const About = () => {
  return (
    <>
      {/* <Box> */}
      <Text
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="600"
        textAlign="center"
        id="about"
        className="about section"
        mt={{ base: "200px" }}
        // mt={'0.001px'}
      >
        About Me
      </Text>

      <Flex
        direction={{ base: "column", md: "row-reverse" }}
        justify="center"
        align="center"
        width="100%"
        id="about"
        height={{ base: "auto", md: "60vh", lg: "55vh" }}
        mt={{ lg: "-20px" }}
        gap={{ lg: "-100" }}
      >
        <Box
          data-aos="fade-right"
          width={{ base: "100%", md: "50%", lg: "35%" }}
          marginY={{ base: "20px", md: 0 }}
        >
          <Image
            className="home-img"
            margin="auto"
            border="2px solid grey"
            borderRadius="50%"
            w={{ base: 200, md: 300 }}
            h={{ base: 200, md: 300 }}
            src={profileImage}
            alt="User Profile"
          />
        </Box>
        <Box
          padding={{ base: "20px", md: "40px", lg: "50px" }}
          marginY={{ base: "20px", md: "20px", lg: "0px" }}
          alignItems="center"
          alignContent="center"
          width={{ base: "100%", sm: "90%", md: "50%", lg: "50%" }}
          fontSize={{ base: "1rem", md: "1.3rem" }}
          data-aos="fade-left"
        >
          <Text id="user-detail-intro">
            Experienced Full Stack Web Developer with expertise in JavaScript
            and the MERN stack. Skilled in RESTful API development and efficient
            MongoDB database modeling, translating project requirements into
            functional web applications. I excel in prompt engineering,
            mastering the Angular framework and leveraging ChatGPT conversation
            models to create innovative solutions, such as a project management
            app. My commitment to staying at the forefront of technology ensures
            a dynamic and effective approach to software development, delivering
            impactful user experiences.
          </Text>
        </Box>
      </Flex>
      
    </>
  );
};

export default About;
