import { Box, Heading, Text } from "@chakra-ui/react";

function AboutUs() {
  return (
    <Box id="about"
    
    py={20} px={10} maxW="800px" mx="auto" textAlign="center" bg="white" borderRadius="md" shadow="md">
      <Heading size="xl" color="blue.900">About Our Firm</Heading>
      <Text mt={8} fontSize="lg" color="gray.800">
        We are a reputable law firm dedicated to providing top-notch legal services. Our experienced team is committed to protecting your rights and ensuring justice.
      </Text>
    </Box>
  );
}

export default AboutUs;
