import { ChakraProvider, Box } from "@chakra-ui/react";
import Header from "./conponents/Header";
import Hero from "./conponents/Hero";
import AboutUs from "./conponents/About";
import PracticeAreas from "./conponents/Practice";
import WhyChooseUs from "./conponents/WhyChooseUs";
import Testimonials from "./conponents/Testimonials";
import Contact from "./conponents/Contact";
import Footer from "./conponents/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./conponents/Blog";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box maxW="100vw" mx="auto" px={6} bg="gray.50">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <AboutUs />
                  <PracticeAreas />
                  <WhyChooseUs />
                  <Testimonials />
                  <Contact />
                  <Footer />
                </>
              }
            />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
