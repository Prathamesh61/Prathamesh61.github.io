import React, { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Text,
  Icon,
  Tag,
  useColorModeValue,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { keyframes } from "@emotion/react";

const MotionBox = motion(Box);

const pulse = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(72, 187, 120, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 6px rgba(72, 187, 120, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(72, 187, 120, 0);
  }
`;

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 80 : -80,
    opacity: 0,
  }),
};

const experiences = [
  {
    company: "86 Agency",
    role: "Software Development Engineer",
    duration: "May 2023 - Nov 2025",
    isActive: false,
    achievements: [
      {
        label: "Full Stack SDE",
        text: "Worked as a full-stack web developer in a fast-paced startup environment.",
      },
      {
        label: "Web Apps",
        text: "Developed and maintained web applications using a combination of front-end and back-end technologies.",
      },
      {
        label: "Debugging",
        text: "Conducted thorough testing and debugging to identify and fix software defects.",
      },
      {
        label: "Automation",
        text: "Done Unit Testing and Automation Testing with testing tools in order to deliver a good code quality.",
      },
      {
        label: "Deployment",
        text: "Assisted in deploying applications to production environments and provided ongoing support.",
      },
    ],
    skills: [
      "React",
      "React Native",
      "NodeJS",
      "Serverless",
      "Express",
      "AWS",
      "Automation Testing",
      "Unit Testing",
      "Playwright Testing",
      "Storybook",
    ],
    color1: "#FF9800",
    color2: "#ffd700",
    iconColor: "#FF9800",
  },
  {
    company: "Arcitech",
    role: "Senior Frontend Engineer",
    duration: "Nov 2025 - Present",
    isActive: true,
    achievements: [
      {
        label: "Leadership",
        text: "Led a team of 5 developers, managing task planning, code reviews, technical decisions, and timely project delivery.",
      },
      {
        label: "UI Componentry",
        text: "Developed reusable UI component libraries using modern design systems, reducing development effort and ensuring consistency across projects.",
      },
      {
        label: "AI & Chatbots",
        text: "Integrated LLM-powered features and AI chatbots, enabling conversational workflows, automated assistance, and intelligent user interactions.",
      },
      {
        label: "WebSockets",
        text: "Implemented WebSocket-based real-time communication for live notifications, chat systems, status tracking, and collaborative features.",
      },
      {
        label: "Vitest Testing",
        text: "Created and maintained unit, integration, and end-to-end tests using Vitest to ensure feature reliability and reduce regressions.",
      },
      {
        label: "Agile SDLC",
        text: "Collaborated closely with product, design, backend, and testing teams throughout the Software Development Life Cycle (SDLC), following Agile and Scrum methodologies.",
      },
      {
        label: "Full Stack",
        text: "Contributed to client projects, delivering full-stack features and driving continuous improvements in code quality, performance, and user experience.",
      },
    ],
    skills: [
      "React",
      "TypeScript",
      "WebSockets",
      "Vitest",
      "LLM Integration",
      "AI Chatbots",
      "UI Library",
      "Agile/Scrum",
      "Team Leadership",
    ],
    color1: "#3379b5",
    color2: "#61dafb",
    iconColor: "#3379b5",
  },
];

const WorkExperience = () => {
  const bg = useColorModeValue("white", "#10264f");
  const color = useColorModeValue("#10264f", "white");
  const borderColor = useColorModeValue("rgba(16, 38, 79, 0.08)", "rgba(255, 255, 255, 0.06)");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // States for active selectors and animation direction
  const [activeIndexes, setActiveIndexes] = useState({ 0: 0, 1: 0 });
  const [slideDirections, setSlideDirections] = useState({ 0: 1, 1: 1 });

  const handleNext = (cardIdx, total) => {
    setSlideDirections((prev) => ({ ...prev, [cardIdx]: 1 }));
    setActiveIndexes((prev) => {
      const current = prev[cardIdx];
      const next = (current + 1) % total;
      return { ...prev, [cardIdx]: next };
    });
  };

  const handlePrev = (cardIdx, total) => {
    setSlideDirections((prev) => ({ ...prev, [cardIdx]: -1 }));
    setActiveIndexes((prev) => {
      const current = prev[cardIdx];
      const next = (current - 1 + total) % total;
      return { ...prev, [cardIdx]: next };
    });
  };

  const handleSelectPill = (cardIdx, pillIdx) => {
    setActiveIndexes((prev) => {
      const current = prev[cardIdx];
      const direction = pillIdx > current ? 1 : -1;
      setSlideDirections((prevDir) => ({ ...prevDir, [cardIdx]: direction }));
      return { ...prev, [cardIdx]: pillIdx };
    });
  };

  // Independent auto-play hooks for staggered slider movement (2.5s delay)
  useEffect(() => {
    if (hoveredIndex === 0) return;
    const interval = setInterval(() => {
      setSlideDirections((d) => ({ ...d, 0: 1 }));
      setActiveIndexes((prev) => ({
        ...prev,
        0: (prev[0] + 1) % experiences[0].achievements.length,
      }));
    }, 2500);
    return () => clearInterval(interval);
  }, [hoveredIndex]);

  useEffect(() => {
    if (hoveredIndex === 1) return;
    // Stagger the second slider by starting it with an offset (1.25s) for alternating cadence
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setSlideDirections((d) => ({ ...d, 1: 1 }));
        setActiveIndexes((prev) => ({
          ...prev,
          1: (prev[1] + 1) % experiences[1].achievements.length,
        }));
      }, 3500);
    }, 1250);

    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [hoveredIndex]);

  // Auto-scroll the active pill into view when activeIndexes change (without vertical window scroll)
  useEffect(() => {
    experiences.forEach((exp, cardIdx) => {
      const activePillIdx = activeIndexes[cardIdx];
      const activeElement = document.getElementById(`pill-${cardIdx}-${activePillIdx}`);
      if (activeElement) {
        const parent = activeElement.parentElement;
        if (parent) {
          const parentWidth = parent.clientWidth;
          const elementLeft = activeElement.offsetLeft;
          const elementWidth = activeElement.clientWidth;
          
          parent.scrollTo({
            left: elementLeft - (parentWidth / 2) + (elementWidth / 2),
            behavior: "smooth",
          });
        }
      }
    });
  }, [activeIndexes]);

  return (
    <Box py="50px" pt="80px" bg={bg} color={color} id="workExperience">
      <Flex direction="column" align="center" justify="center" mb={14}>
        <Heading
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="bold"
          mb={4}
          color={color}
          textAlign="center"
        >
          Work Experience
        </Heading>
        <Text
          fontSize={{ base: "sm", md: "lg" }}
          color={useColorModeValue("gray.600", "gray.300")}
          maxW="600px"
          textAlign="center"
          px={4}
        >
          My professional journey and career milestones
        </Text>
      </Flex>

      <Box position="relative" maxW="1200px" mx="auto" px={{ base: "32px", lg: "20px" }}>
        {/* Horizontal Timeline Connector (Desktop) */}
        <Box
          display={{ base: "none", lg: "block" }}
          position="absolute"
          top="50px"
          left="150px"
          right="150px"
          h="2px"
          bgGradient="linear(to-r, transparent, #FF9800, #3379b5, transparent)"
          zIndex={0}
          opacity={0.6}
        />

        {/* Vertical Timeline Connector (Mobile) */}
        <Box
          display={{ base: "block", lg: "none" }}
          position="absolute"
          left="17px"
          top="50px"
          bottom="50px"
          w="2px"
          bgGradient="linear(to-b, transparent, #FF9800, #3379b5, transparent)"
          zIndex={0}
          opacity={0.6}
        />

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={8}
          alignItems="stretch"
          position="relative"
          zIndex={1}
        >
          {experiences.map((exp, index) => {
            const isHovered = hoveredIndex === index;
            const cardBorderGradient = `linear-to-br, ${exp.color1}, ${exp.color2}`;
            const fallbackBorder = useColorModeValue(
              "rgba(16, 38, 79, 0.08)",
              "rgba(255, 255, 255, 0.06)"
            );

            return (
              <Box key={index} position="relative">
                {/* Timeline Dot Node */}
                <Box
                  position="absolute"
                  left={{ base: "-24px", lg: "-9px" }}
                  top="40px"
                  w="18px"
                  h="18px"
                  borderRadius="full"
                  bg={exp.iconColor}
                  border="3px solid"
                  borderColor={bg}
                  boxShadow={
                    exp.isActive
                      ? `0 0 12px ${exp.iconColor}`
                      : `0 0 8px ${exp.iconColor}88`
                  }
                  animation={exp.isActive ? `${pulse} 2s infinite` : "none"}
                  zIndex={10}
                />

                <MotionBox
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  p="1.5px"
                  borderRadius="2xl"
                  bgGradient={isHovered ? cardBorderGradient : "linear-to-br, transparent, transparent"}
                  border={isHovered ? "none" : "1px solid"}
                  borderColor={isHovered ? "transparent" : fallbackBorder}
                  boxShadow={
                    isHovered
                      ? `0 20px 40px -15px ${exp.color1}44`
                      : useColorModeValue(
                          "0 4px 20px -2px rgba(16,38,79,0.03)",
                          "0 4px 20px -2px rgba(0,0,0,0.2)"
                        )
                  }
                  display="flex"
                  flexDirection="column"
                  cursor="pointer"
                  overflow="hidden"
                  h="100%"
                >
              <Box
                h="100%"
                bg={useColorModeValue("rgba(255, 255, 255, 0.95)", "rgba(16, 38, 79, 0.55)")}
                backdropFilter="blur(16px)"
                borderRadius="2xl"
                p={{ base: 5, md: 8 }}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                transition="background-color 0.25s"
              >
                <Box>
                  {/* Top Section wrapper with min-height for visual consistency */}
                  <Box minH={{ base: "auto", md: "210px", lg: "190px" }}>
                    {/* Header */}
                    <Flex
                      justify="space-between"
                      align={{ base: "flex-start", sm: "center" }}
                      direction={{ base: "column", sm: "row" }}
                      gap="12px"
                      mb={6}
                    >
                      <VStack align="flex-start" spacing={1} maxW={{ base: "100%", sm: "65%" }}>
                        <Text fontSize="md" fontWeight="bold" color={exp.iconColor}>
                          {exp.company}
                        </Text>
                        <Heading fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color={color}>
                          {exp.role}
                        </Heading>
                      </VStack>

                      <VStack
                        align={{ base: "flex-start", sm: "flex-end" }}
                        spacing={2}
                        flexShrink={0}
                        whiteSpace="nowrap"
                      >
                        <Flex
                          align="center"
                          gap="6px"
                          color="gray.500"
                          fontSize="sm"
                          whiteSpace="nowrap"
                        >
                          <Icon as={FaCalendarAlt} />
                          <Text fontWeight="medium">{exp.duration}</Text>
                        </Flex>
                        {exp.isActive ? (
                          <Flex align="center" gap="6px" whiteSpace="nowrap">
                            <Box
                              w="8px"
                              h="8px"
                              borderRadius="full"
                              bg="green.400"
                              animation={`${pulse} 2s infinite`}
                            />
                            <Text
                              fontSize="xs"
                              fontWeight="bold"
                              color="green.400"
                              textTransform="uppercase"
                              letterSpacing="wider"
                            >
                              Currently Working
                            </Text>
                          </Flex>
                        ) : (
                          <Flex align="center" gap="6px" whiteSpace="nowrap">
                            <Box
                              w="8px"
                              h="8px"
                              borderRadius="full"
                              bg="gray.400"
                            />
                            <Text
                              fontSize="xs"
                              fontWeight="bold"
                              color="gray.400"
                              textTransform="uppercase"
                              letterSpacing="wider"
                            >
                              Past Role
                            </Text>
                          </Flex>
                        )}
                      </VStack>
                    </Flex>

                    {/* Skills Tag Cloud */}
                    <Flex gap="6px" wrap="wrap" mb={8}>
                      {exp.skills.map((skill, idx) => (
                        <Tag
                          key={idx}
                          bg={useColorModeValue(
                            "rgba(51, 121, 181, 0.05)",
                            "rgba(255, 255, 255, 0.03)"
                          )}
                          color={useColorModeValue("#10264f", "rgba(255, 255, 255, 0.85)")}
                          fontWeight="semibold"
                          px="10px"
                          py="4px"
                          borderRadius="md"
                          fontSize="10px"
                          border="1px solid"
                          borderColor={useColorModeValue(
                            "rgba(16, 38, 79, 0.05)",
                            "rgba(255, 255, 255, 0.05)"
                          )}
                          _hover={{
                            borderColor: exp.iconColor,
                            color: exp.iconColor,
                            bg: `${exp.iconColor}10`,
                          }}
                          transition="all 0.2s"
                          cursor="pointer"
                        >
                          {skill}
                        </Tag>
                      ))}
                    </Flex>
                  </Box>

                  {/* Contribution Slider Module with stable min-height */}
                  <Box
                    py={4}
                    borderTop="1px solid"
                    borderColor={borderColor}
                    minH={{ base: "auto", sm: "240px" }}
                  >
                    {/* Keyword Tabs (Pills) positioned above */}
                    <Flex
                      overflowX="auto"
                      overflowY="hidden"
                      w="100%"
                      gap={2}
                      pb={3}
                      mb={4}
                      css={{
                        "&::-webkit-scrollbar": { display: "none" },
                        msOverflowStyle: "none",
                        scrollbarWidth: "none",
                      }}
                      align="center"
                    >
                      {exp.achievements.map((ach, idx) => {
                        const isActive = activeIndexes[index] === idx;
                        return (
                          <Tag
                            id={`pill-${index}-${idx}`}
                            key={idx}
                            onClick={() => handleSelectPill(index, idx)}
                            cursor="pointer"
                            bg={isActive ? exp.iconColor : "transparent"}
                            color={isActive ? "white" : useColorModeValue("gray.600", "gray.400")}
                            border="1.5px solid"
                            borderColor={
                              isActive
                                ? exp.iconColor
                                : useColorModeValue("rgba(16, 38, 79, 0.15)", "rgba(255, 255, 255, 0.1)")
                            }
                            borderRadius="full"
                            px="12px"
                            py="6px"
                            fontWeight="bold"
                            fontSize="11px"
                            whiteSpace="nowrap"
                            flexShrink={0}
                            transition="all 0.25s"
                            boxShadow={isActive ? `0 0 10px ${exp.iconColor}66` : "none"}
                          >
                            {ach.label}
                          </Tag>
                        );
                      })}
                    </Flex>

                    {/* Infinite Horizontal Slider Display */}
                    <Flex align="center" gap={3} w="100%">
                      <Box
                        onClick={() => handlePrev(index, exp.achievements.length)}
                        cursor="pointer"
                        p="8px"
                        borderRadius="full"
                        border="1px solid"
                        borderColor={useColorModeValue(
                          "rgba(16, 38, 79, 0.1)",
                          "rgba(255, 255, 255, 0.08)"
                        )}
                        bg={useColorModeValue("rgba(16, 38, 79, 0.02)", "rgba(255, 255, 255, 0.02)")}
                        _hover={{
                          bg: `${exp.iconColor}22`,
                          borderColor: exp.iconColor,
                          color: exp.iconColor,
                        }}
                        transition="all 0.2s"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Icon as={FaChevronLeft} fontSize="xs" />
                      </Box>

                      {/* Sliding Pane Container */}
                      <Box
                        flex="1"
                        overflow="hidden"
                        minH="120px"
                        display="flex"
                        alignItems="center"
                      >
                        <AnimatePresence initial={false} custom={slideDirections[index]} mode="wait">
                          <motion.div
                            key={activeIndexes[index]}
                            custom={slideDirections[index]}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                              x: { type: "spring", stiffness: 300, damping: 28 },
                              opacity: { duration: 0.18 },
                            }}
                            style={{ width: "100%" }}
                          >
                            <VStack align="flex-start" spacing={1.5}>
                              <Text
                                fontSize="10px"
                                fontWeight="bold"
                                color={exp.iconColor}
                                letterSpacing="wider"
                                textTransform="uppercase"
                              >
                                {exp.achievements[activeIndexes[index]].label}
                              </Text>
                              <Text
                                fontSize={{ base: "xs", sm: "sm", md: "md" }}
                                lineHeight="tall"
                                color={useColorModeValue("gray.700", "gray.200")}
                              >
                                {exp.achievements[activeIndexes[index]].text}
                              </Text>
                            </VStack>
                          </motion.div>
                        </AnimatePresence>
                      </Box>

                      <Box
                        onClick={() => handleNext(index, exp.achievements.length)}
                        cursor="pointer"
                        p="8px"
                        borderRadius="full"
                        border="1px solid"
                        borderColor={useColorModeValue(
                          "rgba(16, 38, 79, 0.1)",
                          "rgba(255, 255, 255, 0.08)"
                        )}
                        bg={useColorModeValue("rgba(16, 38, 79, 0.02)", "rgba(255, 255, 255, 0.02)")}
                        _hover={{
                          bg: `${exp.iconColor}22`,
                          borderColor: exp.iconColor,
                          color: exp.iconColor,
                        }}
                        transition="all 0.2s"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Icon as={FaChevronRight} fontSize="xs" />
                      </Box>
                    </Flex>
                  </Box>
                </Box>
              </Box>
            </MotionBox>
          </Box>
        );
      })}
    </SimpleGrid>
  </Box>
</Box>
  );
};

export default WorkExperience;
