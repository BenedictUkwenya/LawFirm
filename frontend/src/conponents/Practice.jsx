// Practice Areas Section using Chakra UI
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";

function PracticeAreas() {
  return (
    <Box id="services"
    py={20} px={10} textAlign="center" bg="white">
      <Heading size="xl" color="blue.900">Our Practice Areas</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={10}>
        <Box p={8} bg="blue.900" borderRadius="md" shadow="md">
          <Heading size="md" color="white">Family Law</Heading>
          <Text mt={4} color="white">Helping families with legal matters such as divorce, custody, and more.</Text>
        </Box>
        <Box p={8} bg="blue.900" borderRadius="md" shadow="md">
          <Heading size="md" color="white">Criminal Defense</Heading>
          <Text mt={4} color="white">Defending clients in criminal cases with expertise and diligence.</Text>
        </Box>
        <Box p={8} bg="blue.900" borderRadius="md" shadow="md">
          <Heading size="md" color="white">Business Law</Heading>
          <Text mt={4} color="white">Guiding businesses through legal regulations and contracts.</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default PracticeAreas;