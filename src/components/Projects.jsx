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
  } = props;
  //box-shadow: ;
  return (
    <Box className="project-card" p={5} border={'1px solid'} mt={{base:'25px', lg:'15px' , md:'15px', sm:'50px'}}>
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
        <Heading className="project-title" as="h3" size="lg">
          {projectTitle}
        </Heading>
        <Text className="project-description">{projectDescription}</Text>
        <Text className="project-tech-stack">Tech Stack Used: {techStack}</Text>
        <Flex justifyContent="space-evenly" mt={3}>
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
        marginRight={'10%'}
        gap={{ base: "15px", lg:'20px', md: "15px", sm: "15px" }}
        mt={20}
      >
        <ProjectCard 
          imageSrc={peppfry}
          projectTitle="Peppfry clone"
          projectDescription="pepperfry is an e-commerce application for buying and selling furniture products online. Our platform provides a wide range of furniture products, from sofas and chairs to beds and tables"
          techStack="html, css, javascript"
          githubLink="https://github.com/Md-abdul/-kingly-stitch-4286"
          deployedLink="https://snazzy-narwhal-7e8e12.netlify.app/"
        />
        <ProjectCard
          imageSrc={learnifi}
          projectTitle="Learni-fi clone"
          projectDescription="Learni fi is a data management application. Where users can add any college and courses, and here also students take these courses to acquire more skills."
          techStack="html, css, javascript, redux, react, chakra ui"
          githubLink="https://github.com/Md-abdul/brief-battle-8574"
          deployedLink="https://coruscating-sable-f60edd.netlify.app/"
        />
        <ProjectCard
          imageSrc={trello}
          projectTitle="Learni-fi clone"
          projectDescription="Learni fi is a data management application. Where users can add any college and courses, and here also students take these courses to acquire more skills."
          techStack="html, css, javascript, redux, react, chakra ui"
          githubLink="https://github.com/Md-abdul/brief-battle-8574"
          deployedLink="https://coruscating-sable-f60edd.netlify.app/"
        />
        <ProjectCard
          imageSrc={foodifinder}
          projectTitle="Learni-fi clone"
          projectDescription="Learni fi is a data management application. Where users can add any college and courses, and here also students take these courses to acquire more skills."
          techStack="html, css, javascript, redux, react, chakra ui"
          githubLink="https://github.com/Md-abdul/brief-battle-8574"
          deployedLink="https://coruscating-sable-f60edd.netlify.app/"
        />
        <ProjectCard
          imageSrc={briks99}
          projectTitle="Learni-fi clone"
          projectDescription="Learni fi is a data management application. Where users can add any college and courses, and here also students take these courses to acquire more skills."
          techStack="html, css, javascript, redux, react, chakra ui"
          githubLink="https://github.com/Md-abdul/brief-battle-8574"
          deployedLink="https://coruscating-sable-f60edd.netlify.app/"
        />
        <ProjectCard
          imageSrc={techprob}
          projectTitle="Learni-fi clone"
          projectDescription="Learni fi is a data management application. Where users can add any college and courses, and here also students take these courses to acquire more skills."
          techStack="html, css, javascript, redux, react, chakra ui"
          githubLink="https://github.com/Md-abdul/brief-battle-8574"
          deployedLink="https://coruscating-sable-f60edd.netlify.app/"
        />

        <ProjectCard
          imageSrc={alphafinence}
          projectTitle="Learni-fi clone"
          projectDescription="Learni fi is a data management application. Where users can add any college and courses, and here also students take these courses to acquire more skills."
          techStack="html, css, javascript, redux, react, chakra ui"
          githubLink="https://github.com/Md-abdul/brief-battle-8574"
          deployedLink="https://coruscating-sable-f60edd.netlify.app/"
        />
        {/* Repeat the above code for other projects */}
      </Flex>
    </section>
  );
};

export default Projects;
