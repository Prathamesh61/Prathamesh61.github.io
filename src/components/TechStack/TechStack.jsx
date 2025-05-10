import { Box, Img, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import { Fade, Zoom } from "react-awesome-reveal";

const TechStack = () => {
  const bg = useColorModeValue("white", "#10264f");
  const color = useColorModeValue("#10264f", "white");
  const imagesYellow = [
    { image: require("../../res/yellow/java-script.png"), alt: "Javascript" },
    { image: require("../../res/yellow/html.png"), alt: "HTML" },
    { image: require("../../res/yellow/css-3.png"), alt: "CSS" },
    { image: require("../../res/yellow/atom.png"), alt: "React" },
    { image: require("../../res/yellow/mongodb.png"), alt: "MongoDb" },
    { image: require("../../res/yellow/nodejs.png"), alt: "Node-js" },
    { image: require("../../res/yellow/redux.png"), alt: "Redux" },
    { image: require("../../res/yellow/express.png"), alt: "Express" },
    { image: require("../../res/yellow/aws.png"), alt: "AWS" },
    { image: require("../../res/yellow/serverless.png"), alt: "Serverless" },
    { image: require("../../res/yellow/storybook.png"), alt: "Storybook" },
  ];

  const imagesBlue = [
    { image: require("../../res/blue/java-script.png"), alt: "Javascript" },
    { image: require("../../res/blue/html.png"), alt: "HTML" },
    { image: require("../../res/blue/css-3.png"), alt: "CSS" },
    { image: require("../../res/blue/atom.png"), alt: "React" },
    { image: require("../../res/blue/mongodb.png"), alt: "MongoDb" },
    { image: require("../../res/blue/nodejs.png"), alt: "Node-js" },
    { image: require("../../res/blue/redux.png"), alt: "Redux" },
    { image: require("../../res/blue/express.png"), alt: "Express" },
    { image: require("../../res/blue/aws.png"), alt: "AWS" },
    { image: require("../../res/blue/serverless.png"), alt: "Serverless" },
    { image: require("../../res/blue/storybook.png"), alt: "Storybook" },
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
      <Fade direction="down" cascade>
        <Text textAlign="center" fontSize="3xl" color={color} paddingY="20px">
          Tech Stack
        </Text>
      </Fade>
      <Zoom cascade>
        <Box
          width={{ sm: "100%", md: "90%", lg: "80%" }}
          margin="auto"
          padding={{ sm: "20px", md: "30px", lg: "50px" }}
          display="flex"
          justifyContent="center"
          gap="50px"
          flexWrap="wrap"
          marginY="30px"
        >
          {(bg === "white" ? imagesBlue : imagesYellow).map((elem, index) => (
            <Fade key={elem.alt} delay={index * 100}>
              <Box
                className="hvr-pop"
                border="3px solid"
                width="120px"
                borderRadius="15px"
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                _hover={{ borderColor: "#3379b5" }}
              >
                <ImageWrapper>
                  <Img
                    borderRadius="15px"
                    height={"100px"}
                    objectFit={"contain"}
                    padding="20px"
                    margin={"auto"}
                    src={elem.image}
                    alt={elem.alt}
                  />
                  <Text color={color} textAlign="center">
                    {elem.alt}
                  </Text>
                </ImageWrapper>
              </Box>
            </Fade>
          ))}
        </Box>
      </Zoom>
    </Box>
  );
};

const ImageWrapper = styled.div`
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  :hover {
    color: #ffee10;
  }
  Img:hover {
    padding: 17px;
  }
`;

export default TechStack;
