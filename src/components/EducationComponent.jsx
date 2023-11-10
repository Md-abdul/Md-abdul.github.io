// EducationComponent.js
import React from 'react';
import { Box, Center, Divider, Flex, Heading, Text } from '@chakra-ui/react';

const EducationComponent = () => {
  return (
    <Center>
      <Flex direction="row" align="center">
        {/* Left Div */}
        <Box
          flex="1"
          borderWidth="1px"
          p="4"
          borderRadius="md"
          textAlign="center"
          marginRight="4"
        >
          <Heading as="h3" size="sm">
            Left Div
          </Heading>
          {/* Add content for the left div as needed */}
        </Box>

        {/* Vertical Line */}
        <Divider orientation="vertical" marginX="4" />

        {/* Right Div */}
        <Box
          flex="1"
          borderWidth="1px"
          p="4"
          borderRadius="md"
          textAlign="center"
          marginLeft="4"
        >
          <Heading as="h3" size="sm">
            Right Div
          </Heading>
          {/* Add content for the right div as needed */}
        </Box>

        {/* Another Left Div */}
        <Box
          flex="1"
          borderWidth="1px"
          p="4"
          borderRadius="md"
          textAlign="center"
          marginRight="4"
        >
          <Heading as="h3" size="sm">
            Another Left Div
          </Heading>
          {/* Add content for the another left div as needed */}
        </Box>
      </Flex>
    </Center>
  );
};

export default EducationComponent;
