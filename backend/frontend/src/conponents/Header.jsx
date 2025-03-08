import { Box, Flex, Button, Link as ChakraLink, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box 
      as="header" 
      position="sticky" 
      top="0" 
      bg="white" 
      boxShadow="md" 
      zIndex="1000"
      p={4}
    >
      <Flex align="center" maxW="1200px" mx="auto">
        {/* Logo */}
        <Text fontSize="2xl" fontWeight="bold">
          <span style={{ color: "#1A365D" }}>LAW</span>{" "}
          <span style={{ color: "#D69E2E" }}>FIRM</span>
        </Text>

        <Spacer />

        {/* Navigation Links */}
        <Flex gap={6} display={{ base: "none", md: "flex" }} color="black">
          <ChakraLink as={Link} to="/" _hover={{ textDecoration: "none", color: "blue.600" }}>Home</ChakraLink>
          <ChakraLink 
  href="#about" 
  _hover={{ textDecoration: "none", color: "blue.600" }}
  onClick={(e) => {
    e.preventDefault(); // Prevent default navigation
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  }}
>
  About
</ChakraLink>

<ChakraLink 
  href="#services" 
  _hover={{ textDecoration: "none", color: "blue.600" }}
  onClick={(e) => {
    e.preventDefault(); // Prevent default navigation
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
  }}
>
  Practice Areas
</ChakraLink>

          <ChakraLink 
  href="#testimonials" 
  _hover={{ textDecoration: "none", color: "blue.600" }}
  onClick={(e) => {
    e.preventDefault(); // Prevent default navigation
    document.getElementById("testimonials").scrollIntoView({ behavior: "smooth" });
  }}
>
  Testimonials
</ChakraLink>

          <ChakraLink 
  href="#contact" 
  _hover={{ textDecoration: "none", color: "blue.600" }}
  onClick={(e) => {
    e.preventDefault(); // Prevent default link behavior
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }}
>
  Contact
</ChakraLink>

        </Flex>

        <Spacer />

        {/* CTA Button */}
        <Button 
        href="#contact"
          as={Link} 
          to="/contact" 
          bg="yellow.500" 
          color="white" 
          _hover={{ bg: "yellow.600" }} 
          borderRadius="md"

          onClick={(e) => {
            e.preventDefault(); // Prevent default link behavior
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
          }}
        >
          Free Consultation
        </Button>
      </Flex>
    </Box>
  );
};

export default Header;
