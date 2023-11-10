import React from "react";
import { Box, Text, Container, Image, Flex } from "@chakra-ui/react";
import GithubCalendar from "react-github-calendar";

const GithubStats = () => {
  return (
    <Container id="github-stats" p={4} textAlign="center" mt={20}>
      <Text
        as="h4"
        // fontSize="40px"
        mt={20}
        mb="4"
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="600"
        textAlign="center"
      >
        GitHub Stats
      </Text>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        mt={20}
        w={{ base: "100%", md: "60%" }}
        // ml={'19%'}
        ml={{ lg: "19%" }}
      >
        <Box
          id="img1"
          width={{ base: "100%", md: "50%" }}
          pr={{ base: 0, md: 4 }}
          mb={{ base: 4, md: 0 }}
        >
          <Image
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Md-abdul&layout=compact"
            alt="GitHub Top Languages"
            width="100%"
            height="auto"
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            //box-shadow: ;
          />
        </Box>
        <Box
          id="img2"
          width={{ base: "100%", md: "50%" }}
          mt={{ base: 4, md: 0 }}
        >
          <Image
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com/?user=md-abdul"
            alt="GitHub Streak Stats"
            width="100%"
            height="auto"
            boxShadow={
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            }
          />
          <Image
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=Md-abdul&show_icons=true&count_private=true&hide=prs,issues,contribs"
            alt="GitHub Stats card"
            width="100%"
            height="auto"
            mt={4}
            boxShadow={
              "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
            }
          />
        </Box>
      </Flex>
      <Box
        className="react-activity-calendar"
        mt={4}
        w={{ base: "100%", md: "60%" }}
        mx="auto"
        justifyContent="center"
        boxShadow={
          "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
        }
        p={2}
      >
        <GithubCalendar
          username="Md-abdul"
          className="react-activity-calendar"
          w="100%"
        />
      </Box>
    </Container>
  );
};

export default GithubStats;
