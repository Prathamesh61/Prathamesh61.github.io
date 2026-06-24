import {
  Box,
  Icon,
  Text,
  useColorModeValue,
  Flex,
  Heading,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiRedux,
  SiChakraui,
  SiTypescript,
  SiMui,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiServerless,
} from "react-icons/si";
import {
  FaUsers,
  FaCrown,
  FaChalkboardTeacher,
  FaHandshake,
  FaPuzzlePiece,
  FaComments,
  FaLaptopCode,
  FaServer,
  FaUserCheck,
} from "react-icons/fa";

const MotionBox = motion(Box);

const getPosition = (index, total, radius = 37) => {
  const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
  const x = 50 + radius * Math.cos(angle);
  const y = 50 + radius * Math.sin(angle);
  return { x, y };
};

const ConstellationCluster = ({ title, coreIcon, skills, coreColor }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isCoreHovered, setIsCoreHovered] = useState(false);
  const color = useColorModeValue("#10264f", "white");
  const lineColor = useColorModeValue("rgba(16, 38, 79, 0.12)", "rgba(255, 255, 255, 0.08)");
  const coreBg = useColorModeValue("rgba(16, 38, 79, 0.05)", "rgba(255, 255, 255, 0.03)");

  return (
    <VStack spacing={6} w={{ base: "100%", sm: "320px", md: "380px" }} align="center" mx="auto" my={4}>
      <Heading fontSize={{ base: "lg", md: "2xl" }} fontWeight="bold" color={color}>
        {title}
      </Heading>

      <Box
        position="relative"
        width={{ base: "290px", sm: "320px", md: "370px" }}
        height={{ base: "290px", sm: "320px", md: "370px" }}
        borderRadius="full"
        border="1px dashed"
        borderColor={useColorModeValue("rgba(16, 38, 79, 0.08)", "rgba(255, 255, 255, 0.04)")}
        bg={useColorModeValue(
          "radial-gradient(circle, rgba(16, 38, 79, 0.02) 0%, rgba(16, 38, 79, 0.0) 70%)",
          "radial-gradient(circle, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.0) 70%)"
        )}
        overflow="visible"
      >
        {/* SVG connection lines */}
        <svg
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          {skills.map((skill, index) => {
            const { x, y } = getPosition(index, skills.length);
            const isHovered = hoveredSkill === skill.alt;
            const isHighlighted = isHovered || isCoreHovered;

            return (
              <motion.line
                key={`line-${skill.alt}`}
                x1="50%"
                y1="50%"
                x2={`${x}%`}
                y2={`${y}%`}
                stroke={isHighlighted ? skill.color : lineColor}
                strokeWidth={isHighlighted ? (isHovered ? 2.5 : 1.5) : 1}
                strokeDasharray={isHighlighted ? (isHovered ? "none" : "5, 5") : "4, 4"}
                animate={isHighlighted ? {
                  strokeDashoffset: [0, -20],
                } : {}}
                transition={isHighlighted ? {
                  strokeDashoffset: { repeat: Infinity, ease: "linear", duration: 1 },
                  stroke: { duration: 0.25 },
                  strokeWidth: { duration: 0.25 },
                } : {}}
                style={{
                  filter: isHighlighted ? `drop-shadow(0 0 5px ${skill.color}77)` : "none",
                }}
              />
            );
          })}
        </svg>

        {/* Central Core Hub */}
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex={2}
        >
          <MotionBox
            onMouseEnter={() => setIsCoreHovered(true)}
            onMouseLeave={() => setIsCoreHovered(false)}
            whileHover={{ scale: 1.15 }}
            cursor="pointer"
          >
            <Box
              p={{ base: 4, md: 5 }}
              borderRadius="full"
              bg={useColorModeValue("white", "#10264f")}
              border="2.5px solid"
              borderColor={isCoreHovered ? coreColor : useColorModeValue("rgba(16, 38, 79, 0.2)", "rgba(255, 255, 255, 0.15)")}
              boxShadow={
                isCoreHovered
                  ? `0 0 30px 4px ${coreColor}88, inset 0 0 12px ${coreColor}33`
                  : useColorModeValue("0 4px 15px rgba(16, 38, 79, 0.08)", "0 4px 20px rgba(0, 0, 0, 0.4)")
              }
              transition="all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
              display="flex"
              alignItems="center"
              justifyContent="center"
              backdropFilter="blur(12px)"
            >
              <Icon
                as={coreIcon}
                boxSize={{ base: "26px", md: "32px" }}
                color={isCoreHovered ? coreColor : color}
                transition="color 0.2s"
              />
            </Box>
          </MotionBox>
        </Box>

        {/* Skill Nodes */}
        {skills.map((skill, index) => {
          const { x, y } = getPosition(index, skills.length);
          const isHovered = hoveredSkill === skill.alt;

          const floatDelay = index * 0.35;
          const floatDuration = 3.5 + (index % 3) * 0.5;

          return (
            <Box
              key={skill.alt}
              position="absolute"
              left={`${x}%`}
              top={`${y}%`}
              transform="translate(-50%, -50%)"
              zIndex={1}
            >
              <MotionBox
                onMouseEnter={() => setHoveredSkill(skill.alt)}
                onMouseLeave={() => setHoveredSkill(null)}
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    duration: floatDuration,
                    delay: floatDelay,
                    ease: "easeInOut",
                  },
                }}
              >
                <MotionBox
                  whileHover={{
                    scale: 1.12,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  position="relative"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Box
                    p={{ base: "6px", md: "8px" }}
                    borderRadius="full"
                    bg={useColorModeValue(
                      "rgba(255, 255, 255, 0.92)",
                      "rgba(16, 38, 79, 0.75)"
                    )}
                    border="1.5px solid"
                    borderColor={isHovered ? skill.color : useColorModeValue("rgba(16, 38, 79, 0.12)", "rgba(255, 255, 255, 0.08)")}
                    boxShadow={
                      isHovered
                        ? `0 0 20px 3px ${skill.color}77`
                        : useColorModeValue("0 2px 8px -2px rgba(16,38,79,0.08)", "0 2px 8px -2px rgba(0,0,0,0.3)")
                    }
                    backdropFilter="blur(10px)"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    cursor="pointer"
                    transition="border-color 0.25s, box-shadow 0.25s"
                  >
                    <Icon
                      as={skill.icon}
                      boxSize={{ base: "18px", md: "22px" }}
                      color={isHovered ? skill.color : useColorModeValue("#10264f", "white")}
                      transition="color 0.25s, transform 0.25s"
                      transform={isHovered ? "scale(1.1)" : "scale(1)"}
                    />
                  </Box>
                  <Text
                    position="absolute"
                    top="calc(100% + 4px)"
                    left="50%"
                    transform="translateX(-50%)"
                    fontSize={{ base: "9px", md: "11px" }}
                    fontWeight="bold"
                    color={isHovered ? skill.color : useColorModeValue("gray.700", "gray.200")}
                    bg={useColorModeValue("rgba(255, 255, 255, 0.85)", "rgba(16, 38, 79, 0.6)")}
                    px={2}
                    py={0.5}
                    borderRadius="md"
                    backdropFilter="blur(4px)"
                    boxShadow="sm"
                    textAlign="center"
                    whiteSpace="nowrap"
                    pointerEvents="none"
                    transition="color 0.25s"
                    zIndex={3}
                  >
                    {skill.alt}
                  </Text>
                </MotionBox>
              </MotionBox>
            </Box>
          );
        })}
      </Box>
    </VStack>
  );
};

const Skills = () => {
  const bg = useColorModeValue("white", "#10264f");
  const color = useColorModeValue("#10264f", "white");

  const frontendSkills = [
    { icon: SiJavascript, alt: "JavaScript", color: "#F7DF1E" },
    { icon: SiHtml5, alt: "HTML", color: "#E34F26" },
    { icon: SiCss3, alt: "CSS", color: "#1572B6" },
    { icon: SiReact, alt: "React", color: "#61DAFB" },
    { icon: SiRedux, alt: "Redux", color: "#764ABC" },
    { icon: SiChakraui, alt: "Chakra UI", color: "#319795" },
    { icon: SiTypescript, alt: "TypeScript", color: "#3178C6" },
    { icon: SiMui, alt: "Material UI", color: "#007FFF" },
  ];

  const backendSkills = [
    { icon: SiNodedotjs, alt: "Node.js", color: "#339933" },
    { icon: SiMongodb, alt: "MongoDB", color: "#47A248" },
    { icon: SiExpress, alt: "Express", color: "#808080" },
    { icon: SiMysql, alt: "MySQL", color: "#4479A1" },
    { icon: SiServerless, alt: "Serverless", color: "#FD5750" },
  ];

  const softSkills = [
    { icon: FaCrown, alt: "Leadership", color: "#FFD700" },
    { icon: FaChalkboardTeacher, alt: "Mentoring", color: "#4CAF50" },
    { icon: FaHandshake, alt: "Ownership", color: "#FF9800" },
    { icon: FaPuzzlePiece, alt: "Problem Solving", color: "#E91E63" },
    { icon: FaComments, alt: "Communication", color: "#00BCD4" },
    { icon: FaUsers, alt: "Collaboration", color: "#3F51B5" },
  ];

  return (
    <Box bg={bg} color={color} pt="80px" pb="80px" id="Skills">
      <Flex direction="column" align="center" justify="center" mb={14}>
        <Heading
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="bold"
          mb={4}
          color={color}
          textAlign="center"
        >
          Skills & Expertise
        </Heading>
        <Text
          fontSize={{ base: "sm", md: "lg" }}
          color={useColorModeValue("gray.600", "gray.300")}
          maxW="800px"
          textAlign="center"
          px={4}
        >
          Explore the interactive skill constellations below to discover my technical expertise and professional capabilities.
        </Text>
      </Flex>

      <Flex
        direction={{ base: "column", lg: "row" }}
        justify="center"
        align="center"
        gap={{ base: 12, lg: 6 }}
        maxW="1200px"
        mx="auto"
        px={4}
      >
        <ConstellationCluster
          title="Frontend"
          coreIcon={FaLaptopCode}
          skills={frontendSkills}
          coreColor="#3379b5"
        />
        <ConstellationCluster
          title="Backend"
          coreIcon={FaServer}
          skills={backendSkills}
          coreColor="#339933"
        />
        <ConstellationCluster
          title="Soft Skills"
          coreIcon={FaUserCheck}
          skills={softSkills}
          coreColor="#FF9800"
        />
      </Flex>
    </Box>
  );
};

export default Skills;
