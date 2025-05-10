import {
  Box,
  Img,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Skills = () => {
  const bg = useColorModeValue("white", "#10264f");
  const color = useColorModeValue("#10264f", "white");

  const frontendSkills = [
    { image: require("../../res/blue/java-script.png"), alt: "JavaScript" },
    { image: require("../../res/blue/html.png"), alt: "HTML" },
    { image: require("../../res/blue/css-3.png"), alt: "CSS" },
    { image: require("../../res/blue/atom.png"), alt: "React" },
    { image: require("../../res/blue/redux.png"), alt: "Redux" },
    { image: require("../../res/blue/chakra-ui.png"), alt: "Chakra UI" },
    { image: require("../../res/blue/typescript.png"), alt: "TypeScript" },
    { image: require("../../res/blue/material-ui.png"), alt: "Material UI" },
  ];

  const backendSkills = [
    { image: require("../../res/blue/nodejs.png"), alt: "Node.js" },
    { image: require("../../res/blue/mongodb.png"), alt: "MongoDB" },
    { image: require("../../res/blue/express.png"), alt: "Express" },
    { image: require("../../res/blue/mysql.png"), alt: "MySQL" },
    { image: require("../../res/blue/serverless.png"), alt: "Serverless" },
  ];

  const communicationSkills = [
    { image: require("../../res/blue/teamwork.png"), alt: "Teamwork" },
  ];

  const renderSkills = (skills, animationDirection) => {
    return skills.map((skill, index) => (
      <Fade key={skill.alt} delay={index * 50}>
        <Box
          className="hvr-grow-shadow"
          display="flex"
          alignItems="center"
          borderRadius="10px"
          gap="20px"
          width="100%"
          bg="#3379b5"
          padding="15px"
          color={color}
        >
          <Box width={"12%"}>
            <Img width="100%" src={skill.image} alt={skill.alt} />
          </Box>
          <Text width={"100%"} fontSize="xl">
            {skill.alt}
          </Text>
        </Box>
      </Fade>
    ));
  };

  return (
    <Box bg={bg} color={color} pt="80px" id="Skills">
      <Text textAlign="center" fontSize="3xl" color={color} py="20px">
        Skills
      </Text>
      <SimpleGrid
        w={["90%", "90%", "80%"]}
        m="auto"
        columns={[1, 2, 2, 3]}
        p="20px"
        spacing="20px"
      >
        <VStack gap="10px" width={"100%"}>
          <Slide direction="left">
            <Text textAlign="center" fontSize="2xl" color={color} py="20px">
              Frontend Skills
            </Text>
          </Slide>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap="10px"
            width={"100%"}
          >
            {renderSkills(frontendSkills)}
          </Box>
        </VStack>
        <VStack gap="10px" width={"100%"}>
          <Slide direction="up">
            <Text textAlign="center" fontSize="2xl" color={color} py="20px">
              Backend Skills
            </Text>
          </Slide>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap="10px"
            width={"100%"}
          >
            {renderSkills(backendSkills)}
          </Box>
        </VStack>
        <VStack gap="10px" width={"100%"}>
          <Slide direction="right">
            <Text textAlign="center" fontSize="2xl" color={color} py="20px">
              Communication Skills
            </Text>
          </Slide>
          <Box
            display={"flex"}
            flexDirection={"column"}
            gap="10px"
            width={"100%"}
          >
            {renderSkills(communicationSkills)}
          </Box>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default Skills;
