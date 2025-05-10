import {
  Box,
  Button,
  Flex,
  HStack,
  Img,
  SimpleGrid,
  Text,
  Tooltip,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import { FaLink } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

// Sample image import (recommend importing statically at the top)
import bskBanner from "../../res/other/bsk-storybook-banner.png";
import contractWalletBanner from "../../res/other/contractWallet-banner.jpeg";
import paragBanner from "../../res/other/paragunifycrafts-banner.jpeg";
import goozzbyBanner from "../../res/other/goozzby-banner.jpeg";
import emsconnect from "../../res/other/emsconnect.jpg";

const techIcons = {
  blue: {
    atom: require("../../res/blue/atom.png"),
    redux: require("../../res/blue/redux.png"),
    "css-3": require("../../res/blue/css-3.png"),
    "chakra-ui": require("../../res/blue/chakra-ui.png"),
    nodejs: require("../../res/blue/nodejs.png"),
    express: require("../../res/blue/express.png"),
    mongodb: require("../../res/blue/mongodb.png"),
    serverless: require("../../res/blue/serverless.png"),
    storybook: require("../../res/blue/storybook.png"),
  },
  yellow: {
    atom: require("../../res/yellow/atom.png"),
    redux: require("../../res/yellow/redux.png"),
    "css-3": require("../../res/yellow/css-3.png"),
    "chakra-ui": require("../../res/yellow/chakra-ui.png"),
    nodejs: require("../../res/yellow/nodejs.png"),
    express: require("../../res/yellow/express.png"),
    mongodb: require("../../res/yellow/mongodb.png"),
    serverless: require("../../res/yellow/serverless.png"),
    storybook: require("../../res/yellow/storybook.png"),
  },
};
const Projects = () => {
  const bg = useColorModeValue("white", "#10264f");
  const color = useColorModeValue("#10264f", "white");

  const projectsArr = useMemo(
    () => [
      {
        title: "EMS Connect",
        banner: emsconnect,
        description:
          "EMS Connect is an organizational meeting app designed to streamline internal communication. Admins can manage employees, create news alerts, schedule meetings, and organize events across the entire organization. It’s built to enhance collaboration and administrative control.",
        tech: [
          { blue: "atom", yellow: "atom", alt: "React" },
          { blue: "storybook", yellow: "storybook", alt: "Storybook" },
          { blue: "css-3", yellow: "css-3", alt: "tailwind CSS" },
        ],
        live: "https://apps.apple.com/in/app/ems-connect-local-416/id6479523021",
      },
      {
        title: "Bonify Style Kit",
        banner: bskBanner,
        description:
          "A ReactJS UI Library for Dynamic Components created using Storybook, Shadcn and tailwind CSS also handled with playwright testing and lerna for CICD checks and development.",
        tech: [
          { blue: "atom", yellow: "atom", alt: "React" },
          { blue: "storybook", yellow: "storybook", alt: "Storybook" },
          { blue: "css-3", yellow: "css-3", alt: "tailwind CSS" },
        ],
        live: "https://frontend-pi-lovat.vercel.app/",
      },
      {
        title: "Contract Wallet Feature",
        banner: contractWalletBanner,
        description:
          "Fintech Solution for Bonify for managing five types of expense contracts: Mobile Bills, Loans, Electricity, Insurance, and Credit Card.",
        tech: [
          { blue: "atom", yellow: "atom", alt: "React" },
          { blue: "redux", yellow: "redux", alt: "Redux" },
          { blue: "css-3", yellow: "css-3", alt: "tailwind CSS" },
          { blue: "atom", yellow: "atom", alt: "React Native" },
          { blue: "nodejs", yellow: "nodejs", alt: "Node.js" },
          { blue: "serverless", yellow: "serverless", alt: "Serverless" },
        ],
        live: "https://frontend-pi-lovat.vercel.app/",
      },
      {
        title: "Parag Unify Crafts",
        banner: paragBanner,
        description:
          "An e-commerce platform specializing in high-quality kitchenware like cutlery, spoons, racks, and utility stands.",
        tech: [
          { blue: "atom", yellow: "atom", alt: "React" },
          { blue: "redux", yellow: "redux", alt: "Redux" },
          { blue: "chakra-ui", yellow: "chakra-ui", alt: "Chakra UI" },
          { blue: "nodejs", yellow: "nodejs", alt: "Node.js" },
          { blue: "express", yellow: "express", alt: "Express.js" },
          { blue: "mongodb", yellow: "mongodb", alt: "MongoDB" },
        ],
        live: "https://paragunifycrafts.co.in/",
      },
      {
        title: "Goozzby",
        banner: goozzbyBanner,
        description:
          "A service platform connecting users with professionals for residential and commercial services (similar to UrbanClap).",
        tech: [
          { blue: "atom", yellow: "atom", alt: "React" },
          { blue: "redux", yellow: "redux", alt: "Redux" },
          { blue: "chakra-ui", yellow: "chakra-ui", alt: "Chakra UI" },
          { blue: "nodejs", yellow: "nodejs", alt: "Node.js" },
          { blue: "express", yellow: "express", alt: "Express.js" },
          { blue: "mongodb", yellow: "mongodb", alt: "MongoDB" },
        ],
        live: "https://dashboard.goozzby.com/",
      },
    ],
    []
  );

  const getTechImage = (techName, theme) => {
    console.log({ theme, techName });
    return techIcons[theme][techName];
  };

  return (
    <Box py="30px" pt="80px" bg={bg} color={color} id="Projects">
      <Text textAlign="center" fontSize="3xl" color={color}>
        Projects
      </Text>
      <VStack py="30px" width={["80%", "80%", "70%"]} mx="auto" gap="50px">
        {projectsArr.map((project, index) => (
          <Fade
            key={project.title}
            direction={index % 2 === 0 ? "left" : "right"}
            cascade
            triggerOnce
            damping={0.2}
          >
            <HStack className="hvr-grow-shadow">
              <SimpleGrid
                columns={[1, 1, 1, 2]}
                p={["20px", "30px", "40px"]}
                justifyContent="center"
                alignItems="center"
                gap="20px"
                border="3px solid"
                borderColor={color}
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                borderRadius="15px"
              >
                <Box overflowY="hidden" h={["fit-content", "300px"]}>
                  <Img
                    border="3px solid"
                    borderColor={color}
                    borderRadius="10px"
                    width="100%"
                    src={project.banner}
                    alt={project.title}
                  />
                </Box>
                <VStack alignSelf="flex-start">
                  <Text fontSize="2xl" color={color} textAlign="center">
                    {project.title}
                  </Text>
                  <Text fontSize="18px" align="center">
                    {project.description}
                  </Text>
                  <Flex
                    flexWrap="wrap"
                    justifyContent="center"
                    gap="10px"
                    py="20px"
                    alignSelf="center"
                  >
                    {project.tech.map((tech, i) => (
                      <Tooltip key={i} label={tech.alt}>
                        <Img
                          className="hvr-pop"
                          alignSelf="start"
                          width="30px"
                          src={getTechImage(
                            bg === "yellow" ? tech.blue : tech.yellow,
                            bg === "white" ? "blue" : "yellow"
                          )}
                          alt={tech.alt}
                        />
                      </Tooltip>
                    ))}
                  </Flex>
                  <HStack>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          className="hvr-underline-from-center"
                          leftIcon={<FaLink />}
                        >
                          Github
                        </Button>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          className="hvr-underline-from-center"
                          leftIcon={<FaLink />}
                        >
                          Live
                        </Button>
                      </a>
                    )}
                  </HStack>
                </VStack>
              </SimpleGrid>
            </HStack>
          </Fade>
        ))}
      </VStack>
    </Box>
  );
};

export default Projects;
