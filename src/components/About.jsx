// 
import React, { useEffect } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import profileImage from "../assets/abdulreminpic.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  return (
    <Box>
      <Text
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="600"
        textAlign="center"
        className="about-section"
        mt={{ base: "200px", lg: "200px" }}
      >
        About Me
      </Text>

      <Flex
        direction={{ base: "column", md: "row-reverse" }}
        justify="center"
        align="center"
        width="100%"
        height={{ base: "auto", md: "60vh", lg: "55vh" }}
        mt={{ lg: "-10px" }}
        gap={{ lg: "-100" }}
      >
        <Box
          width={{ base: "100%", md: "50%", lg: "35%" }}
          marginY={{ base: "20px", md: 0 }}
          data-aos="fade-down-right"
        >
          <Image
            className="home-img1"
            margin="auto"
            borderRadius="34% 66% 32% 68% / 54% 36% 64% 46%"
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
        >
          <Text id="user-detail-intro" 
          data-aos="fade-down-right"
          >
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
    </Box>
  );
};

export default About;
