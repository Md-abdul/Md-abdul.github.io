import "../style/home.css";
import { AiOutlineDownload } from "react-icons/ai";
import Md_Abdul_Qadir_Resume from "../resume/Md_Abdul_Qadir_Resume.pdf.pdf";
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
const rotatingText = "ull Stack Web Developer";

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
        // h={{ base: "80vh", lg: "100vh" }}
        mb={-20}
        id="home"
        align={"center"}
        justify={"center"}
        // gap={3}
        // mt={{ base: "60px", md: "40px", lg: "5px", sm: "0px" }}
        flexDir={{ base: "column-reverse", lg: "row" }}
        ml={{ lg: "20px" }}
        mt={"11%"}
      >
        <Box
          maxWidth={{ base: "100%", lg: "40%" }}
          flexDir="column"
          gap="1rem"
          style={isSmallScreen ? { marginTop: "-5px", marginLeft:'15px' } : null}
          ml={{lg:'50px'}}
        >
          <Heading
            id="user-detail-name"
            fontSize={isSmallScreen ? "xl" : "5xl"}
            fontWeight={"bold"}
            color={"rgb(0, 172, 238)"}
          >
            Hi, I am Md Abdul Qadir
          </Heading>
          <Text fontSize={isSmallScreen ? "lg" : "2xl"} fontWeight={"semibold"}>
            F{text} !!
          </Text>
          <Text fontSize={"xl"} >
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
                  "https://drive.google.com/file/d/1M-rXFMO-O_nrT32l0ZAJa1H-iU3tI2Ub/view?usp=sharing",
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
              <span>
                Click !!
              </span>
              <span>
                Resume 
              </span>
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
                _hover={{ color: "rgb(0, 172, 238)" }}
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
                _hover={{ color: "rgb(0, 172, 238)" }}
              />
            </a>
          </HStack>
        </Box>

        <Box
          style={isSmallScreen ? { marginTop: "50px" } : null}
        >
          <Image
            className="home-img"
            src={homeImage}
            style={
              isSmallScreen
                ? { maxWidth: "90%" }
                : isMediumScreen
                ? { maxWidth: "20%" }
                : null
            }
          ></Image>
        </Box>
      </Flex>
    </div>
  );
};

