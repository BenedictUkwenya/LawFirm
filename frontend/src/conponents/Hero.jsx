import { VStack, Heading, Text, Button } from "@chakra-ui/react";

function Hero() {
  return (
    <VStack textAlign="center" spacing={10} py={24} bg="blue.900">
      <Heading size="2xl" color="white">Your Trusted Legal Partner</Heading>
      <Text fontSize="lg" color="white">Providing expert legal solutions for individuals and businesses.</Text>
      <Button colorScheme="teal" size="lg">Schedule a Consultation</Button>
    </VStack>
  );
}

export default Hero;
