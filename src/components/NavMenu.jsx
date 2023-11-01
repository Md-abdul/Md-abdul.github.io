// import {
//     Box,
//     Button,
//     Flex,
//     Image,
//     Text,
//     useColorMode,
//     Link,
//     Divider,
//   } from "@chakra-ui/react";
//   import React, { useState} from "react";
//   import { MoonIcon, SunIcon} from "@chakra-ui/icons";
//   import { AiOutlineDownload } from "react-icons/ai";
//   import Sidebar from "./Sidebar";
//   const NavMenu = () => {
//     const { colorMode, toggleColorMode } = useColorMode();
//     const [title, setTitle] = useState("Home");

//     return (
//       <>
//         <div>
//           {/* <Helmet>
//             <title>{` | ${title}`}</title>
//           </Helmet> */}
//         </div>
//         <Box
//           id="nav-menu"
//           pos={"sticky"}
//           zIndex="7"
//           top="0"
//           textTransform={"capitalize"}
//           // bg={"white"}
//           opacity={"0.8"}
//         >
//           <Flex
//             justify={"space-between"}
//             height="4rem"
//             align={"center"}
//             transition={"all 1s"}
//           >
//             <Box height="3.5rem" marginLeft={{ base: "2px", lg: "2rem" }}>
//               <Link href="#">
//                 <Image
//                   src={
//                     colorMode == "dark"
//                       ? "https://user-images.githubusercontent.com/106812942/229487542-e60efe9e-10a0-4e3d-9d61-327fe8515666.png"
//                       : "https://user-images.githubusercontent.com/106812942/229487542-e60efe9e-10a0-4e3d-9d61-327fe8515666.png"
//                   }
//                   height={"3.5rem"}
//                 />
//               </Link>
//             </Box>
  
//             <Flex
//               display={{ base: "none", lg: "flex" }}
//               width={"50%"}
//               justify="space-around"
//               align={"center"}
//               marginRight="2rem"
//             >
//               <Link
//                 onClick={() => setTitle("Home")}
//                 href="#home"
//                 className="nav-link home"
//               >
//                 home
//               </Link>
//               <Link
//                 onClick={() => setTitle("About")}
//                 href="#about"
//                 className="nav-link about"
//               >
//                 about
//               </Link>
//               <Link
//                 onClick={() => setTitle("Skills")}
//                 href="#skills"
//                 className="nav-link skills"
//               >
//                 skills
//               </Link>
//               <Link
//                 onClick={() => setTitle("Projects")}
//                 href="#projects"
//                 className="nav-link projects"
//               >
//                 projects
//               </Link>
//               <Link
//                 onClick={() => setTitle("Contact")}
//                 href="#contact"
//                 className="nav-link contact"
//               >
//                 contact
//               </Link>
  
//               <Button
//                 width="max-content"
//                 colorScheme={"red"}
//                 id="resume-button-1"
//                 className="nav-link resume"
//                 onClick={() => {
//                   window.open(
//                     "",
//                     "_blank"
//                   );
//                 }}
//               >
//                 <a
//                   id="resume-link-1"
//                   target="_blank"
//                   download=""
//                 >
//                   Resume
//                 </a>
//                 <Text as="span" ml={"2"}>
//                   <AiOutlineDownload fontSize={"1.2rem"} />
//                 </Text>
//               </Button>
//               <Button onClick={toggleColorMode}>
//                 {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
//               </Button>
//             </Flex>
//             <Box display={{ lg: "none" }} marginRight="10px">
//               <Sidebar />
//             </Box>
//           </Flex>
//           <Divider borderColor="grey.500" />
//         </Box>
//       </>
//     );
//   };
  
//   export default NavMenu;


//   // ============











//   import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Flex,
//   Heading,
//   Image,
//   Text,
//   useMediaQuery,
//   Icon,
//   HStack,
//   Button,
// } from "@chakra-ui/react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import Md_Abdul_Qadir_Resume from "../assets/Md_Abdul_Qadir_Resume.pdf.pdf";
// import hiImage from "../assets/landing.1ea1501b793c2d8b96f8.gif";
// import higif from "../assets/hi image.gif";

// const rotatingText = "Full Stack Web Developer";

// export const Home = () => {
//   const [text, setText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isSmallScreen] = useMediaQuery("(max-width: 767px)");

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
//     }, 300); // Change text every 100 milliseconds

//     return () => {
//       clearInterval(interval);
//     };
//   }, [currentIndex]);

//   return (
//     <Flex
//       // pl={5}
//       // pr={5}
//       // pb={5}
//       // id="home"
//       // justifyContent={isSmallScreen ? "center" : "space-around"}
//       // alignItems="center"
//       // flexWrap={isSmallScreen ? "wrap" : "nowrap"}
//       // mt={10}
//       height={{ base: "80vh", lg: "100vh" }}
//       maxHeight={"750px"}
//       className="background"
//       id="home"
//       flexDir={{ base: "column-reverse", lg: "row" }}
//       align={"center"}
//       justify="center"
//       fontSize={"1.3rem"}
//       gap={{ base: "2", md: "6", lg: "8" }}
//       // marginBottom={["40px", "0px", "0px"]}
//     >
//       <Box
//         maxWidth={{ base: "100%", lg: "40%" }}
//         flexDir="column"
//         gap="1rem"
//         padding={"5px"}
//       >
//         <Heading
//           // textAlign="left"
//           // id="user-detail-name"
//           // fontSize={isSmallScreen ? "2xl" : "5xl"}
//           // color="teal.500" // Custom text color
//           // display="flex" // Use a flex container
//           // alignItems="center" // Center align items vertically
//         >
//           <Image src={higif} alt="Hi" boxSize="52px" mr={0} />{" "}
//           {/* Adjust boxSize and margin as needed */}
//           Hi, I am Md Abdul Qadir
//         </Heading>
//         <Text
//           textAlign={"left"}
//           as="samp"
//           fontSize={isSmallScreen ? "lg" : "2xl"}
//           fontStyle="italic" // Italic text
//           color="gray.600" // Custom text color
//           fontWeight="semibold" // Custom font weight
//           mb={4} // Add margin at the bottom
//         >
//           {text}
//         </Text>
//         <Text>
//           Detail-orientated full-stack web developer, who loves working with
//           tech stacks like HTML, CSS, JavaScript, and React, etc. and passionate
//           about developing user-friendly web applications. Team player with an
//           eye for detail. An enthusiastic individual with zeal to grow, curious
//           to explore and learn new things, and dedicated to company growth and
//           improvements.
//         </Text>
//         <HStack mt={4} spacing={4}>
//           {/* <Button

//         className="nav-link resume"
//               id="resume-button-2"
             
//               onClick={() => {
//                 window.open(
//                   "https://drive.google.com/file/d/1kPQzRRLng5ZdCBcira_ARtw0-eWzXYdL/view?usp=sharing",
//                   "_blank"
//                 );
//               }}
//             >
//               <a
//                 id="resume-link-2"
//                 href={Md_Abdul_Qadir_Resume }
//                 target="_blank"
//                 download="Md_Abdul_Qadir_Resume.pdf"
//               >
//                 Resume
//                 <AiOutlineDownload fontSize="1.2rem" ml="2" />
//               </a>
//             </Button> */}
//           <a href="https://github.com/your-github-profile">
//             <Icon
//               as={FaGithub}
//               boxSize={6}
//               color="gray.600"
//               _hover={{ color: "teal.500" }}
//             />
//           </a>
//           <a href="https://www.linkedin.com/in/your-linkedin-profile">
//             <Icon
//               as={FaLinkedin}
//               boxSize={6}
//               color="gray.600"
//               _hover={{ color: "teal.500" }}
//             />
//           </a>
//         </HStack>
//       </Box>

//       <Box mb={isSmallScreen ? "4" : "0"}>
//         <Image
//           src={hiImage}
//           alt="Hi"
//           boxSize={isSmallScreen ? "300px" : "500px"}
//         />
//       </Box>
//     </Flex>
//   );
// };
