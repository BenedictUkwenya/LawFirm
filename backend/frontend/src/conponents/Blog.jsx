import { useEffect, useState } from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/blogs");
        setBlogs(res.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <VStack spacing={10} p={10} bg="white">
      {blogs.length > 0 ? blogs.map((blog) => (
        <Box key={blog._id} p={8} shadow="md" borderWidth="1px" w="100%" maxW="600px" bg="blue.900" borderRadius="md">
          <Heading size="md" color="white">{blog.title}</Heading>
          <Text mt={4} color="white">{blog.content}</Text>
          <Text fontSize="sm" color="gray.300">By {blog.author}</Text>
        </Box>
      )) : <Text color="gray.800">No blogs available</Text>}
    </VStack>
  );
};

export default Blog;
