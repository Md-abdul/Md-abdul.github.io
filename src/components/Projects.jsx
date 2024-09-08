// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Heading,
//   Text,
//   Flex,
//   Button,
//   Image,
//   SimpleGrid,
// } from "@chakra-ui/react";
// import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import peppfry from "../assets/peppfry.png";
// import learnifi from "../assets/Learnifi.png";
// import foodifinder from "../assets/foodifinder.png";
// import briks99 from "../assets/briks99.png";
// import techprob from "../assets/techprob.png";
// import trello from "../assets/trellow.png";
// import alphafinence from "../assets/alphafinence.png";
// import apnaShop from "../assets/apna shop.png";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const projects = [
//   {
//     imageSrc: apnaShop,
//     projectTitle: "Apna Shop",
//     projectDescription:
//       "Apna Shop is a e-commerce website that allows users to browse, search, and purchase a wide range of products. where administrators can manage products and users. The website is fully responsive",
//     techStack: "React-js Talwind Css JavaScript, HTML, CSS Node-js Express ",
//     githubLink: "https://github.com/Md-abdul/Apna-Shop",
//     deployedLink: "https://apna-shop1.netlify.app/",
//     projectType: "Solo Project",
//   },
//   {
//     imageSrc: briks99,
//     projectTitle: "RentHaven",
//     projectDescription:
//       "RentHaven is an Indian online real estate marketplace which is a subsidiary of Zillow. It facilitates buyers and renters to find homes and neighborhoods across the United States through recommendations, ",
//     techStack: "html, css, javascript, redux, react, chakra ui",
//     projectType: "Team Project",
//     githubLink: "https://github.com/Md-abdul/RentHaven",
//     deployedLink: "https://renthaven.netlify.app/",
//   },
//   {
//     imageSrc: peppfry,
//     projectTitle: "Peppfry clone",
//     projectDescription:
//       "pepperfry is an e-commerce application for buying and selling furniture products online. Our platform provides a wide range of furniture products, from sofas and chairs to beds and tables",
//     techStack: "html, css, javascript",
//     projectType: "Solo Project",
//     githubLink: "https://github.com/Md-abdul/-kingly-stitch-4286",
//     deployedLink: "https://snazzy-narwhal-7e8e12.netlify.app/",
//   },
//   {
//     imageSrc: foodifinder,
//     projectTitle: "Foodie Finder",
//     projectDescription:
//       "FoodieFinder is a comprehensive food delivery and e-commerce platform that offers a wide variety of food options, including fast food, salads, breakfast items, and much more. Users can easily explore, order, and purchase their favorite dishes.",
//     techStack: "html, css, javascript",
//     projectType: "Team Project",
//     githubLink: "https://github.com/Md-abdul/dark-van-7997",
//     deployedLink: "https://dark-van-7997-foodie-finder-abdul.netlify.app/",
//   },
//   {
//     imageSrc: learnifi,
//     projectTitle: "Learni-fi clone",
//     projectDescription:
//       "Learni fi is a data management application. Where users can add any college and courses, and here also students take these courses to acquire more skills.",
//     techStack: "html, css, javascript, redux, react, chakra ui",
//     projectType: "Solo Project",
//     githubLink: "https://github.com/Md-abdul/brief-battle-8574",
//     deployedLink: "https://coruscating-sable-f60edd.netlify.app/",
//   },
//   {
//     imageSrc: trello,
//     projectTitle: "Trello",
//     projectDescription:
//       "The Trello project is a comprehensive project management system designed to facilitate efficient project, task, team, and user management. The application includes an admin section .",
//     techStack:
//       "html, css, javascript, angular, react, Talwind , Styled-Components",
//     projectType: "Solo Project",
//     githubLink: "https://github.com/Md-abdul/Trello",
//     deployedLink: "https://friendly-klepon-acb72b.netlify.app/",
//   },
//   {
//     imageSrc: techprob,
//     projectTitle: "Tech Probe",
//     projectDescription:
//       "AI-powered self-interview preparation platform. This platform will use the magic of AI and language processing to simulate real interview scenarios. It will give users feedback on their responses and provide .",
//     techStack: "TypeScript, JavaScript, Java, HTML, CSS",
//     projectType: "Team Project",
//     githubLink: "https://github.com/Md-abdul/TechProbe",
//     deployedLink: "https://tech-probe-interview-prep.netlify.app/",
//   },
// ];

// const ProjectCard = (props) => {
//   const {
//     imageSrc,
//     projectTitle,
//     projectDescription,
//     techStack,
//     githubLink,
//     deployedLink,
//     projectType,
//   } = props;

//   return (
//     <Box
//       className="project-card"
//       p={2}
//       mt={{ base: "25px", lg: "15px", md: "15px", sm: "50px" }}
//       borderRadius={"25px"}
//       textAlign="center"
//       data-aos="flip-right"
//       boxShadow="-2px -2px 5px #fff, 2px 2px 5px #babecc"
//     >
//       <Box
//         borderRadius={"10px"}
//         p={2}
//         boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
//       >
//         <Box w={"100%"}>
//           <Image
//             src={imageSrc}
//             alt={projectTitle}
//             boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
//             borderRadius={10}
//           />
//         </Box>

//         <Box mt={5}>
//           <Heading
//             className="project-title"
//             as="h3"
//             size="lg"
//             fontSize={"3xl"}
//             fontWeight={"bold"}
//           >
//             {projectTitle}
//           </Heading>
//           <Text
//             mt={2}
//             fontSize={"lg"}
//             fontFamily={"sans-serif"}
//             className="project-description"
//           >
//             {projectDescription}
//           </Text>
//           <Text
//             mt={3}
//             fontSize={"lg"}
//             color={"green"}
//             fontWeight={"semibold"}
//             className="project-tech-stack"
//           >
//             Tech Stack: {techStack}
//           </Text>
//           <Text fontSize={"lg"} color={"red"} fontWeight={"semibold"}>
//             Project Type: {projectType}
//           </Text>
//           <Flex justifyContent="space-evenly" mt={6}>
//             <Button
//               as="a"
//               href={githubLink}
//               target="_blank"
//               className="project-github-link"
//               color="teal.500"
//               mb={5}
//             >
//               <FaGithub /> GitHub
//             </Button>
//             <Button
//               as="a"
//               href={deployedLink}
//               target="_blank"
//               className="project-deployed-link"
//               color="teal.500"
//               mb={5}
//             >
//               <FaExternalLinkAlt /> Deployed
//             </Button>
//           </Flex>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// const Projects = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [itemsPerSlide, setItemsPerSlide] = useState(2);
//   const [transitioning, setTransitioning] = useState(false);

//   useEffect(() => {
//     AOS.init({ duration: 2500 });
//     const updateItemsPerSlide = () => {
//       setItemsPerSlide(window.innerWidth < 768 ? 1 : 2);
//     };

//     updateItemsPerSlide();
//     window.addEventListener("resize", updateItemsPerSlide);
//     return () => window.removeEventListener("resize", updateItemsPerSlide);
//   }, []);

//   const handlePrev = () => {
//     if (!transitioning) {
//       setTransitioning(true);
//       setTimeout(() => {
//         const newIndex = Math.max(0, currentIndex - itemsPerSlide);
//         setCurrentIndex(newIndex);
//         setTransitioning(false);
//       }, 500); // Delay to allow the animation to complete
//     }
//   };

//   const handleNext = () => {
//     if (!transitioning) {
//       setTransitioning(true);
//       setTimeout(() => {
//         const newIndex = Math.min(
//           currentIndex + itemsPerSlide,
//           projects.length - itemsPerSlide
//         );
//         setCurrentIndex(newIndex);
//         setTransitioning(false);
//       }, 500); // Delay to allow the animation to complete
//     }
//   };

//   return (
//     <section id="projects">
//       <Heading
//         id="project-title"
//         as="h4"
//         mt={"10%"}
//         size="md"
//         mb="4"
//         fontSize={{ base: "3xl", md: "4xl" }}
//         fontWeight="600"
//         textAlign="center"
//       >
//         Projects 👇
//       </Heading>
//       <Box
//         className={`slide-container ${transitioning ? "transitioning" : ""}`}
//         maxW="80%"
//         mx="auto"
//         p={5}
//       >
//         <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" mt={10}>
//           {projects
//             .slice(currentIndex, currentIndex + itemsPerSlide)
//             .map((project, index) => (
//               <ProjectCard
//                 key={index}
//                 imageSrc={project.imageSrc}
//                 projectTitle={project.projectTitle}
//                 projectDescription={project.projectDescription}
//                 techStack={project.techStack}
//                 githubLink={project.githubLink}
//                 deployedLink={project.deployedLink}
//                 projectType={project.projectType}
//               />
//             ))}
//         </SimpleGrid>
//       </Box>
//       <Box
//         display="flex"
//         justifyContent="space-between"
//         mt="4"
//         maxW="80%"
//         mx="auto"
//         // p={5}
//       >
//         <Button
//           onClick={handlePrev}
//           leftIcon={<ChevronLeftIcon />}
//           colorScheme="teal"
//           isDisabled={currentIndex === 0 || transitioning}
//         >
//           Previous
//         </Button>
//         <Button
//           onClick={handleNext}
//           rightIcon={<ChevronRightIcon />}
//           colorScheme="teal"
//           isDisabled={
//             currentIndex + itemsPerSlide >= projects.length || transitioning
//           }
//         >
//           Next
//         </Button>
//       </Box>
//     </section>
//   );
// };

// export default Projects;

import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5"; // Icons for view more/less
import peppfry from "../assets/peppfry.png";
import learnifi from "../assets/Learnifi.png";
import foodifinder from "../assets/foodifinder.png";
import briks99 from "../assets/briks99.png";
import techprob from "../assets/techprob.png";
import trello from "../assets/trellow.png";
import alphafinence from "../assets/alphafinence.png";
import apnaShop from "../assets/apna shop.png";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    imageSrc: apnaShop,
    projectTitle: "Apna Shop",
    projectDescription:
      "Apna Shop is a e-commerce website that allows users to browse, search, and purchase a wide range of products. where administrators can manage products and users. The website is fully responsive",
    techStack: "React-js Talwind Css JavaScript, HTML, CSS Node-js Express ",
    githubLink: "https://github.com/Md-abdul/Apna-Shop",
    deployedLink: "https://apna-shop1.netlify.app/",
    projectType: "Solo Project",
  },
  {
    imageSrc: briks99,
    projectTitle: "RentHaven",
    projectDescription:
      "RentHaven is an Indian online real estate marketplace which is a subsidiary of Zillow. It facilitates buyers and renters to find homes and neighborhoods across the United States through recommendations, ",
    techStack: "html, css, javascript, redux, react, chakra ui",
    projectType: "Team Project",
    githubLink: "https://github.com/Md-abdul/RentHaven",
    deployedLink: "https://renthaven.netlify.app/",
  },
  {
    imageSrc: peppfry,
    projectTitle: "Peppfry clone",
    projectDescription:
      "pepperfry is an e-commerce application for buying and selling furniture products online. Our platform provides a wide range of furniture products, from sofas and chairs to beds and tables",
    techStack: "html, css, javascript",
    projectType: "Solo Project",
    githubLink: "https://github.com/Md-abdul/-kingly-stitch-4286",
    deployedLink: "https://snazzy-narwhal-7e8e12.netlify.app/",
  },
  {
    imageSrc: foodifinder,
    projectTitle: "Foodie Finder",
    projectDescription:
      "FoodieFinder is a comprehensive food delivery and e-commerce platform that offers a wide variety of food options, including fast food, salads, breakfast items, and much more. Users can easily explore, order, and purchase their favorite dishes.",
    techStack: "html, css, javascript",
    projectType: "Team Project",
    githubLink: "https://github.com/Md-abdul/dark-van-7997",
    deployedLink: "https://dark-van-7997-foodie-finder-abdul.netlify.app/",
  },
  {
    imageSrc: learnifi,
    projectTitle: "Learni-fi clone",
    projectDescription:
      "Learni fi is a data management application. Where users can add any college and courses, and here also students take these courses to acquire more skills.",
    techStack: "html, css, javascript, redux, react, chakra ui",
    projectType: "Solo Project",
    githubLink: "https://github.com/Md-abdul/brief-battle-8574",
    deployedLink: "https://coruscating-sable-f60edd.netlify.app/",
  },
  {
    imageSrc: trello,
    projectTitle: "Trello",
    projectDescription:
      "The Trello project is a comprehensive project management system designed to facilitate efficient project, task, team, and user management. The application includes an admin section .",
    techStack:
      "html, css, javascript, angular, react, Talwind , Styled-Components",
    projectType: "Solo Project",
    githubLink: "https://github.com/Md-abdul/Trello",
    deployedLink: "https://friendly-klepon-acb72b.netlify.app/",
  },
  {
    imageSrc: techprob,
    projectTitle: "Tech Probe",
    projectDescription:
      "AI-powered self-interview preparation platform. This platform will use the magic of AI and language processing to simulate real interview scenarios. It will give users feedback on their responses and provide .",
    techStack: "TypeScript, JavaScript, Java, HTML, CSS",
    projectType: "Team Project",
    githubLink: "https://github.com/Md-abdul/TechProbe",
    deployedLink: "https://tech-probe-interview-prep.netlify.app/",
  },
];

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

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Box
      className="project-card"
      p={2}
      mt={{ base: "25px", lg: "15px", md: "15px", sm: "50px" }}
      borderRadius={"25px"}
      textAlign="center"
      data-aos="flip-right"
      boxShadow="-2px -2px 5px #fff, 2px 2px 5px #babecc"
    >
      <Box
        borderRadius={"10px"}
        p={2}
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        <Box w={"100%"}>
          <Image
            src={imageSrc}
            alt={projectTitle}
            boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
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
          <Text
            mt={2}
            fontSize={"lg"}
            fontFamily={"sans-serif"}
            className="project-description"
          >
            {projectDescription}
          </Text>

          {/* View More Section */}
          {showMore && (
            <>
              <Text
                mt={3}
                fontSize={"lg"}
                color={"green"}
                fontWeight={"semibold"}
                className="project-tech-stack"
              >
                Tech Stack: {techStack}
              </Text>
              <Text fontSize={"lg"} color={"red"} fontWeight={"semibold"}>
                Project Type: {projectType}
              </Text>
              <Flex justifyContent="space-evenly" mt={6}>
                <Button
                  as="a"
                  href={githubLink}
                  target="_blank"
                  className="project-github-link"
                  color="teal.500"
                  mb={5}
                >
                  <FaGithub /> GitHub
                </Button>
                <Button
                  as="a"
                  href={deployedLink}
                  target="_blank"
                  className="project-deployed-link"
                  color="teal.500"
                  mb={5}
                >
                  <FaExternalLinkAlt /> Deployed
                </Button>
              </Flex>
            </>
          )}

          {/* View More/Less Button */}
          <Button
            onClick={toggleShowMore}
            mt={4}
            colorScheme="teal"
            variant="outline"
            style={{color:'red'}}
            rightIcon={
              showMore ? (
                <IoChevronUpOutline color="red.500" />
              ) : (
                <IoChevronDownOutline color="teal.500" />
              )
            }
          >
            {showMore ? "View Less" : "View More"}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

const Projects = () => {
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
      }, 500); // Delay to allow the animation to complete
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
      }, 500); // Delay to allow the animation to complete
    }
  };

  return (
    <section id="projects">
      <Heading
        id="project-title"
        as="h4"
        mt={"10%"}
        size="md"
        mb="4"
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="600"
        textAlign="center"
      >
        Projects 👇
      </Heading>
      <Box
        className={`slide-container ${transitioning ? "transitioning" : ""}`}
        maxW="80%"
        mx="auto"
        p={5}
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing="20px" mt={10}>
          {projects
            .slice(currentIndex, currentIndex + itemsPerSlide)
            .map((project, index) => (
              <ProjectCard
                key={index}
                imageSrc={project.imageSrc}
                projectTitle={project.projectTitle}
                projectDescription={project.projectDescription}
                techStack={project.techStack}
                githubLink={project.githubLink}
                deployedLink={project.deployedLink}
                projectType={project.projectType}
              />
            ))}
        </SimpleGrid>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        mt="4"
        maxW="80%"
        mx="auto"
      >
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
    </section>
  );
};

export default Projects;
