// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import React, { useEffect, useState } from "react";
// import {
//   Heading,
//   Flex,
//   Text,
//   Box,
//   Image,
//   useMediaQuery,
//   Icon,
//   HStack,
// } from "@chakra-ui/react";
// import homeImage from "../assets/HomeImage.gif";
// const rotatingText = "Full Stack Web Developer";

// export const Home = () => {
//   const [text, setText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isSmallScreen] = useMediaQuery("(max-width: 767px)");
//   const [isMediumScreen] = useMediaQuery("(max-width: 950px )");

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (currentIndex < rotatingText.length) {
//         setText((prevText) => prevText + rotatingText[currentIndex]);
//         setCurrentIndex((prevIndex) => prevIndex + 1);
//       } else {
//         // Clear the text and start over
//         setText("");
//         setCurrentIndex(0);
//       }
//     }, 200); // Change text every 100 milliseconds

//     return () => {
//       clearInterval(interval);
//     };
//   }, [currentIndex]);

//   return (
//     <div>
//       <Flex
//         h={{ base: "80vh", lg: "100vh" }}
//         mb={-20}
//         id="home"
//         align={"center"}
//         justify={"center"}
//         gap={50}
//         mt={-20}
//         flexDir={{ base: "column-reverse", lg: "row" }}
//       >
//         <Box
//           maxWidth={{ base: "100%", lg: "40%" }}
//           flexDir="column"
//           gap="1rem"
//           style={isSmallScreen ? { marginTop: "-32px" } : null}
//         >
//           <Heading
//             id="user-detail-name"
//             fontSize={isSmallScreen ? "xl" : "5xl"}
//             fontWeight={"bold"}
//             color={"teal"}
//           >
//             Hi, I am Md Abdul Qadir
//           </Heading>
//           <Text fontSize={isSmallScreen ? "lg" : "2xl"} fontWeight={"semibold"}>
//             {text}
//           </Text>
//           <Text fontSize={"xl"} fontWeight={"extrabold"}>
//             Detail-orientated full-stack web developer, who loves working with
//             tech stacks like HTML, CSS, JavaScript, and React, etc. and
//             passionate about developing user-friendly web applications. Team
//             player with an eye for detail. An enthusiastic individual with zeal
//             to grow, curious to explore and learn new things, and dedicated to
//             company growth.
//           </Text>

//           <HStack mt={4} spacing={4} justify={"center"}>
//             <a
//               href="https://github.com/Md-abdul"
//               target="_blank"
//               rel="noopener"
//             >
//               <Icon
//                 as={FaGithub}
//                 boxSize={8}
//                 color="gray.600"
//                 _hover={{ color: "teal.500" }}
//               />
//             </a>
//             <a
//               href="https://www.linkedin.com/in/md-abdul-qadir-10673b246/"
//               target="_blank"
//               rel="noopener"
//             >
//               <Icon
//                 as={FaLinkedin}
//                 boxSize={8}
//                 color="gray.600"
//                 _hover={{ color: "teal.500" }}
//               />
//             </a>
//           </HStack>
//         </Box>
//         <Box style={isSmallScreen ? { marginTop: "190px" } : null} >
//           <Image
//             className="home-img"
//             src={homeImage}
//             style={isSmallScreen ? { maxWidth: "100%" } : isSmallScreen ? {maxWidth:'70%'} : null}
//             // height={{md: '80px'}}
//           ></Image>
//         </Box>
//       </Flex>
//     </div>
//   );
// };

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
        mt={-12}
        flexDir={{ base: "column-reverse", lg: "row" }}
        ml={{ lg: "20px" }}
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
            style={{
              backgroundColor:'teal',
              padding:'12px',
              borderRadius:"10px",
              color:'red',
              fontWeight:'20px',
              fontSize:'15px'
            }}

              size="lg"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1kPQzRRLng5ZdCBcira_ARtw0-eWzXYdL/view?usp=sharing",
                  "_blank"
                );
              }}
              Download
            >
              Download CV
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
            // mt={{md:'20px'}}
          ></Image>
        </Box>
      </Flex>
    </div>
  );
};
