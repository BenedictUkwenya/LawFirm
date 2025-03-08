import { Box, Text, Grid, GridItem, Button, VStack } from "@chakra-ui/react";

const WhyChooseUs = () => {
  return (
    <Box bg="blue.900" color="white" py={12} px={{ base: 6, md: 16 }} textAlign="center">
      {/* Title */}
      <Text fontSize="3xl" fontWeight="bold">
        Why Choose Us
      </Text>
      <Box width="60px" height="3px" bg="yellow.400" mx="auto" my={2} />

      {/* Subtitle */}
      <Text fontSize="md" maxW="700px" mx="auto" mt={3}>
        At Prestige Law, we combine legal excellence with personalized service to deliver outstanding
        results for our clients.
      </Text>

      {/* Feature Boxes */}
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
        gap={6}
        mt={8}
        textAlign="left"
      >
        <FeatureBox title="Experienced Team">
          Our attorneys have decades of combined experience across all practice areas.
        </FeatureBox>
        <FeatureBox title="Client-Centered Approach">
          We prioritize your needs and goals, providing personalized legal solutions.
        </FeatureBox>
        <FeatureBox title="Proven Track Record">
          We've successfully handled thousands of cases with excellent outcomes.
        </FeatureBox>
        <FeatureBox title="Transparent Communication">
          Clear, consistent updates throughout your case with no surprises.
        </FeatureBox>
      </Grid>

      {/* CTA Box */}
      <Box bg="blue.800" borderRadius="md" p={6} mt={10}>
        <Text fontSize="xl" fontWeight="bold">Ready to Discuss Your Case?</Text>
        <Text fontSize="sm" mt={2}>
          Our team is prepared to help you navigate your legal challenges with expertise and dedication.
        </Text>
        <Button mt={4} bg="yellow.400" color="blue.900" _hover={{ bg: "yellow.500" }}>
          Schedule a Consultation
        </Button>
      </Box>
    </Box>
  );
};

// Feature Box Component
const FeatureBox = ({ title, children }) => {
  return (
    <GridItem bg="blue.800" borderRadius="md" p={5} borderLeft="4px solid yellow.400">
      <Text fontSize="lg" fontWeight="bold" color="yellow.400">{title}</Text>
      <Text fontSize="sm" mt={2}>{children}</Text>
    </GridItem>
  );
};

export default WhyChooseUs;
