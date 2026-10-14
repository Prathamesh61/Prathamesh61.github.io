import { Box, Icon, Text, useColorModeValue, Flex, Heading } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiMongodb,
  SiNodedotjs,
  SiRedux,
  SiExpress,
  SiServerless,
  SiStorybook,
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiDjango,
  SiDocker,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const MotionBox = motion(Box);

const TechCard = ({ elem, index }) => {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100, isHovered: false });
  const color = useColorModeValue("#10264f", "white");
  const defaultBg = useColorModeValue("rgba(255, 255, 255, 0.7)", "rgba(16, 38, 79, 0.5)");

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isHovered: true,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, isHovered: false }));
  };

  return (
    <MotionBox
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
      whileHover={{
        y: -8,
        scale: 1.05,
        transition: { type: "spring", stiffness: 350, damping: 15 },
      }}
      position="relative"
      border="2px solid"
      borderColor={mousePos.isHovered ? elem.brandColor : useColorModeValue("rgba(16, 38, 79, 0.15)", "rgba(255, 255, 255, 0.1)")}
      borderRadius="18px"
      bg={defaultBg}
      backdropFilter="blur(16px)"
      boxShadow={
        mousePos.isHovered
          ? `0 14px 28px -6px rgba(0, 0, 0, 0.4), 0 0 20px ${elem.brandColor}66`
          : "rgba(0, 0, 0, 0.2) 0px 4px 12px"
      }
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding={{ base: "18px 12px", lg: "22px 18px" }}
      width={{ base: "45%", sm: "30%", md: "22%", lg: "135px" }}
      overflow="hidden"
      cursor="pointer"
      className="card-glare-effect"
    >
      {/* Interactive Cursor Spotlight Glow */}
      {mousePos.isHovered && (
        <Box
          position="absolute"
          pointerEvents="none"
          top={`${mousePos.y - 60}px`}
          left={`${mousePos.x - 60}px`}
          width="120px"
          height="120px"
          borderRadius="full"
          bg={`radial-gradient(circle, ${elem.brandColor}40 0%, transparent 70%)`}
          zIndex={0}
        />
      )}

      <Icon
        as={elem.icon}
        boxSize={{ base: "38px", lg: "46px" }}
        color={mousePos.isHovered ? elem.brandColor : useColorModeValue("#10264f", "#f0e130")}
        mb={{ base: "10px", lg: "12px" }}
        transition="color 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
        transform={mousePos.isHovered ? "scale(1.15) rotate(4deg)" : "scale(1)"}
        zIndex={1}
      />
      <Text
        color={color}
        textAlign="center"
        fontSize={{ base: "13px", lg: "14px" }}
        fontWeight="700"
        noOfLines={1}
        zIndex={1}
      >
        {elem.alt}
      </Text>
    </MotionBox>
  );
};

const TechStack = () => {
  const bg = useColorModeValue("white", "#10264f");
  const color = useColorModeValue("#10264f", "white");

  const techItems = [
    { icon: SiNextdotjs, alt: "Next.js 16", brandColor: "#000000" },
    { icon: SiReact, alt: "React", brandColor: "#61DAFB" },
    { icon: SiTypescript, alt: "TypeScript", brandColor: "#3178C6" },
    { icon: SiJavascript, alt: "JavaScript", brandColor: "#F7DF1E" },
    { icon: SiPython, alt: "Python", brandColor: "#38BDF8" },
    { icon: SiDjango, alt: "Django", brandColor: "#092E20" },
    { icon: SiNodedotjs, alt: "Node.js", brandColor: "#339933" },
    { icon: SiExpress, alt: "Express", brandColor: "#808080" },
    { icon: SiMongodb, alt: "MongoDB", brandColor: "#47A248" },
    { icon: SiDocker, alt: "Docker", brandColor: "#2496ED" },
    { icon: SiRedux, alt: "Redux", brandColor: "#764ABC" },
    { icon: FaAws, alt: "AWS", brandColor: "#FF9900" },
    { icon: SiServerless, alt: "Serverless", brandColor: "#FD5750" },
    { icon: SiStorybook, alt: "Storybook", brandColor: "#FF4785" },
    { icon: SiCss3, alt: "CSS3", brandColor: "#1572B6" },
    { icon: SiHtml5, alt: "HTML5", brandColor: "#E34F26" },
  ];

  return (
    <Box
      paddingY="50px"
      paddingTop="90px"
      bg={bg}
      color={color}
      height="max-content"
      id="techStack"
      position="relative"
    >
      <Flex direction="column" align="center" justify="center" mb={12}>
        <Heading
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="900"
          mb={4}
          color={color}
          textAlign="center"
          className="shimmer-gradient-text"
        >
          Tech Stack
        </Heading>
        <Text
          fontSize={{ base: "sm", md: "lg" }}
          color={useColorModeValue("gray.600", "gray.300")}
          maxW="800px"
          textAlign="center"
          px={4}
        >
          A battle-tested arsenal of modern languages, distributed frameworks, and cloud utilities I deploy.
        </Text>
      </Flex>

      <Box
        className="tech-grid"
        width={{ base: "100%", lg: "88%" }}
        margin="auto"
        padding={{ base: "10px 16px", lg: "20px 40px" }}
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={{ base: "14px", sm: "18px", lg: "24px" }}
      >
        {techItems.map((elem, index) => (
          <TechCard key={elem.alt} elem={elem} index={index} />
        ))}
      </Box>
    </Box>
  );
};

export default TechStack;
