import { Box, Heading, Text, VStack } from "@chakra-ui/react";

function Testimonials() {
  return (
    <Box id="testimonials"
    py={20} px={10} textAlign="center" bg="white">
      <Heading size="xl" color="blue.900">What Our Clients Say</Heading>
      <VStack spacing={10} mt={10}>
        <Text fontSize="lg" color="gray.800">"This law firm provided exceptional service and support! Highly recommended." - Client A</Text>
        <Text fontSize="lg" color="gray.800">"Professional and knowledgeable lawyers who truly care." - Client B</Text>
      </VStack>
    </Box>
  );
}

export default Testimonials;
