import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import miniAdmin from "../assets/mini-admin.png";
import reduxmini from "../assets/redux-mini.png";
import tictoe from "../assets/tic-toe-mini.png";
import weather from "../assets/wether-mini.png";
import minilms from "../assets/frontend-mini-lms.png"
import saviour from "../assets/saviour-landing-page.png"
import timemanger from "../assets/time-manager.png"
import "../style/MiniProjects.css"; 
import AOS from "aos";
import "aos/dist/aos.css"; 
//
const projects = [
  {
    image: minilms,
    name: "Mini LMS",
    github: "https://github.com/Md-abdul/frontend-mini-lms",
    deployment: "https://mini-lms.netlify.app/",
  },
  {
    image: saviour,
    name: "Saviour Landing Page",
    github: "https://github.com/Md-abdul/Md-abdul-Frontend-Developer",
    deployment: "https://65f1b2ff68d5a72386f79e15--celebrated-syrniki-cf6349.netlify.app/",
  },
  {
    image: miniAdmin,
    name: "Mini Admin",
    github: "https://github.com/Md-abdul/Mini-Admin",
    deployment: "https://echoadmin.netlify.app/",
  },
  {
    image: reduxmini,
    name: "Redux Mini Project",
    github: "https://github.com/Md-abdul/Redux-mini-project",
    deployment: "https://reduxmini.netlify.app/",
  },
  {
    image: weather,
    name: "Weather App",
    github: "https://github.com/Md-abdul/weather-app",
    deployment: "https://weather5698.netlify.app/",
  },
  {
    image: tictoe,
    name: "Tic-tac-toe",
    github: "https://github.com/Md-abdul/Tic-Tac-Toe-Game",
    deployment:
      "https://64ce0ce974696f2b984b9c3b--sparkling-bunny-27d3f8.netlify.app/",
  },
  {
    image: timemanger,
    name: "Time Manger",
    github: "https://github.com/Md-abdul/Time-Manager",
    deployment: "https://65658ac68476ed3408a37038--subtle-speculoos-63396f.netlify.app/",
  },
  
];

export const MiniProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(2);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2500 });
    const updateItemsPerSlide = () => {
      setItemsPerSlide(window.innerWidth < 768 ? 1 : 2);
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const handlePrev = () => {
    if (!transitioning) {
      setTransitioning(true);
      setTimeout(() => {
        const newIndex = Math.max(0, currentIndex - itemsPerSlide);
        setCurrentIndex(newIndex);
        setTransitioning(false);
      }, 500); 
    }
  };

  const handleNext = () => {
    if (!transitioning) {
      setTransitioning(true);
      setTimeout(() => {
        const newIndex = Math.min(
          currentIndex + itemsPerSlide,
          projects.length - itemsPerSlide
        );
        setCurrentIndex(newIndex);
        setTransitioning(false);
      }, 500); 
    }
  };

  return (
    <Box width="100%" maxWidth="1200px" margin="0 auto" padding="20px">
      <Heading
        id="project-title"
        as="h4"
        mt="5%"
        size="md"
        mb="4"
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="600"
        textAlign="center"
      >
       Mini Projects 👇
      </Heading>
      <Box
        className={`slide-container ${transitioning ? "transitioning" : ""}`}
        p={5}
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" mt={10}>
          {projects
            .slice(currentIndex, currentIndex + itemsPerSlide)
            .map((project, index) => (
              <Box
                key={index}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p="5"
                className="slide"
                boxShadow="-2px -2px 5px #fff, 2px 2px 5px #babecc"
                data-aos="flip-right" 
              >
                <Image
                  borderRadius={10}
                  boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                  src={project.image}
                  alt={project.name}
                  objectFit="cover"
                  mx="auto"
                />
                <Stack mt="4" textAlign="center">
                  <Text fontWeight="bold" fontSize="xl">
                    {project.name}
                  </Text>
                  <Stack direction="row" spacing="10" justify="center" mt={5}>
                    <Link
                      href={project.github}
                      color="teal.500"
                      isExternal
                      display="flex"
                      alignItems="center"
                    >
                      <FaGithub /> <Text ml="2">GitHub</Text>
                    </Link>
                    <Link
                      href={project.deployment}
                      color="teal.500"
                      isExternal
                      display="flex"
                      alignItems="center"
                    >
                      <FaExternalLinkAlt /> <Text ml="2">Deployment</Text>
                    </Link>
                  </Stack>
                </Stack>
              </Box>
            ))}
        </SimpleGrid>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="4">
        <Button
          onClick={handlePrev}
          leftIcon={<ChevronLeftIcon />}
          colorScheme="teal"
          isDisabled={currentIndex === 0 || transitioning}
        >
          Previous
        </Button>
        <Button
          onClick={handleNext}
          rightIcon={<ChevronRightIcon />}
          colorScheme="teal"
          isDisabled={
            currentIndex + itemsPerSlide >= projects.length || transitioning
          }
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};
