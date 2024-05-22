import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">Financial Times</Heading>
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">World</Link>
          <Link href="#" color="white">Business</Link>
          <Link href="#" color="white">Tech</Link>
          <Link href="#" color="white">Markets</Link>
          <Link href="#" color="white">Opinion</Link>
        </HStack>
      </Flex>

      {/* Main Section */}
      <Box as="main" p={4}>
        <VStack spacing={8} align="stretch">
          {/* Featured Article */}
          <Box bg="gray.100" p={4} borderRadius="md">
            <Image src="https://via.placeholder.com/800x400" alt="Featured Article" borderRadius="md" />
            <Heading as="h2" size="xl" mt={4}>Featured Article Title</Heading>
            <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
          </Box>

          {/* Other News Categories */}
          <Flex direction={{ base: "column", md: "row" }} spacing={4}>
            <Box flex={1} bg="gray.100" p={4} borderRadius="md" m={2}>
              <Heading as="h3" size="lg">World</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
            <Box flex={1} bg="gray.100" p={4} borderRadius="md" m={2}>
              <Heading as="h3" size="lg">Business</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
            <Box flex={1} bg="gray.100" p={4} borderRadius="md" m={2}>
              <Heading as="h3" size="lg">Tech</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
          </Flex>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;