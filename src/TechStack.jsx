import { Box, Icon, Text, useColorModeValue, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiMongodb,
  SiNodedotjs,
  SiRedux,
  SiExpress,
  SiServerless,
  SiStorybook,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const TechStack = () => {
  const bg = useColorModeValue("white", "#10264f");
  const color = useColorModeValue("#10264f", "white");
  const iconColor = useColorModeValue("#10264f", "#f0e130");

  const techItems = [
    { icon: SiJavascript, alt: "Javascript" },
    { icon: SiHtml5, alt: "HTML" },
    { icon: SiCss3, alt: "CSS" },
    { icon: SiReact, alt: "React" },
    { icon: SiMongodb, alt: "MongoDb" },
    { icon: SiNodedotjs, alt: "Node-js" },
    { icon: SiRedux, alt: "Redux" },
    { icon: SiExpress, alt: "Express" },
    { icon: FaAws, alt: "AWS" },
    { icon: SiServerless, alt: "Serverless" },
    { icon: SiStorybook, alt: "Storybook" },
  ];

  return (
    <Box
      paddingY="40px"
      paddingTop="80px"
      bg={bg}
      color={color}
      height="max-content"
      id="techStack"
    >
      <Flex direction="column" align="center" justify="center" mb={14}>
        <Heading
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="bold"
          mb={4}
          color={color}
          textAlign="center"
        >
          Tech Stack
        </Heading>
        <Text
          fontSize={{ base: "sm", md: "lg" }}
          color={useColorModeValue("gray.600", "gray.300")}
          maxW="800px"
          textAlign="center"
          px={4}
        >
          A comprehensive toolkit of languages, frameworks, and services I leverage daily.
        </Text>
      </Flex>
      <Zoom cascade>
        <Box
          className="tech-grid"
          width={{ base: "100%", lg: "85%" }}
          margin="auto"
          padding={{ base: "16px 20px", lg: "50px" }}
          marginY="30px"
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          gap={{ base: "14px", sm: "18px", lg: "28px" }}
        >
          {techItems.map((elem, index) => (
            // Outer Box is the flex child with the correct width
            <Box
              key={elem.alt}
              width={{ base: "45%", md: "29%", lg: "120px" }}
            >
              <Fade delay={index * 100}>
                <Box
                  className="hvr-pop"
                  border="2px solid"
                  borderColor={color}
                  borderRadius="14px"
                  boxShadow="rgba(0, 0, 0, 0.15) 0px 4px 12px"
                  _hover={{ borderColor: "#3379b5", boxShadow: "rgba(51,121,181,0.3) 0px 6px 18px" }}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  padding={{ base: "14px 10px", lg: "20px 16px" }}
                  width="100%"
                  transition="box-shadow 0.2s ease, border-color 0.2s ease"
                >
                  <Icon
                    as={elem.icon}
                    boxSize={{ base: "36px", lg: "48px" }}
                    color={iconColor}
                    mb={{ base: "8px", lg: "10px" }}
                  />
                  <Text
                    color={color}
                    textAlign="center"
                    fontSize={{ base: "xs", lg: "sm" }}
                    fontWeight="600"
                    noOfLines={1}
                  >
                    {elem.alt}
                  </Text>
                </Box>
              </Fade>
            </Box>
          ))}
        </Box>
      </Zoom>
    </Box>
  );
};

export default TechStack;
