
// import { Box, Flex, Link, Button, Icon } from '@chakra-ui/react';
// import React, { useState } from 'react';
// import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope, FaFileAlt, FaBars, FaTimes } from 'react-icons/fa';

// const Navbar = () => {
//   const [isResponsiveNavOpen, setResponsiveNavOpen] = useState(false);

//   const toggleResponsiveNav = () => {
//     setResponsiveNavOpen(!isResponsiveNavOpen);
//   };

//   return (
//     <Box border={'1px solid red'} h={'50px'} display={'flex'} alignItems={'center'} justifyContent={'space-around'}>
//       <h1>Abdul</h1>
//       <Flex justifyContent={'space-between'} w={['100%', '600px']} fontSize={20}>
//         <Link href='#home'>
//           <Icon as={FaHome} mr={2} />
//           Home
//         </Link>
//         <Link href='#about'>
//           <Icon as={FaUser} mr={2} />
//           About
//         </Link>
//         <Link href='#skills'>
//           <Icon as={FaCode} mr={2} />
//           Skills
//         </Link>
//         <Link href='#project'>
//           <Icon as={FaProjectDiagram} mr={2} />
//           Projects
//         </Link>
//         <Link href='#contact'>
//           <Icon as={FaEnvelope} mr={2} />
//           Contact
//         </Link>
//         <Button onClick={toggleResponsiveNav}>
//           <Icon as={FaBars} mr={2} />
//           Menu
//         </Button>
//       </Flex>
//       {isResponsiveNavOpen && (
//         <Flex
//           flexDirection="column"
//           position="fixed"
//           top="0"
//           right="0"
//           bottom="0"
//           bg="var(--mainColor)"
//           color="var(--textColor)"
//           alignItems="center"
//           justifyContent="center"
//           zIndex="1"
//           width={['100%', '100%', 'auto']}
//           height={['100%', '100%', 'auto']}
//           transition="2s"
//         >
//           <Button onClick={toggleResponsiveNav} className="nav-close-btn">
//             <Icon as={FaTimes} mr={2} />
//             Close
//           </Button>
//           <Link href='#home'>
//             <Icon as={FaHome} mr={2} />
//             Home
//           </Link>
//           <Link href='#about'>
//             <Icon as={FaUser} mr={2} />
//             About
//           </Link>
//           <Link href='#skills'>
//             <Icon as={FaCode} mr={2} />
//             Skills
//           </Link>
//           <Link href='#project'>
//             <Icon as={FaProjectDiagram} mr={2} />
//             Projects
//           </Link>
//           <Link href='#contact'>
//             <Icon as={FaEnvelope} mr={2} />
//             Contact
//           </Link>
//           <Button>
//             <Icon as={FaFileAlt} mr={2} />
//             Resume
//           </Button>
//         </Flex>
//       )}
//     </Box>
//   );
// };

// export default Navbar;





import { Box, Flex, Link, Button, Icon } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope, FaFileAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isResponsiveNavOpen, setResponsiveNavOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleResponsiveNav = () => {
    setResponsiveNavOpen(!isResponsiveNavOpen);
  };

  const closeResponsiveNav = () => {
    setResponsiveNavOpen(false);
  };

  React.useEffect(() => {
    const handleWindowResize = () => {
      setIsSmallScreen(window.innerWidth <= 999);
    };

    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <Box bg="var(--mainColor)" h={'80px'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} px={8} color="var(--textColor)">
      <h1>Abdul</h1>
      {isSmallScreen ? (
        <Button onClick={toggleResponsiveNav} className="nav-btn">
          {isResponsiveNavOpen ? (
            <Icon as={FaTimes} />
          ) : (
            <Icon as={FaBars} />
          )}
        </Button>
      ) : (
        <Flex justifyContent="space-between" w="600px" fontSize={20}>
          <Link href='#home' className="nav-link">
            Home
          </Link>
          <Link href='#about' className="nav-link">
            About
          </Link>
          <Link href='#skills' className="nav-link">
            Skills
          </Link>
          <Link href='#project' className="nav-link">
            Projects
          </Link>
          <Link href='#contact' className="nav-link">
            Contact
          </Link>
          <Button className="nav-link">
            Resume
          </Button>
        </Flex>
      )}
      {isResponsiveNavOpen && isSmallScreen && (
        <Flex
          flexDirection="column"
          position="fixed"
          top="0"
          left="0"
          height="100vh"
          width="100%"
          bg="var(--mainColor)"
          transition="2s"
          zIndex="10000"
        >
          <Button onClick={closeResponsiveNav} className="nav-close-btn">
            <Icon as={FaTimes} />
          </Button>
          <Link href='#home' className="nav-link">
            Home
          </Link>
          <Link href='#about' className="nav-link">
            About
          </Link>
          <Link href='#skills' className="nav-link">
            Skills
          </Link>
          <Link href='#project' className="nav-link">
            Projects
          </Link>
          <Link href='#contact' className="nav-link">
            Contact
          </Link>
          <Button className="nav-link">
            Resume
          </Button>
        </Flex>
      )}
    </Box>
  );
};

export default Navbar;
