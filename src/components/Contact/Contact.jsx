import {
  Box,
  Divider,
  HStack,
  Text,
  useColorModeValue,
  Flex,
  Heading,
  Button,
  SimpleGrid,
  Tooltip,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { trackEvent } from "../../util";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaCopy,
  FaCheck,
  FaPaperPlane,
  FaMapMarkerAlt,
} from "react-icons/fa";

const MotionBox = motion(Box);

const Contact = () => {
  const bg = useColorModeValue("white", "#10264f");
  const color = useColorModeValue("#10264f", "white");
  const cardBg = useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(16, 38, 79, 0.6)");
  const cardBorder = useColorModeValue("rgba(16, 38, 79, 0.15)", "rgba(255, 255, 255, 0.15)");
  const secondaryTextColor = useColorModeValue("gray.600", "gray.300");

  const containerRef = useRef(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
      trackEvent("copy_contact_info", { type: "email" });
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
      trackEvent("copy_contact_info", { type: "phone" });
    }
  };

  useGSAP(() => {
    gsap.to(".gsap-bg-text-contact", {
      x: -120,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, { scope: containerRef });

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/prathamesh-rawool411/",
      brandColor: "#0a66c2",
      label: "Connect on LinkedIn",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/Prathamesh61",
      brandColor: "#8b5cf6",
      label: "Explore GitHub Profile",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:prathameshrawool411@gmail.com",
      brandColor: "#ea4335",
      label: "Send Direct Email",
    },
  ];

  return (
    <Box
      ref={containerRef}
      bg={bg}
      color={color}
      pt="80px"
      pb={{ base: "60px", md: "80px" }}
      id="Contact"
      position="relative"
      overflow="hidden"
    >
      <Box className="gsap-bg-text gsap-bg-text-contact">CONTACT</Box>

      <Box maxW="1100px" mx="auto" px={{ base: 4, md: 8 }} position="relative" zIndex={2}>
        {/* Section Header */}
        <Flex direction="column" align="center" justify="center" mb={10}>
          {/* Live Availability Beacon Badge */}
          <Box
            display="inline-flex"
            alignItems="center"
            gap="10px"
            px="16px"
            py="7px"
            borderRadius="full"
            bg={useColorModeValue("rgba(16, 38, 79, 0.06)", "rgba(255, 255, 255, 0.08)")}
            border="1px solid"
            borderColor={useColorModeValue("rgba(16, 38, 79, 0.12)", "rgba(255, 255, 255, 0.15)")}
            backdropFilter="blur(10px)"
            mb={4}
          >
            <span className="pulse-beacon" />
            <Text
              fontSize="xs"
              fontWeight="bold"
              letterSpacing="0.08em"
              textTransform="uppercase"
              color={useColorModeValue("green.700", "green.300")}
            >
              Open for Opportunities & Collaborations
            </Text>
          </Box>

          <Heading
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
            mb={4}
            color={color}
            textAlign="center"
            className="text-shimmer"
          >
            Let's Build Something Extraordinary
          </Heading>
          <Text
            fontSize={{ base: "sm", md: "lg" }}
            color={secondaryTextColor}
            maxW="700px"
            textAlign="center"
            px={4}
          >
            Whether you have an exciting full-time role, a freelance architecture challenge, or just want to discuss algorithms and tech — my inbox is always open.
          </Text>
        </Flex>

        {/* Interactive Contact Hub Grid */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }} mb={12}>
          {/* Email Card */}
          <MotionBox
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="card-glare-effect"
            p={6}
            borderRadius="20px"
            bg={cardBg}
            border="1.5px solid"
            borderColor={cardBorder}
            backdropFilter="blur(16px)"
            boxShadow="0 10px 30px rgba(0, 0, 0, 0.1)"
            textAlign="center"
            position="relative"
            overflow="hidden"
          >
            <Flex
              w="54px"
              h="54px"
              borderRadius="16px"
              mx="auto"
              mb={4}
              align="center"
              justify="center"
              bg={useColorModeValue("blue.50", "rgba(51, 121, 181, 0.25)")}
              color="var(--PrimaryMainColorLight)"
              fontSize="24px"
            >
              <FaEnvelope />
            </Flex>
            <Text fontWeight="bold" fontSize="lg" mb={1} color={color}>
              Email
            </Text>
            <Text fontSize="sm" color={secondaryTextColor} mb={4} noOfLines={1}>
              prathameshrawool411@gmail.com
            </Text>
            <HStack spacing={2} justify="center">
              <Button
                size="sm"
                variant="outline"
                leftIcon={copiedEmail ? <FaCheck color="#10b981" /> : <FaCopy />}
                onClick={() => copyToClipboard("prathameshrawool411@gmail.com", "email")}
                borderRadius="full"
                fontSize="xs"
                _hover={{
                  borderColor: "var(--PrimaryMainColorLight)",
                  bg: useColorModeValue("gray.100", "whiteAlpha.100"),
                }}
              >
                {copiedEmail ? "Copied!" : "Copy"}
              </Button>
              <Button
                as="a"
                href="mailto:prathameshrawool411@gmail.com"
                size="sm"
                colorScheme="blue"
                leftIcon={<FaPaperPlane />}
                borderRadius="full"
                fontSize="xs"
                onClick={() => trackEvent("contact_click", { type: "email_button" })}
              >
                Send
              </Button>
            </HStack>
          </MotionBox>

          {/* Phone Card */}
          <MotionBox
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="card-glare-effect"
            p={6}
            borderRadius="20px"
            bg={cardBg}
            border="1.5px solid"
            borderColor={cardBorder}
            backdropFilter="blur(16px)"
            boxShadow="0 10px 30px rgba(0, 0, 0, 0.1)"
            textAlign="center"
            position="relative"
            overflow="hidden"
          >
            <Flex
              w="54px"
              h="54px"
              borderRadius="16px"
              mx="auto"
              mb={4}
              align="center"
              justify="center"
              bg={useColorModeValue("green.50", "rgba(16, 185, 129, 0.2)")}
              color="green.400"
              fontSize="22px"
            >
              <FaPhoneAlt />
            </Flex>
            <Text fontWeight="bold" fontSize="lg" mb={1} color={color}>
              Phone
            </Text>
            <Text fontSize="sm" color={secondaryTextColor} mb={4}>
              +91 7083039182
            </Text>
            <HStack spacing={2} justify="center">
              <Button
                size="sm"
                variant="outline"
                leftIcon={copiedPhone ? <FaCheck color="#10b981" /> : <FaCopy />}
                onClick={() => copyToClipboard("+917083039182", "phone")}
                borderRadius="full"
                fontSize="xs"
                _hover={{
                  borderColor: "var(--PrimaryMainColorLight)",
                  bg: useColorModeValue("gray.100", "whiteAlpha.100"),
                }}
              >
                {copiedPhone ? "Copied!" : "Copy"}
              </Button>
              <Button
                as="a"
                href="tel:+917083039182"
                size="sm"
                colorScheme="teal"
                borderRadius="full"
                fontSize="xs"
                onClick={() => trackEvent("contact_click", { type: "phone_button" })}
              >
                Call
              </Button>
            </HStack>
          </MotionBox>

          {/* Location Card */}
          <MotionBox
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="card-glare-effect"
            p={6}
            borderRadius="20px"
            bg={cardBg}
            border="1.5px solid"
            borderColor={cardBorder}
            backdropFilter="blur(16px)"
            boxShadow="0 10px 30px rgba(0, 0, 0, 0.1)"
            textAlign="center"
            position="relative"
            overflow="hidden"
          >
            <Flex
              w="54px"
              h="54px"
              borderRadius="16px"
              mx="auto"
              mb={4}
              align="center"
              justify="center"
              bg={useColorModeValue("purple.50", "rgba(168, 85, 247, 0.2)")}
              color="purple.400"
              fontSize="24px"
            >
              <FaMapMarkerAlt />
            </Flex>
            <Text fontWeight="bold" fontSize="lg" mb={1} color={color}>
              Location
            </Text>
            <Text fontSize="sm" color={secondaryTextColor} mb={2}>
              Mumbai, India
            </Text>
            <Text fontSize="xs" color={useColorModeValue("gray.500", "gray.400")}>
              IST (UTC+5:30) • Open to Remote & Relocation
            </Text>
          </MotionBox>
        </SimpleGrid>

        {/* Social Network Glass Bar with Magnetic Hover Physics */}
        <Flex
          direction="column"
          align="center"
          justify="center"
          p={{ base: 6, md: 8 }}
          borderRadius="24px"
          bg={cardBg}
          border="1.5px solid"
          borderColor={cardBorder}
          backdropFilter="blur(20px)"
          boxShadow="0 20px 40px rgba(0, 0, 0, 0.15)"
        >
          <Text
            fontSize="sm"
            fontWeight="bold"
            letterSpacing="0.1em"
            textTransform="uppercase"
            color={secondaryTextColor}
            mb={6}
          >
            Connect Across Digital Platforms
          </Text>

          <HStack spacing={{ base: 4, sm: 6, md: 8 }} justify="center" flexWrap="wrap">
            {socialLinks.map((item) => {
              const IconComp = item.icon;
              return (
                <Tooltip key={item.name} label={item.label} placement="top" hasArrow>
                  <MotionBox
                    as="a"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -4, rotate: 3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    w={{ base: "52px", md: "64px" }}
                    h={{ base: "52px", md: "64px" }}
                    borderRadius="20px"
                    bg={useColorModeValue("rgba(16, 38, 79, 0.05)", "rgba(255, 255, 255, 0.08)")}
                    border="1px solid"
                    borderColor={useColorModeValue("rgba(16, 38, 79, 0.1)", "rgba(255, 255, 255, 0.15)")}
                    color={color}
                    _hover={{
                      color: item.brandColor,
                      borderColor: item.brandColor,
                      boxShadow: `0 8px 24px ${item.brandColor}40`,
                      bg: useColorModeValue("white", "rgba(255, 255, 255, 0.15)"),
                    }}
                    onClick={() => trackEvent("social_link_click", { platform: item.name, url: item.url })}
                  >
                    <IconComp size={24} />
                  </MotionBox>
                </Tooltip>
              );
            })}
          </HStack>
        </Flex>

        {/* Footer info & divider */}
        <Box textAlign="center" pt={{ base: 8, md: 10 }}>
          <Divider
            borderColor={useColorModeValue("rgba(16, 38, 79, 0.15)", "rgba(255, 255, 255, 0.15)")}
            width="100%"
            my={6}
          />
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight="bold"
            color={color}
            letterSpacing="0.05em"
          >
            Crafted with passion by <span className="text-shimmer">Prathamesh Rawool</span>
          </Text>
          <Text fontSize="xs" color={secondaryTextColor} mt={1}>
            Full Stack Software Development Engineer • React, Next.js, Python & Cloud
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
