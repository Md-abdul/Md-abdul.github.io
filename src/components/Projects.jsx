import React from "react";
import { Box, Heading, Text, Flex, Button, Image } from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import peppfry from "../assets/peppfry.png";
import learnifi from "../assets/Learnifi.png";
import foodifinder from "../assets/foodifinder.png";
import briks99 from "../assets/briks99.png";
import techprob from "../assets/techprob.png";
import trello from "../assets/trellow.png";
import alphafinence from "../assets/alphafinence.png";

const ProjectCard = (props) => {
  const {
    imageSrc,
    projectTitle,
    projectDescription,
    techStack,
    githubLink,
    deployedLink,
    projectType,
  } = props;
  //box-shadow: ;
  return (
    <Box
      className="project-card"
      p={4}
      // border={"1px solid"}
      mt={{ base: "25px", lg: "15px", md: "15px", sm: "50px" }}
      borderRadius={'25px'}
    >
      <Box borderRadius={'10px'} p={2} boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'} >
      <Box w={"100%"}>
        <Image
          src={imageSrc}
          alt={projectTitle}
          boxShadow={
            "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px"
          }
          borderRadius={10}
        />
      </Box>

      <Box mt={5}>
        <Heading
          className="project-title"
          as="h3"
          size="lg"
          fontSize={"3xl"}
          fontWeight={"bold"}
        >
          {projectTitle}
        </Heading>
        <Text mt={2} fontSize={'lg'} fontFamily={'sans-serif'}className="project-description">
          {projectDescription}
        </Text>
        <Text mt={3} fontSize={"lg"} color={'green'} fontWeight={'semibold'}className="project-tech-stack">
          Tech Stack: {techStack}
        </Text>
        <Text fontSize={"lg"} color={'red'} fontWeight={'semibold'}>Project Type: {projectType}</Text>
        <Flex justifyContent="space-evenly" mt={6}>
          <Button
            as="a"
            href={githubLink}
            target="_blank"
            className="project-github-link"

          >
            <FaGithub /> GitHub
          </Button>
          <Button
            as="a"
            href={deployedLink}
            target="_blank"
            className="project-deployed-link"
          >
            <FaExternalLinkAlt /> Deployed
          </Button>
        </Flex>
      </Box>
      </Box>
    </Box>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      <Heading
        id="project-title"
        as="h4"
        mt={50}
        size="md"
        mb="4"
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="600"
      >
        Projects
      </Heading>
      <Flex
        id="project-container"
        display={{ base: "block", md: "grid" }} // Use Chakra's responsive design
        w={"85%"}
        justifyContent="space-around"
        gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} // Define column layout for different screen sizes
        marginLeft={"7.8%"}
        marginRight={"10%"}
        gap={{ base: "15px", lg: "20px", md: "15px", sm: "15px" }}
        mt={20}
      >
        <ProjectCard
          imageSrc={peppfry}
          projectTitle="Peppfry clone"
          projectDescription="pepperfry is an e-commerce application for buying and selling furniture products online. Our platform provides a wide range of furniture products, from sofas and chairs to beds and tables"
          techStack="html, css, javascript"
          projectType="Solo Project"
          githubLink="https://github.com/Md-abdul/-kingly-stitch-4286"
          deployedLink="https://snazzy-narwhal-7e8e12.netlify.app/"
        />
        <ProjectCard
          imageSrc={learnifi}
          projectTitle="Learni-fi clone"
          projectDescription="Learni fi is a data management application. Where users can add any college and courses, and here also students take these courses to acquire more skills."
          techStack="html, css, javascript, redux, react, chakra ui"
          projectType="Solo Project"
          githubLink="https://github.com/Md-abdul/brief-battle-8574"
          deployedLink="https://coruscating-sable-f60edd.netlify.app/"
        />
        <ProjectCard
          imageSrc={trello}
          projectTitle="Trello"
          projectDescription="The Trello project is a comprehensive project management system designed to facilitate efficient project, task, team, and user management. The application includes an admin section ."
          techStack="html, css, javascript, angular, react, Talwind , Styled-Components"
          projectType="Solo Project"
          githubLink="https://github.com/Md-abdul/Trello"
          deployedLink="https://friendly-klepon-acb72b.netlify.app/"
        />
        <ProjectCard
          imageSrc={foodifinder}
          projectTitle="Foodie Finder"
          projectDescription="FoodieFinder is a comprehensive food delivery and e-commerce platform that offers a wide variety of food options, including fast food, salads, breakfast items, and much more. Users can easily explore, order, and purchase their favorite dishes."
          techStack="html, css, javascript"
          projectType="Team Project"
          githubLink="https://github.com/Md-abdul/dark-van-7997"
          deployedLink="https://dark-van-7997-foodie-finder-abdul.netlify.app/"
        />
        <ProjectCard
          imageSrc={briks99}
          projectTitle="Briks 99"
          projectDescription="Briks99 is an Indian online real estate marketplace which is a subsidiary of Zillow. It facilitates buyers and renters to find homes and neighborhoods across the United States through recommendations, "
          techStack="html, css, javascript, redux, react, chakra ui"
          projectType="Team Project"
          githubLink="https://github.com/Md-abdul/enormous-library-3081"
          deployedLink="https://stalwart-fairy-7587d7.netlify.app/"
        />
        <ProjectCard
          imageSrc={techprob}
          projectTitle="Tech Probe"
          projectDescription="AI-powered self-interview preparation platform. This platform will use the magic of AI and language processing to simulate real interview scenarios. It will give users feedback on their responses and provide ."
          techStack="TypeScript, JavaScript, Java, HTML, CSS"
          projectType="Team Project"
          githubLink="https://github.com/Md-abdul/TechProbe"
          deployedLink="https://tech-probe-interview-prep.netlify.app/"
        />

        <ProjectCard
          imageSrc={alphafinence}
          projectTitle="Alpha Finence"
          projectDescription="Lets you see the balance, transactions and invoices for your credit cards. This app simplifies your life. You can for instance: Get notifications of important events, purchases or if you reached your spending limits."
          techStack="JavaScript, HTML, CSS"
          projectType="Team Project"
          githubLink="https://github.com/Md-abdul/gaping-spring-1880"
          deployedLink="https://648ff31438df292dda152224--animated-raindrop-fbd2bc.netlify.app"
        />
        {/* Repeat the above code for other projects */}
      </Flex>
    </section>
  );
};

export default Projects;
