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
  SiJavascript,
  SiHtml5,
} from "react-icons/si";

// Centralized icon and metadata configuration for technologies
const TECH_ICONS = {
  react: { alt: "React", icon: SiReact },
  storybook: { alt: "Storybook", icon: SiStorybook },
  tailwind: { alt: "Tailwind CSS", icon: SiTailwindcss },
  css: { alt: "CSS", icon: SiCss3 },
  redux: { alt: "Redux", icon: SiRedux },
  "react-native": { alt: "React Native", icon: SiReact },
  node: { alt: "Node-js", icon: SiNodedotjs },
  serverless: { alt: "Serverless", icon: SiServerless },
  chakra: { alt: "Chakra UI", icon: SiChakraui },
  express: { alt: "Express-js", icon: SiExpress },
  mongodb: { alt: "Mongo-DB", icon: SiMongodb },
  javascript: { alt: "Javascript", icon: SiJavascript },
  html: { alt: "HTML", icon: SiHtml5 },
};

const Projects = () => {
  const projectsArr = [
    // {
    //   title: "Bonify Style Kit",
    //   banner: require("./res/other/bsk-storybook-banner.png"),
    //   description:
    //     "A ReactJS UI Library for Dynamic Components created using Storybook, Shadcn and tailwind CSS",
    //   technologies: ["react", "storybook", "tailwind"],
    //   live: "https://frontend-pi-lovat.vercel.app/",
    // },
    // {
    //   title: "Contract Wallet Feature",
    //   banner: require("./res/other/contractWallet-banner.jpeg"),
    //   description:
    //     "Fintech Solution for Bonify where we can Manage user expense contracts, including five types: Mobile Bills, Loans, Electricity, Insurance, and Credit Card.",
    //   technologies: ["react", "redux", "tailwind", "react-native", "node", "serverless"],
    //   live: "https://contracts-bonify.de",
    // },
    // {
    //   title: "Parag Unify Crafts",
    //   banner: require("./res/other/paragunifycrafts-banner.jpeg"),
    //   description:
    //     "Parag Unify Crafts is an e-commerce platform specializing in high-quality kitchenware such as cutlery, cooking spoons, racks, and utility stands.",
    //   technologies: ["react", "redux", "chakra", "node", "express", "mongodb"],
    //   live: "https://paragunifycrafts.co.in/",
    // },
    // {
    //   title: "Goozzby",
    //   banner: require("./res/other/goozzby-banner.jpeg"),
    //   description:
    //     "Goozzby is a platform connecting users with trusted professionals for residential and commercial services, similar to the UrbanClap model.",
    //   technologies: ["react", "redux", "chakra", "node", "express", "mongodb"],
    //   live: "https://dashboard.goozzby.com/",
    // },

    {
      title: "Haire",
      banner: require("./res/other/haire-banner.jpeg"),
      description:
        "Haire is an AI-Powered Recruitment and Interview Platform. where the hiring workflow can be streamlined using AI and also AI-Powered Interview that conducts interviews based on the Job Description and Resume provided.",
      technologies: ["react", "redux", "css", "html", "javascript"],
      live: "https://haire.ai/",
    },
    {
      title: "Licious.com Clone",
      banner: require("./res/other/Licious.png"),
      description:
        "Licious is India's largest D2C Unicorn. The company operates on a farm-to-fork model, owning the entire back-end supply chain and cold chain. It has Products like Meat, seafood, ready-to-cook and ready-to-eat meals",
      technologies: ["react", "mongodb", "node", "redux", "express", "chakra"],
      github: "https://github.com/Prathamesh61/coherent-laborer-2044",
      live: "https://d-licious.vercel.app/",
    },
    {
      title: "Boat-LifeStyle Clone",
      banner: require("./res/other/Boat-banner.jpeg"),
      description:
        "BoAt is an India-based consumer electronics brand established in 2015 that markets earphones, headphones stereos, travel chargers and premium rugged cables.",
      technologies: ["javascript", "html", "css"],
      github: "https://github.com/hariohmtripathi/Boat-Lifestyle-",
      live: "https://friendly-cajeta-33faab.netlify.app/",
    },
    {
      title: "Sephora-Collection Clone",
      banner: require("./res/other/sephora-banner.jpeg"),
      description:
        "Sephora is a French multinational retailer of personal care and beauty products. Sephora offers beauty products including cosmetics, skincare, body, fragrance, and many more.",
      technologies: ["javascript", "html", "css"],
      github: "https://github.com/krajeet35/Project--miscreant-punishment-3547",
      live: "https://euphonious-bubblegum-8add69.netlify.app/",
    },
    {
      title: "Naukri.com Clone",
      banner: require("./res/other/naukri-banner.jpeg"),
      description:
        "Naukri.com is a recruitment platform that provides hiring-related services to corporates/recruiters, placement agencies, and job seekers in India and overseas.",
      technologies: ["react", "chakra"],
      github: "https://github.com/Prathamesh61/sick-dress-4939",
      live: "https://mynaukri.vercel.app/",
    },
    {
      title: "TripAdvisor.com Clone",
      banner: require("./res/other/tripAdvisor-banner.jpeg"),
      description:
        "Tripadvisor, Inc. is an American online travel company that offers online hotel reservations and bookings for transportation, lodging, travel experiences, and restaurants.",
      technologies: ["react", "redux", "chakra"],
      github: "https://github.com/pallu2108/sedate-toys-1304",
      live: "https://trip-advisor-clone.vercel.app/",
    },
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
          A curated selection of applications and platforms I have built from scratch.
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
                    {project.technologies.map((techKey) => {
                      const tech = TECH_ICONS[techKey];
                      if (!tech) return null;
                      return (
                        <Tooltip key={techKey} label={tech.alt}>
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
