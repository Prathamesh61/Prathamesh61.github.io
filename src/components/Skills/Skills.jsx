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
    { image: require("../../res/blue/nextjs.png"), alt: "Next.js" },
    { image: require("../../res/blue/tailwind-css.png"), alt: "Tailwind CSS" },
    { image: require("../../res/blue/redux.png"), alt: "Redux" },
    { image: require("../../res/blue/chakra-ui.png"), alt: "Chakra UI" },
    { image: require("../../res/blue/typescript.png"), alt: "TypeScript" },
    { image: require("../../res/blue/material-ui.png"), alt: "Material UI" },
  ];

  const backendSkills = [
    { image: require("../../res/blue/nodejs.png"), alt: "Node.js" },
    { image: require("../../res/blue/express.png"), alt: "Express" },
    { image: require("../../res/blue/socket-io.png"), alt: "Socket.io" },
    { image: require("../../res/blue/mongodb.png"), alt: "MongoDB" },
    { image: require("../../res/blue/mysql.png"), alt: "MySQL" },
    { image: require("../../res/blue/serverless.png"), alt: "Serverless" },
  ];

  const communicationSkills = [
    { image: require("../../res/blue/teamwork.png"), alt: "Teamwork" },
    { image: require("../../res/blue/team-player.png"), alt: "Team Player" },
    { image: require("../../res/blue/team-leader.png"), alt: "Leadership" },
  ];

  const renderSkills = (skills, category) => {
    const getCategoryGradient = (category) => {
      switch (category) {
        case "frontend":
          return "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
        case "backend":
          return "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)";
        case "soft":
          return "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)";
        default:
          return "linear-gradient(135deg, #3379b5 0%, #2c5aa0 100%)";
      }
    };

    const getCategoryHoverGradient = (category) => {
      switch (category) {
        case "frontend":
          return "linear-gradient(135deg, #667eea 0%, #5a67d8 100%)";
        case "backend":
          return "linear-gradient(135deg, #f093fb 0%, #e53e3e 100%)";
        case "soft":
          return "linear-gradient(135deg, #4facfe 0%, #38b2ac 100%)";
        default:
          return "linear-gradient(135deg, #3379b5 0%, #1e3a8a 100%)";
      }
    };

    return skills.map((skill, index) => (
      <Fade key={skill.alt} delay={index * 30}>
        <Box
          className="hvr-grow-shadow"
          display="flex"
          flexDirection="column"
          alignItems="center"
          borderRadius={["12px", "13px", "15px"]}
          gap={["8px", "9px", "10px"]}
          minWidth={["90px", "100px", "110px", "120px"]}
          maxWidth={["110px", "120px", "130px", "140px"]}
          bg={getCategoryGradient(category)}
          p={["12px", "13px", "15px"]}
          color="white"
          transition="all 0.3s ease"
          position="relative"
          cursor="pointer"
          _before={{
            content: '""',
            position: "absolute",
            top: "-2px",
            left: "-2px",
            right: "-2px",
            bottom: "-2px",
            background: getCategoryGradient(category),
            borderRadius: "17px",
            zIndex: "-1",
            opacity: 0,
            transition: "opacity 0.3s ease",
          }}
          _hover={{
            transform: "translateY(-5px) scale(1.02)",
            boxShadow: "0 15px 35px rgba(0, 0, 0, 0.2)",
            bg: getCategoryHoverGradient(category),
            _before: {
              opacity: 0.3,
            },
          }}
        >
          <Box
            width={["40px", "45px", "50px"]}
            height={["40px", "45px", "50px"]}
            p={["6px", "7px", "8px"]}
            borderRadius={["6px", "7px", "8px"]}
            bg="rgba(255, 255, 255, 0.25)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            transition="all 0.3s ease"
            _hover={{
              transform: "rotate(5deg) scale(1.1)",
            }}
          >
            <Img width="100%" src={skill.image} alt={skill.alt} />
          </Box>
          <Text
            fontSize={["xs", "sm", "sm"]}
            fontWeight="500"
            textAlign="center"
          >
            {skill.alt}
          </Text>
        </Box>
      </Fade>
    ));
  };

  return (
    <Box
      bg={bg}
      color={color}
      px={["15px", "30px", "50px", "80px"]}
      py={["30px", "40px", "50px"]}
      pt={["60px", "70px", "80px"]}
      id="Skills"
    >
      <Text
        textAlign="center"
        fontSize={["2xl", "3xl", "4xl"]}
        fontWeight="bold"
        bgGradient="linear(to-r, #3379b5, #fffb1c)"
        bgClip="text"
        py={["10px", "15px", "20px"]}
      >
        Skills & Technologies
      </Text>
      <Text
        textAlign="center"
        fontSize={["sm", "md", "lg"]}
        color={color}
        opacity={0.8}
        mb={["20px", "25px", "30px"]}
        width={["90%", "80%", "70%"]}
        margin={"auto"}
        px={["10px", "15px", "20px"]}
      >
        My technical expertise and professional capabilities
      </Text>
      <VStack
        spacing={["25px", "35px", "40px"]}
        w={["95%", "90%", "88%", "85%"]}
        m="auto"
        p={["10px", "15px", "20px"]}
      >
        {/* Frontend Skills - Full Width */}
        <VStack gap="15px" width={"100%"}>
          <Slide direction="left">
            <Text
              textAlign="center"
              fontSize={["xl", "2xl", "3xl"]}
              fontWeight="semibold"
              color={color}
              py={["8px", "10px", "12px"]}
              position="relative"
            >
              Frontend Skills
              <Text
                as="span"
                fontSize="sm"
                fontWeight="normal"
                opacity={0.7}
                ml="8px"
                bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                bgClip="text"
                color="transparent"
              >
                ({frontendSkills.length})
              </Text>
            </Text>
          </Slide>
          <Box
            display={"flex"}
            flexDirection={"row"}
            flexWrap="wrap"
            gap={["10px", "12px", "15px"]}
            width={"100%"}
            justifyContent="center"
          >
            {renderSkills(frontendSkills, "frontend")}
          </Box>
        </VStack>

        {/* Backend & Communication Skills - Side by Side */}
        <SimpleGrid
          columns={[1, 1, 2]}
          spacing={["20px", "25px", "30px"]}
          width="100%"
        >
          <VStack gap="15px" width={"100%"}>
            <Slide direction="up">
              <Text
                textAlign="center"
                fontSize={["xl", "2xl", "3xl"]}
                fontWeight="semibold"
                color={color}
                py={["8px", "10px", "12px"]}
              >
                Backend Skills
                <Text
                  as="span"
                  fontSize="sm"
                  fontWeight="normal"
                  opacity={0.7}
                  ml="8px"
                  bg="linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
                  bgClip="text"
                  color="transparent"
                >
                  ({backendSkills.length})
                </Text>
              </Text>
            </Slide>
            <Box
              display={"flex"}
              flexDirection={"row"}
              flexWrap="wrap"
              gap={["10px", "12px", "15px"]}
              width={"100%"}
              justifyContent="center"
            >
              {renderSkills(backendSkills, "backend")}
            </Box>
          </VStack>

          <VStack gap={["10px", "12px", "15px"]} width={"100%"}>
            <Slide direction="right">
              <Text
                textAlign="center"
                fontSize={["xl", "2xl", "3xl"]}
                fontWeight="semibold"
                color={color}
                py={["8px", "10px", "12px"]}
              >
                Soft Skills
                <Text
                  as="span"
                  fontSize="sm"
                  fontWeight="normal"
                  opacity={0.7}
                  ml="8px"
                  bg="linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
                  bgClip="text"
                  color="transparent"
                >
                  ({communicationSkills.length})
                </Text>
              </Text>
            </Slide>
            <Box
              display={"flex"}
              flexDirection={"row"}
              flexWrap="wrap"
              gap="15px"
              width={"100%"}
              justifyContent="center"
            >
              {renderSkills(communicationSkills, "soft")}
            </Box>
          </VStack>
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Skills;
