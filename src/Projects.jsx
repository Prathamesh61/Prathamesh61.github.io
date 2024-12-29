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
import React from "react";
import { FaLink } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  const projectsArr = [
    {
      title: "Bonify Style Kit",
      banner: require("./res/other/bsk-storybook-banner.png"),
      description:
        "A ReactJS UI Library for Dynamic Components created using Storybook, Shadcn and tailwind CSS",
      techBlue: [
        {
          image: require("./res/blue/atom.png"),
          alt: "React",
        },
        {
          image: require("./res/blue/storybook.png"),
          alt: "Storybook",
        },
        {
          image: require("./res/blue/css-3.png"),
          alt: "taiwind CSS",
        },
      ],
      techYellow: [
        {
          image: require("./res/yellow/atom.png"),
          alt: "React",
        },
        {
          image: require("./res/yellow/storybook.png"),
          alt: "Storybook",
        },
        {
          image: require("./res/yellow/css-3.png"),
          alt: "tailwind CSS",
        },
      ],
      live: "https://frontend-pi-lovat.vercel.app/",
    },
    {
      title: "Contract Wallet Feature",
      banner: require("./res/other/contractWallet-banner.jpeg"),
      description:
        "Fintech Solution for Bonify where we can Manage user expense contracts, including five types: Mobile Bills, Loans, Electricity, Insurance, and Credit Card.",
      techBlue: [
        {
          image: require("./res/blue/atom.png"),
          alt: "React",
        },
        {
          image: require("./res/blue/redux.png"),
          alt: "Redux",
        },
        {
          image: require("./res/blue/css-3.png"),
          alt: "taiwind CSS",
        },
        {
          image: require("./res/blue/atom.png"),
          alt: "React Native",
        },
        {
          image: require("./res/blue/node-js.png"),
          alt: "Node-js",
        },
        {
          image: require("./res/blue/serverless.png"),
          alt: "Serverless",
        },
      ],
      techYellow: [
        {
          image: require("./res/yellow/atom.png"),
          alt: "React",
        },
        {
          image: require("./res/yellow/redux.png"),
          alt: "Redux",
        },
        {
          image: require("./res/yellow/css-3.png"),
          alt: "taiwind CSS",
        },
        {
          image: require("./res/yellow/atom.png"),
          alt: "React Native",
        },
        {
          image: require("./res/yellow/nodejs.png"),
          alt: "Node-js",
        },
        {
          image: require("./res/yellow/serverless.png"),
          alt: "Serverless",
        },
      ],
      live: "https://frontend-pi-lovat.vercel.app/",
    },
    {
      title: "Parag Unify Crafts",
      banner: require("./res/other/paragunifycrafts-banner.jpeg"),
      description:
        "Parag Unify Crafts is an e-commerce platform specializing in high-quality kitchenware such as cutlery, cooking spoons, racks, and utility stands.",
      techBlue: [
        {
          image: require("./res/blue/atom.png"),
          alt: "React",
        },
        {
          image: require("./res/blue/redux.png"),
          alt: "Redux",
        },
        {
          image: require("./res/blue/chakra-ui.png"),
          alt: "Chakra UI",
        },
        {
          image: require("./res/blue/node-js.png"),
          alt: "Node-js",
        },
        {
          image: require("./res/blue/express.png"),
          alt: "Express-js",
        },
        {
          image: require("./res/blue/mongodb.png"),
          alt: "Mongo-DB",
        },
      ],
      techYellow: [
        {
          image: require("./res/yellow/atom.png"),
          alt: "React",
        },
        {
          image: require("./res/yellow/redux.png"),
          alt: "Redux",
        },
        {
          image: require("./res/yellow/chakra-ui.png"),
          alt: "chakra UI",
        },
        {
          image: require("./res/yellow/nodejs.png"),
          alt: "Node-js",
        },
        {
          image: require("./res/yellow/express.png"),
          alt: "Express-js",
        },
        {
          image: require("./res/yellow/mongodb.png"),
          alt: "Mongo-DB",
        },
      ],
      live: "https://paragunifycrafts.co.in/",
    },
    {
      title: "Goozzby",
      banner: require("./res/other/goozzby-banner.jpeg"),
      description:
        "Goozzby is a platform connecting users with trusted professionals for residential and commercial services, similar to the UrbanClap model.",
      techBlue: [
        {
          image: require("./res/blue/atom.png"),
          alt: "React",
        },
        {
          image: require("./res/blue/redux.png"),
          alt: "Redux",
        },
        {
          image: require("./res/blue/chakra-ui.png"),
          alt: "Chakra UI",
        },
        {
          image: require("./res/blue/node-js.png"),
          alt: "Node-js",
        },
        {
          image: require("./res/blue/express.png"),
          alt: "Express-js",
        },
        {
          image: require("./res/blue/mongodb.png"),
          alt: "Mongo-DB",
        },
      ],
      techYellow: [
        {
          image: require("./res/yellow/atom.png"),
          alt: "React",
        },
        {
          image: require("./res/yellow/redux.png"),
          alt: "Redux",
        },
        {
          image: require("./res/yellow/chakra-ui.png"),
          alt: "chakra UI",
        },
        {
          image: require("./res/yellow/nodejs.png"),
          alt: "Node-js",
        },
        {
          image: require("./res/yellow/express.png"),
          alt: "Express-js",
        },
        {
          image: require("./res/yellow/mongodb.png"),
          alt: "Mongo-DB",
        },
      ],
      live: "https://dashboard.goozzby.com/",
    },
    {
      title: "Licious.com Clone",
      banner: require("./res/other/Licious.png"),
      description:
        "Licious is India's largest D2C Unicorn. The company operates on a farm-to-fork model, owning the entire back-end supply chain and cold chain. It has Products like Meat, seafood, ready-to-cook and ready-to-eat meals",
      techBlue: [
        {
          image: require("./res/blue/atom.png"),
          alt: "React",
        },
        {
          image: require("./res/blue/mongodb.png"),
          alt: "MongoDb",
        },
        {
          image: require("./res/blue/node-js.png"),
          alt: "Node-js",
        },
        {
          image: require("./res/blue/redux.png"),
          alt: "Redux",
        },
        {
          image: require("./res/blue/express.png"),
          alt: "Express",
        },
        {
          image: require("./res/blue/chakra-ui.png"),
          alt: "Chakra UI",
        },
      ],
      techYellow: [
        {
          image: require("./res/yellow/atom.png"),
          alt: "React",
        },
        {
          image: require("./res/yellow/mongodb.png"),
          alt: "MongoDb",
        },
        {
          image: require("./res/yellow/nodejs.png"),
          alt: "Node-js",
        },
        {
          image: require("./res/yellow/redux.png"),
          alt: "Redux",
        },
        {
          image: require("./res/yellow/express.png"),
          alt: "Express",
        },
        {
          image: require("./res/yellow/chakra-ui.png"),
          alt: "Chakra UI",
        },
      ],
      github: "https://github.com/Prathamesh61/coherent-laborer-2044",
      live: "https://frontend-pi-lovat.vercel.app/",
    },
    {
      title: "Boat-LifeStyle Clone",
      banner: require("./res/other/Boat-banner.jpeg"),
      description:
        "BoAt is an India-based consumer electronics brand established in 2015 that markets earphones, headphones stereos, travel chargers and premium rugged cables.",
      techYellow: [
        {
          image: require("./res/yellow/java-script.png"),
          alt: "Javascript",
        },
        {
          image: require("./res/yellow/html.png"),
          alt: "HTML",
        },
        {
          image: require("./res/yellow/css-3.png"),
          alt: "CSS",
        },
      ],
      techBlue: [
        {
          image: require("./res/blue/java-script.png"),
          alt: "Javascript",
        },
        {
          image: require("./res/blue/html.png"),
          alt: "HTML",
        },
        {
          image: require("./res/blue/css-3.png"),
          alt: "CSS",
        },
      ],
      github: "https://github.com/hariohmtripathi/Boat-Lifestyle-",
      live: "https://friendly-cajeta-33faab.netlify.app/",
    },
    {
      title: "Sephora-Collection Clone",
      banner: require("./res/other/sephora-banner.jpeg"),
      description:
        "Sephora is a French multinational retailer of personal care and beauty products. Sephora offers beauty products including cosmetics, skincare, body, fragrance, and many more.",
      techYellow: [
        {
          image: require("./res/yellow/java-script.png"),
          alt: "Javascript",
        },
        {
          image: require("./res/yellow/html.png"),
          alt: "HTML",
        },
        {
          image: require("./res/yellow/css-3.png"),
          alt: "CSS",
        },
      ],
      techBlue: [
        {
          image: require("./res/blue/java-script.png"),
          alt: "Javascript",
        },
        {
          image: require("./res/blue/html.png"),
          alt: "HTML",
        },
        {
          image: require("./res/blue/css-3.png"),
          alt: "CSS",
        },
      ],

      github: "https://github.com/krajeet35/Project--miscreant-punishment-3547",
      live: "https://euphonious-bubblegum-8add69.netlify.app/",
    },
    {
      title: "Naukri.com Clone",
      banner: require("./res/other/naukri-banner.jpeg"),
      description:
        "Naukri.com is a recruitment platform that provides hiring-related services to corporates/recruiters, placement agencies, and job seekers in India and overseas.",
      techBlue: [
        {
          image: require("./res/blue/atom.png"),
          alt: "React",
        },
        {
          image: require("./res/blue/chakra-ui.png"),
          alt: "Chakra UI",
        },
      ],
      techYellow: [
        {
          image: require("./res/yellow/atom.png"),
          alt: "React",
        },
        {
          image: require("./res/yellow/chakra-ui.png"),
          alt: "Chakra UI",
        },
      ],
      github: "https://github.com/Prathamesh61/sick-dress-4939",
      live: "https://mynaukri.vercel.app/",
    },
    {
      title: "TripAdvisor.com Clone",
      banner: require("./res/other/tripAdvisor-banner.jpeg"),
      description:
        "Tripadvisor, Inc. is an American online travel company that offers online hotel reservations and bookings for transportation, lodging, travel experiences, and restaurants.",
      techBlue: [
        {
          image: require("./res/blue/atom.png"),
          alt: "React",
        },
        {
          image: require("./res/blue/redux.png"),
          alt: "Redux",
        },
        {
          image: require("./res/blue/chakra-ui.png"),
          alt: "Chakra UI",
        },
      ],
      techYellow: [
        {
          image: require("./res/yellow/atom.png"),
          alt: "React",
        },
        {
          image: require("./res/yellow/redux.png"),
          alt: "Redux",
        },
        {
          image: require("./res/yellow/chakra-ui.png"),
          alt: "Chakra UI",
        },
      ],
      github: "https://github.com/pallu2108/sedate-toys-1304",
      live: "https://trip-advisor-clone.vercel.app/",
    },
  ];

  const bg = useColorModeValue("white", "#10264f");
  const color = useColorModeValue("#10264f", "white");

  return (
    <Box py="30px" pt="80px" bg={bg} color={color} id="Projects">
      <Text textAlign="center" fontSize="3xl" color={color}>
        Projects
      </Text>
      <VStack py="30px" width="70%" mx="auto" gap="50px">
        {projectsArr.map((project, index) => (
          <Fade
            direction={index % 2 === 0 ? "left" : "right"}
            cascade
            triggerOnce={false}
            damping={0.2}
          >
            <HStack className="hvr-grow-shadow">
              <SimpleGrid
                columns={[1, 1, 1, 2]}
                p="40px"
                justifyContent="center"
                alignItems="center"
                gap="20px"
                border="3px solid"
                borderColor={color}
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                borderRadius="15px"
              >
                <Box overflowY="hidden" h="300px">
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
                    {(bg === "white"
                      ? project.techBlue
                      : project.techYellow
                    ).map((tech) => (
                      <Tooltip label={tech?.alt}>
                        <Img
                          className="hvr-pop"
                          alignSelf="start"
                          width="30px"
                          src={tech.image}
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
