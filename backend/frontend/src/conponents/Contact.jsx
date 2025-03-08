import { useState } from "react";
import {
  Box,
  Input,
  Textarea,
  Button,
  useToast,
  Heading,
  Grid,
  GridItem,
  Select,
  Text,
  VStack,
  Icon,
} from "@chakra-ui/react";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/contact", formData);
      toast({
        title: res.data.message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to send message",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }

    setLoading(false);
  };

  return (
    <Box id="contact" p={8} maxW="100vw" mx="auto" bg="gray.100">
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={10}>
        {/* Left - Contact Form */}
        <GridItem bg="white" p={6} borderRadius="md" shadow="md">
          <Heading size="lg" color="blue.900" mb={4}>
            Send Us a Message
          </Heading>
          <form onSubmit={handleSubmit}>
            <Input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              mb={4}
              color="black"
              _placeholder={{ color: "black" }}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              mb={4}
              color="black"
              _placeholder={{ color: "black" }}
              required
            />
            <Input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              mb={4}
              color="black"
              _placeholder={{ color: "black" }}
              required
            />
            <Select
              name="service"
              placeholder="Select a service"
              value={formData.service}
              onChange={handleChange}
              mb={4}
              color="black"
              required
            >
              <option value="Legal Advice">Legal Advice</option>
              <option value="Business Law">Business Law</option>
              <option value="Criminal Law">Criminal Law</option>
              <option value="Family Law">Family Law</option>
            </Select>
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              mb={4}
              color="black"
              _placeholder={{color: "black"}}
              required
            />
            <Button type="submit" colorScheme="blue" isLoading={loading} width="full">
              Submit Request
            </Button>
          </form>
        </GridItem>

        {/* Right - Contact Information */}
        <GridItem bg="blue.900" p={6} borderRadius="md" shadow="md" color="white">
          <Heading size="lg" mb={4}>
            Our Contact Information
          </Heading>
          <VStack align="start" spacing={4}>
            <Box>
              <Icon as={MdLocationOn} boxSize={6} mr={2} color="yellow.400" />
              <Text>
                <strong>Office Address</strong> <br />
                123 Legal Avenue, Suite 500 <br />
                Imo State
              </Text>
            </Box>

            <Box>
              <Icon as={MdPhone} boxSize={6} mr={2} color="yellow.400" />
              <Text>
                <strong>Phone Number</strong> <br />
                08068608302 <br />
                
              </Text>
            </Box>

            <Box>
              <Icon as={MdEmail} boxSize={6} mr={2} color="yellow.400" />
              <Text>
                <strong>Email Address</strong> <br />
                ukwenzyb@gmail.com <br />
                ukwenzyb@gmail.com
              </Text>
            </Box>

            <Box>
              <Text>
                <strong>Office Hours</strong> <br />
                Monday - Friday: 8:00 AM - 6:00 PM <br />
                Saturday: 9:00 AM - 1:00 PM (By Appointment)
              </Text>
            </Box>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Contact;
