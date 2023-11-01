import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const skillsData = [
  {
    id: 1,
    name: "HTML",
    imgSrc: "../assets/html-1.svg",
  },
  {
    id: 2,
    name: "CSS",
    imgSrc: "../assets/css-3.svg",
  },
  {
    id: 3,
    name: "JavaScript",
    imgSrc: "../assets/javascript-1.svg",
  },
  {
    id: 4,
    name: "React",
    imgSrc: "../assets/react-2.svg",
  },
  {
    id: 5,
    name: "Redux",
    imgSrc: "../assets/redux.svg",
  },
  {
    id: 6,
    name: "MongoDB",
    imgSrc: "assets/img/mongodb-icon-1.svg",
  },
  {
    id: 7,
    name: "Node.js",
    imgSrc: "assets/img/nodejs-2.svg",
  },
  {
    id: 8,
    name: "Mongoose",
    imgSrc: "assets/img/mongoose-1.svg",
  },
  {
    id: 9,
    name: "Chakra UI",
    imgSrc: "assets/img/chakraui_logo.png",
  },
  {
    id: 10,
    name: "GIT",
    imgSrc: "assets/img/github.svg",
  },
  {
    id: 11,
    name: "Postman",
    imgSrc: "assets/img/postman.svg",
  },
];

const Skills = () => {
  return (
    <section id="skills">
      <Text fontSize="4xl" fontWeight="600" textAlign="center" id="skills1" className="about section" mt="200px">
        Skills
      </Text>

      <Flex wrap="wrap" justify="center" align="center" mt="20px">
        {skillsData.map((skill) => (
          <Box key={skill.id} className="skills-card" textAlign="center" width={{ base: "50%", sm: "30%", md: "20%" }} mb="20px">
            <Image src={skill.imgSrc} alt={skill.name} className="skills-card-img" />
            <Text className="skills-card-name" mt="10px">
              {skill.name}
            </Text>
          </Box>
        ))}
      </Flex>
    </section>
  );
};

export default Skills;
