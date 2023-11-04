import React from "react";
import { Box, Heading, Flex, Image, Text } from "@chakra-ui/react";
import htmlImg from "../assets/html.png";
import cssImg from "../assets/css-3.svg";
import javascriptImg from "../assets/javascript-1.svg";
import reactImg from "../assets/react-2.svg";
import reduxImg from "../assets/redux.svg";
import mongodbImg from "../assets/mongodb-icon-1.svg";
import nodejsImg from "../assets/nodejs-2.svg";
import mongooseImg from "../assets/mongoose-1.svg";
import chakraUIImg from "../assets/chakraui_logo.png";
import gitImg from "../assets/github.svg";
import postmanImg from "../assets/postman.svg";

const Skill = () => {
  return (
    <Box
      id="skills"
      p="15"
      w={{ base: "100%", lg: "80%", md: "50%" }}
      m={"auto"}
      style={{ border: "1px solid" }}
      mt={59}
    >
      <Heading
        id="skills1"
        size="md"
        mb="4"
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="600"
        textAlign="center"
      >
        Skills
      </Heading>
      <Flex flexWrap="wrap" justifyContent="space-around" gap={-20}>
        {skillsData.map((skill, index) => (
          <Box
            key={index}
            className="skills-card"
            margin={"auto"}
            width={["40%", "25%", "15%"]} // Adjust the width for different screen sizes
            p="4"
            style={{ border: "1px solid" }}
            mt={5}
            borderRadius={"50"}
          >
            <Image
              className="skills-card-img"
              src={skill.icon}
              alt={`Skill ${index + 1}`}
              mx="auto"
              boxSize="100px"
            />
            <Text className="skills-card-name" textAlign="center" mt="2">
              {skill.name}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Skill;

const skillsData = [
  { name: "HTML", icon: htmlImg },
  { name: "CSS", icon: cssImg },
  { name: "JavaScript", icon: javascriptImg },
  { name: "React", icon: reactImg },
  { name: "Redux", icon: reduxImg },
  { name: "Mongo DB", icon: mongodbImg },
  { name: "Node.js", icon: nodejsImg },
  { name: "Mongoose", icon: mongooseImg },
  { name: "Chakra UI", icon: chakraUIImg },
  { name: "GIT", icon: gitImg },
  { name: "Postman", icon: postmanImg },
];
