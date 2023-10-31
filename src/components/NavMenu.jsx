import {
    Box,
    Button,
    Flex,
    Image,
    Text,
    useColorMode,
    Link,
    Divider,
  } from "@chakra-ui/react";
  import React, { useState} from "react";
  import { MoonIcon, SunIcon} from "@chakra-ui/icons";
  import { AiOutlineDownload } from "react-icons/ai";
  import Sidebar from "./Sidebar";
  const NavMenu = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [title, setTitle] = useState("Home");

    return (
      <>
        <div>
          {/* <Helmet>
            <title>{` | ${title}`}</title>
          </Helmet> */}
        </div>
        <Box
          id="nav-menu"
          pos={"sticky"}
          zIndex="7"
          top="0"
          textTransform={"capitalize"}
          // bg={"white"}
          opacity={"0.8"}
        >
          <Flex
            justify={"space-between"}
            height="4rem"
            align={"center"}
            transition={"all 1s"}
          >
            <Box height="3.5rem" marginLeft={{ base: "2px", lg: "2rem" }}>
              <Link href="#">
                <Image
                  src={
                    colorMode == "dark"
                      ? "https://user-images.githubusercontent.com/106812942/229487542-e60efe9e-10a0-4e3d-9d61-327fe8515666.png"
                      : "https://user-images.githubusercontent.com/106812942/229487542-e60efe9e-10a0-4e3d-9d61-327fe8515666.png"
                  }
                  height={"3.5rem"}
                />
              </Link>
            </Box>
  
            <Flex
              display={{ base: "none", lg: "flex" }}
              width={"50%"}
              justify="space-around"
              align={"center"}
              marginRight="2rem"
            >
              <Link
                onClick={() => setTitle("Home")}
                href="#home"
                className="nav-link home"
              >
                home
              </Link>
              <Link
                onClick={() => setTitle("About")}
                href="#about"
                className="nav-link about"
              >
                about
              </Link>
              <Link
                onClick={() => setTitle("Skills")}
                href="#skills"
                className="nav-link skills"
              >
                skills
              </Link>
              <Link
                onClick={() => setTitle("Projects")}
                href="#projects"
                className="nav-link projects"
              >
                projects
              </Link>
              <Link
                onClick={() => setTitle("Contact")}
                href="#contact"
                className="nav-link contact"
              >
                contact
              </Link>
  
              <Button
                width="max-content"
                colorScheme={"red"}
                id="resume-button-1"
                className="nav-link resume"
                onClick={() => {
                  window.open(
                    "",
                    "_blank"
                  );
                }}
              >
                <a
                  id="resume-link-1"
                  target="_blank"
                  download=""
                >
                  Resume
                </a>
                <Text as="span" ml={"2"}>
                  <AiOutlineDownload fontSize={"1.2rem"} />
                </Text>
              </Button>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Flex>
            <Box display={{ lg: "none" }} marginRight="10px">
              <Sidebar />
            </Box>
          </Flex>
          <Divider borderColor="grey.500" />
        </Box>
      </>
    );
  };
  
  export default NavMenu;