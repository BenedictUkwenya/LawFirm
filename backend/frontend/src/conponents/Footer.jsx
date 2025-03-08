import { Box, Grid, GridItem, Text, VStack, Link, Icon, HStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="blue.900" color="white" py={8} px={10}>
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }} gap={8}>
        {/* Left - Company Info */}
        <GridItem>
          <Text fontSize="xl" fontWeight="bold" color="yellow.400">
            LAW <span style={{ color: "white" }}>FIRM</span>
          </Text>
          <Text fontSize="sm" mt={2}>
            Providing exceptional legal services with integrity and dedication since 1985.
          </Text>
          <HStack spacing={4} mt={3}>
            <Link href="#" isExternal>
              <Icon as={FaFacebook} boxSize={5} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaTwitter} boxSize={5} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaLinkedin} boxSize={5} />
            </Link>
          </HStack>
        </GridItem>

        {/* Middle - Practice Areas & Quick Links */}
        <GridItem>
          <VStack align="start" spacing={2}>
            <Text fontSize="lg" fontWeight="bold" color="yellow.400">
              Practice Areas
            </Text>
            <Link href="#">Corporate Law</Link>
            <Link href="#">Family Law</Link>
            <Link href="#">Real Estate Law</Link>
            <Link href="#">Personal Injury</Link>
            <Link href="#">Criminal Defense</Link>
            <Link href="#">Intellectual Property</Link>
          </VStack>
        </GridItem>

        <GridItem>
          <VStack align="start" spacing={2}>
            <Text fontSize="lg" fontWeight="bold" color="yellow.400">
              Quick Links
            </Text>
            <Link href="#">Home</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Our Attorneys</Link>
            <Link href="#">Case Results</Link>
            <Link href="#">Testimonials</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Contact</Link>
          </VStack>
        </GridItem>

        {/* Right - Contact Info */}
        <GridItem>
          <VStack align="start" spacing={2}>
            <Text fontSize="lg" fontWeight="bold" color="yellow.400">
              Contact Info
            </Text>
            <Text>Federal University</Text>
            <Text>Owerri, Imo state</Text>
            <Text>Phone: 08068608302</Text>
            <Text>Email: ukwenzyb@gmal.com</Text>
          </VStack>
        </GridItem>
      </Grid>

      {/* Bottom Section */}
      <Box mt={6} textAlign="center" fontSize="sm" borderTop="1px solid gray" pt={4}>
        <Text>© 2025  Law Firm. All rights reserved.</Text>
        <HStack justify="center" spacing={6} mt={2}>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Disclaimer</Link>
        </HStack>
      </Box>
    </Box>
  );
};

export default Footer;
