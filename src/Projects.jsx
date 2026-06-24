import {
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Img,
  SimpleGrid,
  Text,
  Tooltip,
  useColorModeValue,
  VStack,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { FaLink } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import {
  SiReact,
  SiStorybook,
  SiTailwindcss,
  SiCss3,
  SiRedux,
  SiNodedotjs,
  SiServerless,
  SiChakraui,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiSocketdotio,
  SiJavascript,
  SiHtml5,
} from "react-icons/si";

// Banner imports
import bskBanner from "./res/other/bsk-storybook-banner.png";
import contractWalletBanner from "./res/other/contractWallet-banner.jpeg";
import paragBanner from "./res/other/paragunifycrafts-banner.jpeg";
import goozzbyBanner from "./res/other/goozzby-banner.jpeg";
import emsconnect from "./res/other/emsconnect.jpg";
import cricarabia from "./res/other/cricarabia-banner.png";
import logyxpsBanner from "./res/other/logyxps-banner.png";
import haireBanner from "./res/other/haire-banner.jpeg";
import liciousBanner from "./res/other/Licious.png";

// Centralized icon and metadata configuration for technologies
const TECH_ICONS = {
  atom: { alt: "React", icon: SiReact },
  storybook: { alt: "Storybook", icon: SiStorybook },
  tailwind: { alt: "Tailwind CSS", icon: SiTailwindcss },
  "css-3": { alt: "CSS", icon: SiCss3 },
  redux: { alt: "Redux", icon: SiRedux },
  "react-native": { alt: "React Native", icon: SiReact },
  nodejs: { alt: "Node-js", icon: SiNodedotjs },
  serverless: { alt: "Serverless", icon: SiServerless },
  "chakra-ui": { alt: "Chakra UI", icon: SiChakraui },
  express: { alt: "Express-js", icon: SiExpress },
  mongodb: { alt: "Mongo-DB", icon: SiMongodb },
  nextjs: { alt: "NextJS", icon: SiNextdotjs },
  "socket-io": { alt: "Socket-io", icon: SiSocketdotio },
  javascript: { alt: "Javascript", icon: SiJavascript },
  html: { alt: "HTML", icon: SiHtml5 },
};

const Projects = () => {
  const projectsArr = [
    {
      title: "Haire",
      banner: haireBanner,
      description:
        "Haire is an AI-Powered Recruitment and Interview Platform. where the hiring workflow can be streamlined using AI and also AI-Powered Interview that conducts interviews based on the Job Description and Resume provided.",
      tech: [
        { blue: "atom", yellow: "atom", alt: "React" },
        { blue: "redux", yellow: "redux", alt: "Redux" },
        { blue: "css-3", yellow: "css-3", alt: "CSS" },
        { blue: "html", yellow: "html", alt: "HTML" },
        { blue: "javascript", yellow: "javascript", alt: "JavaScript" },
      ],
      live: [
        {
          link: "https://haire.ai/",
          name: "",
        },
      ],
    },
    {
      title: "CricArabia",
      banner: cricarabia,
      description:
        "CricArabia is a comprehensive cricket application designed for cricket enthusiasts across the Arab region. The app provides real-time cricket scores, match updates, player statistics, and tournament information.",
      tech: [
        { blue: "atom", yellow: "atom", alt: "React" },
        { blue: "nextjs", yellow: "nextjs", alt: "NextJS" },
        { blue: "tailwind", yellow: "tailwind", alt: "Tailwind CSS" },
        { blue: "socket-io", yellow: "socket-io", alt: "Socket-io" },
      ],
      live: [
        {
          link: "https://cricarabia.com",
          name: "",
        },
      ],
    },
    {
      title: "Logyxps",
      banner: logyxpsBanner,
      description:
        "Logyxps is an advanced logistics and supply chain management platform designed to optimize delivery operations and enhance customer experience. The platform provides real-time tracking, route optimization, inventory management, and comprehensive analytics for businesses looking to streamline their logistics operations.",
      tech: [
        { blue: "atom", yellow: "atom", alt: "React" },
        { blue: "redux", yellow: "redux", alt: "Redux" },
        { blue: "mongodb", yellow: "mongodb", alt: "MongoDB" },
        { blue: "serverless", yellow: "serverless", alt: "Serverless" },
        { blue: "tailwind", yellow: "tailwind", alt: "Tailwind CSS" },
        { blue: "socket-io", yellow: "socket-io", alt: "Socket-io" },
      ],
      live: [
        {
          link: "https://app.logyxps.com",
          name: "",
        },
      ],
    },
    {
      title: "EMS Connect",
      banner: emsconnect,
      description:
        "EMS Connect is an organizational meeting app designed to streamline internal communication. Admins can manage employees, create news alerts, schedule meetings, and organize events across the entire organization. It’s built to enhance collaboration and administrative control.",
      tech: [
        { blue: "atom", yellow: "atom", alt: "React" },
        { blue: "serverless", yellow: "serverless", alt: "Serverless" },
        { blue: "css-3", yellow: "css-3", alt: "tailwind CSS" },
      ],
      live: [
        {
          link: "https://apps.apple.com/in/app/ems-connect-local-416/id6479523021",
          name: "App Store",
        },
        {
          link: "https://play.google.com/store/apps/details?id=com.emsconnect&hl=en",
          name: "Play Store",
        },
      ],
    },
    {
      title: "Licious.com Clone",
      banner: liciousBanner,
      description:
        "Licious is India's largest D2C Unicorn. The company operates on a farm-to-fork model, owning the entire back-end supply chain and cold chain. It has Products like Meat, seafood, ready-to-cook and ready-to-eat meals",
      tech: [
        { blue: "atom", yellow: "atom", alt: "React" },
        { blue: "mongodb", yellow: "mongodb", alt: "MongoDB" },
        { blue: "nodejs", yellow: "nodejs", alt: "Node.js" },
        { blue: "redux", yellow: "redux", alt: "Redux" },
        { blue: "express", yellow: "express", alt: "Express.js" },
        { blue: "chakra-ui", yellow: "chakra-ui", alt: "Chakra UI" },
      ],
      live: [
        {
          link: "https://d-licious.vercel.app/",
          name: "",
        },
      ],
    },
    /*
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
      live: [{ link: "https://frontend-pi-lovat.vercel.app/", name: "" }],
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
      live: [{ link: "https://frontend-pi-lovat.vercel.app/", name: "" }],
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
      live: [{ link: "https://paragunifycrafts.co.in/", name: "" }],
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
      live: [{ link: "https://dashboard.goozzby.com/", name: "" }],
    },
    */
  ];

  const bg = useColorModeValue("white", "#10264f");
  const color = useColorModeValue("#10264f", "white");

  return (
    <Box py="30px" pt="80px" bg={bg} color={color} id="Projects">
      <Flex direction="column" align="center" justify="center" mb={14}>
        <Heading
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="bold"
          mb={4}
          color={color}
          textAlign="center"
        >
          Featured Projects
        </Heading>
        <Text
          fontSize={{ base: "sm", md: "lg" }}
          color={useColorModeValue("gray.600", "gray.300")}
          maxW="600px"
          textAlign="center"
          px={4}
        >
          A curated selection of applications and platforms I have built.
        </Text>
      </Flex>
      <VStack py="30px" width={{ base: "92%", md: "80%", lg: "70%" }} mx="auto" gap={{ base: "32px", md: "50px" }}>
        {projectsArr.map((project, index) => (
          <Fade
            key={index}
            direction={index % 2 === 0 ? "left" : "right"}
            cascade
            triggerOnce={false}
            damping={0.2}
          >
            <HStack className="hvr-grow-shadow">
              <SimpleGrid
                columns={[1, 1, 1, 2]}
                p={{ base: "16px", md: "28px", lg: "40px" }}
                justifyContent="center"
                alignItems="center"
                gap="20px"
                border="3px solid"
                borderColor={color}
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                borderRadius="15px"
              >
                <Box overflowY="hidden" h={{ base: "200px", md: "260px", lg: "300px" }}>
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
                  <Text fontSize={{ base: "xl", md: "2xl" }} color={color} textAlign="center">
                    {project.title}
                  </Text>
                  <Text fontSize={{ base: "14px", md: "16px", lg: "18px" }} align="center">
                    {project.description}
                  </Text>
                  <Flex
                    flexWrap="wrap"
                    justifyContent="center"
                    gap="10px"
                    py="20px"
                    alignSelf="center"
                  >
                    {project.tech.map((techItem, i) => {
                      const tech = TECH_ICONS[techItem.blue];
                      if (!tech) return null;
                      return (
                        <Tooltip key={i} label={techItem.alt}>
                          <span>
                            <Icon
                              className="hvr-pop"
                              as={tech.icon}
                              boxSize="30px"
                              color={color}
                            />
                          </span>
                        </Tooltip>
                      );
                    })}
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
                    {project.live &&
                      project.live.map((el, i) => {
                        return (
                          <a
                            key={i}
                            href={el.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button
                              className="hvr-underline-from-center"
                              leftIcon={<FaLink />}
                            >
                              {el.name || "Live"}
                            </Button>
                          </a>
                        );
                      })}
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
