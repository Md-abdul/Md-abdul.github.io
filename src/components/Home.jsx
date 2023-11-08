import '../style/home.css'
import Md_Abdul_Qadir_Resume from "../resume/Md Abdul Qadir-Full Stack Web Developer (1).pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import {
  Heading,
  Flex,
  Text,
  Box,
  Button,
  Image,
  useMediaQuery,
  Icon,
  HStack,
} from "@chakra-ui/react";
import homeImage from "../assets/HomeImage.gif";
const rotatingText = "Full Stack Web Developer";


export const Home = () => {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen] = useMediaQuery("(max-width: 767px)");
  const [isMediumScreen] = useMediaQuery("(max-width: 950px)");

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < rotatingText.length) {
        setText((prevText) => prevText + rotatingText[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        // Clear the text and start over
        setText("");
        setCurrentIndex(0);
      }
    }, 200); // Change text every 200 milliseconds

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div>
      <Flex
        h={{ base: "80vh", lg: "100vh" }}
        mb={-20}
        id="home"
        align={"center"}
        justify={"center"}
        gap={50}
        mt={{base:"10px", md:'180px',lg:'-12px', sm:'-300px'}}
        flexDir={{ base: "column-reverse", lg: "row" }}
        ml={{ lg: "20px" }}
        // mt={{md:'100px', sm:'30px'}}
      >
        <Box
          maxWidth={{ base: "100%", lg: "40%" }}
          flexDir="column"
          gap="1rem"
          style={isSmallScreen ? { marginTop: "-32px" } : null}
        >
          <Heading
            id="user-detail-name"
            fontSize={isSmallScreen ? "xl" : "5xl"}
            fontWeight={"bold"}
            color={"teal"}
          >
            Hi, I am Md Abdul Qadir
          </Heading>
          <Text fontSize={isSmallScreen ? "lg" : "2xl"} fontWeight={"semibold"}>
            {text}
          </Text>
          <Text fontSize={"xl"} fontWeight={"extrabold"}>
            Detail-orientated full-stack web developer, who loves working with
            tech stacks like HTML, CSS, JavaScript, and React, etc. and
            passionate about developing user-friendly web applications. Team
            player with an eye for detail. An enthusiastic individual with zeal
            to grow, curious to explore and learn new things, and dedicated to
            company growth.
          </Text>

          <HStack mt={4} spacing={4} justify={"center"}>
            <Button
              id="resume-button-2"
              className="nav-link resume"
              onClick={() => {
                // Open the resume in a new tab
                window.open(
                  "https://drive.google.com/file/d/1kPQzRRLng5ZdCBcira_ARtw0-eWzXYdL/view?usp=sharing",
                  "_blank"
                );

                // Download the resume
                const link = document.createElement("a");
                link.href = Md_Abdul_Qadir_Resume;
                link.setAttribute("download", "Md_Abdul_Qadir_Resume.pdf");
                link.style.display = "none";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
             <span>Click!</span><span>Resume</span>
            </Button>

            <a
              href="https://github.com/Md-abdul"
              target="_blank"
              rel="noopener"
            >
              <Icon
                as={FaGithub}
                boxSize={8}
                color="gray.600"
                _hover={{ color: "teal.500" }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/md-abdul-qadir-10673b246/"
              target="_blank"
              rel="noopener"
            >
              <Icon
                as={FaLinkedin}
                boxSize={8}
                color="gray.600"
                _hover={{ color: "teal.500" }}
              />
            </a>
          </HStack>
        </Box>
        <Box
          style={isSmallScreen ? { marginTop: "190px" } : null}
          mt={{ md: "50px" }}
        >
          <Image
            className="home-img"
            src={homeImage}
            style={
              isSmallScreen
                ? { maxWidth: "100%" }
                : isMediumScreen
                ? { maxWidth: "70%" }
                : null
            }
            ml={{md:'80px'}}
            // mt={{md:'20px'}}
          ></Image>
        </Box>
      </Flex>
    </div>
  );
};
