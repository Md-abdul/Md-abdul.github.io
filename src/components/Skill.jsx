import React, { useEffect } from "react";
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
import nextjs from "../assets/next-js.png";
import axios from "../assets/axios.png";
import routerDom from "../assets/react-router-dom.png";
import typeScript from "../assets/typescript-2.svg";
import vscode from "../assets/visual-studio-code-1.svg";
import styledcomponent from "../assets/atom.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Skill = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  return (
    <Box
      id="skills"
      p="15"
      w={{ base: "100%", lg: "80%", md: "50%" }}
      m={"auto"}
      mt={69}
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
      <Flex flexWrap="wrap" justifyContent="space-between">
        {skillsData.map((skill, index) => (
          <Box
            key={index}
            className="skills-card"
            margin={"auto"}
            width={["40%", "20%", "15%"]} // Adjust the width for different screen sizes
            p="4"
            boxShadow="-2px -2px 5px #fff, 2px 2px 5px #babecc"
            mt={10}
            borderRadius={"20"}
            cursor={"pointer"}
            gap={10}
            data-aos="zoom-in-down"
          >
            <Image
              className="skills-card-img"
              src={skill.icon}
              alt={`Skill ${index + 1}`}
              mx="auto"
              boxSize="100px"
              // boxShadow={
              //   "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
              // }
              boxShadow=" inset 0 0 0.5px 1px hsla(0, 0%,
             100%, 0.075),
             /* shadow ring 👇 */
             0 0 0 1px hsla(0, 0%, 0%, 0.05),
             /* multiple soft shadows 👇 */
             0 0.3px 0.4px hsla(0, 0%, 0%, 0.02),
             0 0.9px 1.5px hsla(0, 0%, 0%, 0.045),
             0 3.5px 6px hsla(0, 0%, 0%, 0.09)"
              p={2}
              borderRadius={30}
              _hover={{
                color: "pink.400",
                background: "gray.50",
                transform: "scale(1.2)",
              }}
              // box-shadow: ;
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
  { name: "TypeScript", icon: typeScript },
  { name: "Next JS", icon: nextjs },
  { name: "React", icon: reactImg },
  { name: "Redux", icon: reduxImg },
  { name: "React-Router-Dom", icon: routerDom },
  { name: "Mongo DB", icon: mongodbImg },
  { name: "Node.js", icon: nodejsImg },
  { name: "Mongoose", icon: mongooseImg },
  { name: "Axios", icon: axios },
  { name: "Chakra UI", icon: chakraUIImg },
  { name: "Styled Component", icon: styledcomponent },
  { name: "GIT", icon: gitImg },
  { name: "Postman", icon: postmanImg },
  { name: "VsCode", icon: vscode },
];

/*
34% 66% 32% 68% / 54% 36% 64% 46% 
 */
