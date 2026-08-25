import React, { useRef } from "react";
import { Box, Text, Flex, useColorModeValue } from "@chakra-ui/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CollaborationCTA = () => {
  const containerRef = useRef(null);
  const textRow1Ref = useRef(null);
  const textRow2Ref = useRef(null);
  
  const bg = useColorModeValue("#10264f", "#08132b");
  const color = useColorModeValue("white", "white");
  
  useGSAP(() => {
    // Row 1: move left infinitely
    gsap.to(textRow1Ref.current, {
      xPercent: -50,
      repeat: -1,
      duration: 18,
      ease: "none",
    });
    
    // Row 2: move right infinitely
    gsap.fromTo(textRow2Ref.current,
      { xPercent: -50 },
      {
        xPercent: 0,
        repeat: -1,
        duration: 18,
        ease: "none",
      }
    );
    
    // Add scroll parallax to speed
    gsap.to(textRow1Ref.current, {
      x: -120,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });

    gsap.to(textRow2Ref.current, {
      x: 120,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      }
    });
  }, { scope: containerRef });

  const handleScrollToContact = () => {
    document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const textList1 = [
    "Problem Solving",
    "Software Architecture",
    "Full Stack Development",
    "MERN Stack",
    "Clean Code",
    "Responsive Design",
  ];
  
  const textList2 = [
    "React Native Development",
    "Agile Development",
    "API Integrations",
    "Performance Tuning",
    "User Experience",
    "Cloud Solutions",
  ];
  
  // Create repetitive loops for smooth marquee
  const marqueeText1 = [...textList1, ...textList1, ...textList1].join("   •   ");
  const marqueeText2 = [...textList2, ...textList2, ...textList2].join("   •   ");
  
  return (
    <Box
      ref={containerRef}
      bg={bg}
      color={color}
      py={{ base: "60px", md: "80px" }}
      position="relative"
      overflow="hidden"
      cursor="pointer"
      onClick={handleScrollToContact}
      _hover={{
        ".cta-center-text": {
          transform: "translate(-50%, -50%) scale(1.05)",
          textShadow: "0 0 20px rgba(255, 251, 28, 0.4)",
        }
      }}
    >
      {/* Row 1 Marquee */}
      <Flex overflow="hidden" py={2} whiteSpace="nowrap">
        <Text
          ref={textRow1Ref}
          fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
          fontWeight="black"
          color={useColorModeValue("rgba(255, 255, 255, 0.08)", "rgba(255, 255, 255, 0.05)")}
          textTransform="uppercase"
          letterSpacing="0.08em"
          display="inline-block"
        >
          {marqueeText1}
        </Text>
      </Flex>
      
      {/* Row 2 Marquee */}
      <Flex overflow="hidden" py={2} whiteSpace="nowrap" mt={2}>
        <Text
          ref={textRow2Ref}
          fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
          fontWeight="black"
          color={useColorModeValue("rgba(255, 255, 255, 0.08)", "rgba(255, 255, 255, 0.05)")}
          textTransform="uppercase"
          letterSpacing="0.08em"
          display="inline-block"
        >
          {marqueeText2}
        </Text>
      </Flex>
      
      {/* Center Text Overlay */}
      <Box
        className="cta-center-text"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        width="90%"
        zIndex={5}
        transition="all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
        pointerEvents="none"
      >
        <Text
          fontSize={{ base: "2xl", md: "4xl" }}
          fontWeight="extrabold"
          color="white"
          letterSpacing="0.05em"
          mb={2}
        >
          Interested in Collaboration?
        </Text>
        <Text
          fontSize={{ base: "sm", md: "md" }}
          fontWeight="bold"
          color="var(--secondaryColor)"
          letterSpacing="0.12em"
          textTransform="uppercase"
        >
          Let's build something together!
        </Text>
      </Box>
    </Box>
  );
};

export default CollaborationCTA;
