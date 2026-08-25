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
import React, { useRef } from "react";
import { FaLink } from "react-icons/fa";
import { trackEvent } from "./util";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useGSAP(() => {
    // Parallax background text scroll
    gsap.to(".gsap-bg-text-projects", {
      x: -120,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    let scrollTween;
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const setupTrigger = () => {
      if (mediaQuery.matches) {
        const scrollDistance = scrollEl.scrollWidth - window.innerWidth;
        
        scrollTween = gsap.to(scrollEl, {
          x: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            start: "top top",
            end: () => `+=${scrollDistance}`,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      } else {
        gsap.set(scrollEl, { clearProps: "all" });
      }
    };

    setupTrigger();

    const handleResize = () => {
      if (scrollTween) {
        scrollTween.scrollTrigger?.kill();
        scrollTween.kill();
      }
      setupTrigger();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (scrollTween) {
        scrollTween.scrollTrigger?.kill();
        scrollTween.kill();
      }
    };
  }, { scope: containerRef });

  return (
    <Box ref={containerRef} py="30px" pt="80px" bg={bg} color={color} id="Projects" overflow="hidden">
      <Box className="gsap-bg-text gsap-bg-text-projects" left="50%" transform="translateX(-50%)">PROJECTS</Box>
      <Flex direction="column" align="center" justify="center" mb={6} className="gsap-project-header">
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
      
      <Flex
        ref={scrollRef}
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: "32px", md: "60px" }}
        px={{ base: "4%", md: "8%" }}
        py="30px"
        width={{ base: "100%", md: "max-content" }}
        alignItems="center"
      >
        {projectsArr.map((project, index) => (
          <Box
            key={index}
            className="gsap-project-card"
            width={{ base: "100%", md: "550px", lg: "650px" }}
            flexShrink={0}
          >
            <HStack className="hvr-grow-shadow" h="100%">
              <SimpleGrid
                columns={1}
                p={{ base: "16px", md: "24px", lg: "32px" }}
                justifyContent="center"
                alignItems="center"
                gap="20px"
                border="3px solid"
                borderColor={color}
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                borderRadius="15px"
                bg={useColorModeValue("rgba(255, 255, 255, 0.72)", "rgba(16, 38, 79, 0.45)")}
                backdropFilter="blur(16px)"
                w="100%"
              >
                <Box overflowY="hidden" h={{ base: "180px", md: "220px" }}>
                  <Img
                    border="3px solid"
                    borderColor={color}
                    borderRadius="10px"
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    src={project.banner}
                    alt={project.title}
                  />
                </Box>
                <VStack alignSelf="flex-start" spacing={3}>
                  <Text fontSize={{ base: "xl", md: "2xl" }} color={color} fontWeight="bold" textAlign="center">
                    {project.title}
                  </Text>
                  <Text fontSize={{ base: "14px", md: "15px" }} align="center" noOfLines={3}>
                    {project.description}
                  </Text>
                  <Flex
                    flexWrap="wrap"
                    justifyContent="center"
                    gap="10px"
                    py="5px"
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
                              boxSize="26px"
                              color={color}
                            />
                          </span>
                        </Tooltip>
                      );
                    })}
                  </Flex>
                  <HStack spacing={4}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          trackEvent("project_link_click", {
                            project_title: project.title,
                            type: "Github",
                            url: project.github,
                          })
                        }
                      >
                        <Button
                          className="hvr-underline-from-center"
                          leftIcon={<FaLink />}
                          size="sm"
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
                            onClick={() =>
                              trackEvent("project_link_click", {
                                project_title: project.title,
                                type: el.name || "Live",
                                url: el.link,
                              })
                            }
                          >
                            <Button
                              className="hvr-underline-from-center"
                              leftIcon={<FaLink />}
                              size="sm"
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
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Projects;
