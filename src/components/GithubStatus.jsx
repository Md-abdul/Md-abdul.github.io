// import React from "react";
// import { Box, Text, Container, Image, Flex } from "@chakra-ui/react";
// import GithubCalender from "react-github-calendar";

// const GithubStats = () => {
//   return (
//     <Container id="github-stats" p={4} textAlign="center" mt={20}>
//       <Text as="h4" fontSize="40px">
//         GitHub Stats
//       </Text>
//       <Flex className="container" justifyContent="center" width="100%" mt={4}>
//         <Box id="img1">
//           <Image
//             id="github-top-langs"
//             src="https://github-readme-stats.vercel.app/api/top-langs/?username=Md-abdul&layout=compact"
//             alt="GitHub Streak Stats"
//             width="700px"
//             height="300px"
//             mt={4}
//           />
//         </Box>
//         <Box id="img2">
//           <Image
//             id="github-streak-stats"
//             src="https://github-readme-streak-stats.herokuapp.com/?user=Md-abdul"
//             alt="GitHub Top Languages"
//             width="500px"
//           />
//           <Image
//             id="github-stats-card"
//             src="https://github-readme-stats.vercel.app/api?username=Md-abdul&show_icons=true&count_private=true&hide=prs,issues,contribs"
//             alt="GitHub Stats card"
//             width="500px"
//             mt={4}
//           />
//         </Box>
//       </Flex>
//       <Box
//         className="react-activity-calendar"
//         mt={4}
//         border={"1px solid"}
//         w={"60%"}
//         justifyContent={"center"}
//       >
//         <GithubCalender
//           username="Md-abdul"
//           className="react-activity-calender"
//           w={"100%"}
//         />
//       </Box>
//     </Container>
//   );
// };

// export default GithubStats;

import React from "react";
import { Box, Text, Container, Image, Flex } from "@chakra-ui/react";
import GithubCalendar from "react-github-calendar";

const GithubStats = () => {
  return (
    <Container id="github-stats" p={4} textAlign="center" mt={20}>
      <Text as="h4" fontSize="40px" mt={20}>
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
          />
        </Box>
        <Box
          id="img2"
          width={{ base: "100%", md: "50%" }}
          mt={{ base: 4, md: 0 }}
        >
          <Image
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com/?user=Md-abdul"
            alt="GitHub Streak Stats"
            width="100%"
            height="auto"
          />
          <Image
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=Md-abdul&show_icons=true&count_private=true&hide=prs,issues,contribs"
            alt="GitHub Stats card"
            width="100%"
            height="auto"
            mt={4}
          />
        </Box>
      </Flex>
      <Box
        className="react-activity-calendar"
        mt={4}
        w={{ base: "100%", md: "60%" }}
        mx="auto"
        justifyContent="center"
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
