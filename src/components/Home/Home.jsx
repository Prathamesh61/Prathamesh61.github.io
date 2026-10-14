import {
  Box,
  Heading,
  HStack,
  Img,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
  Button,
  Icon,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import TypewriterComponent from "typewriter-effect";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { BASE_RESUME_URL, trackEvent } from "../../util";
import { FaFileAlt, FaRocket, FaTerminal, FaBrain } from "react-icons/fa";
import { SiReact, SiPython } from "react-icons/si";

function Home() {
  const bg = useColorModeValue("white", "#10264f");
  const color = useColorModeValue("#10264f", "white");
  const containerRef = useRef(null);
  const avatarStageRef = useRef(null);
  const avatarWrapperRef = useRef(null);

  // 3D Tilt & Parallax for the Avatar Stage
  const handleAvatarMouseMove = (e) => {
    const stage = avatarStageRef.current;
    if (!stage) return;
    const rect = stage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const dx = x - xc;
    const dy = y - yc;

    const rx = -(dy / yc) * 12;
    const ry = (dx / xc) * 12;

    if (avatarWrapperRef.current) {
      gsap.to(avatarWrapperRef.current, {
        rotateX: rx,
        rotateY: ry,
        transformPerspective: 1000,
        ease: "power2.out",
        duration: 0.4,
      });
    }

    // Parallax shift floating badges
    gsap.to(".badge-float-1", { x: (dx / xc) * 18, y: (dy / yc) * 18, duration: 0.4 });
    gsap.to(".badge-float-2", { x: -(dx / xc) * 20, y: -(dy / yc) * 20, duration: 0.4 });
    gsap.to(".badge-float-3", { x: (dx / xc) * 22, y: (dy / yc) * 22, duration: 0.4 });
    gsap.to(".badge-float-4", { x: -(dx / xc) * 16, y: -(dy / yc) * 16, duration: 0.4 });
  };

  const handleAvatarMouseLeave = () => {
    if (avatarWrapperRef.current) {
      gsap.to(avatarWrapperRef.current, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.4)",
      });
    }
    gsap.to(".orbit-badge", { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.4)" });
  };

  // Magnetic Button Hover Physics
  const handleMagneticMove = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btn, {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleMagneticLeave = (e) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1.2, 0.35)",
    });
  };

  const scrollToProjects = () => {
    document.getElementById("Projects")?.scrollIntoView({ behavior: "smooth" });
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set(".gsap-fade-in", { opacity: 0, y: 35 });
      gsap.set(".gsap-scale-in", { opacity: 0, scale: 0.8 });

      tl.to(".gsap-badge-status", { opacity: 1, y: 0, duration: 0.6 })
        .to(".gsap-title-sub", { opacity: 1, y: 0, duration: 0.7 }, "-=0.4")
        .to(".gsap-title-main", { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .to(".gsap-typewriter", { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
        .to(".gsap-desc", { opacity: 1, y: 0, duration: 0.7 }, "-=0.4")
        .to(".gsap-img-stage", { opacity: 1, scale: 1, duration: 1.1, ease: "back.out(1.4)" }, "-=0.6")
        .to(".orbit-badge", { opacity: 1, scale: 1, stagger: 0.12, duration: 0.7, ease: "back.out(1.7)" }, "-=0.7")
        .to(".gsap-about-title", { opacity: 1, y: 0, duration: 0.6 }, "-=0.6")
        .to(".gsap-about-desc", { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .to(".gsap-cta-group", { opacity: 1, y: 0, duration: 0.7 }, "-=0.4");
    },
    { scope: containerRef }
  );

  return (
    <Box
      ref={containerRef}
      bg={bg}
      color={color}
      id="Home"
      py={["40px", "60px", "80px"]}
      position="relative"
      overflow="hidden"
    >
      <Box
        width={["95%", "90%", "85%", "80%"]}
        margin="auto"
        px={["10px", "20px", "30px"]}
        textAlign="center"
      >
        {/* Availability Live Beacon Badge */}
        <Box
          className="gsap-fade-in gsap-badge-status"
          display="inline-flex"
          alignItems="center"
          gap="10px"
          px="18px"
          py="8px"
          borderRadius="full"
          bg={useColorModeValue("rgba(16, 185, 129, 0.1)", "rgba(16, 185, 129, 0.15)")}
          border="1px solid"
          borderColor={useColorModeValue("rgba(16, 185, 129, 0.35)", "rgba(16, 185, 129, 0.4)")}
          boxShadow="0 4px 14px rgba(16, 185, 129, 0.2)"
          mb={4}
        >
          <span className="pulse-beacon" />
          <Text
            fontSize={["12px", "13px", "14px"]}
            fontWeight="bold"
            letterSpacing="0.03em"
            color="#10b981"
          >
            AVAILABLE FOR SENIOR SDE & FULL STACK ROLES
          </Text>
        </Box>

        <Text
          className="Profile_Name gsap-fade-in gsap-title-sub"
          fontSize={["24px", "30px", "40px"]}
          fontWeight="semibold"
          opacity={0.9}
        >
          Hi, I am
        </Text>

        <Heading
          className="Profile_Name gsap-fade-in gsap-title-main"
          fontSize={["32px", "44px", "58px"]}
          fontWeight="900"
          letterSpacing="-0.02em"
          my={2}
        >
          Prathamesh{" "}
          <span className="shimmer-gradient-text">Rawool</span>
        </Heading>

        <Box className="gsap-fade-in gsap-typewriter">
          <Box
            fontSize={["20px", "26px", "32px"]}
            pb={["15px", "20px", "25px"]}
            color={useColorModeValue("#3379b5", "#fffb1c")}
            fontWeight="bold"
          >
            <TypewriterComponent
              options={{
                strings: [
                  "Senior Frontend & Full Stack Engineer",
                  "MERN & Next.js 16 Ecosystem",
                  "Python, Django 5 & Cloud Systems",
                  "DSA & Complex Algorithm Architecture",
                ],
                autoStart: true,
                loop: true,
                delay: 45,
                deleteSpeed: 25,
              }}
            />
          </Box>
        </Box>

        <Box width={["100%", "85%", "65%"]} margin="auto" className="gsap-fade-in gsap-desc">
          <Text
            fontSize={{ base: "15px", md: "18px" }}
            lineHeight="1.7"
            color={useColorModeValue("gray.600", "gray.300")}
            wordBreak="break-word"
          >
            An Inquisitive Full Stack Web Developer with knowledge of a wide range of
            programming utilities and scalable system design. Proven track record building
            enterprise web applications, interactive visualizer platforms, and resilient
            frontend architecture from scratch.
          </Text>
        </Box>
      </Box>

      {/* Main Avatar Stage & About Me Section */}
      <Box
        width={["95%", "90%", "85%", "75%"]}
        margin="auto"
        py={["30px", "45px", "60px"]}
      >
        <SimpleGrid
          columns={[1, 1, 2]}
          gap={["40px", "50px", "60px"]}
          p={["10px", "20px", "30px"]}
          alignItems="center"
        >
          {/* Hologram 3D Avatar Stage */}
          <Box
            ref={avatarStageRef}
            className="gsap-scale-in gsap-img-stage"
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            minH={{ base: "320px", md: "380px" }}
            onMouseMove={handleAvatarMouseMove}
            onMouseLeave={handleAvatarMouseLeave}
            style={{ perspective: 1200 }}
          >
            {/* Floating Orbit Badges */}
            <Box
              className="orbit-badge badge-float-1"
              top={{ base: "0px", md: "10px" }}
              left={{ base: "-10px", md: "15px" }}
            >
              <Icon as={SiReact} color="#61dafb" boxSize="18px" />
              <span>React & Next.js 16</span>
            </Box>

            <Box
              className="orbit-badge badge-float-2"
              top={{ base: "10px", md: "25px" }}
              right={{ base: "-10px", md: "15px" }}
            >
              <Icon as={FaTerminal} color="#fffb1c" boxSize="16px" />
              <span>Full Stack SDE</span>
            </Box>

            <Box
              className="orbit-badge badge-float-3"
              bottom={{ base: "10px", md: "20px" }}
              left={{ base: "-10px", md: "10px" }}
            >
              <Icon as={SiPython} color="#38bdf8" boxSize="18px" />
              <span>Python & Django</span>
            </Box>

            <Box
              className="orbit-badge badge-float-4"
              bottom={{ base: "0px", md: "15px" }}
              right={{ base: "-10px", md: "15px" }}
            >
              <Icon as={FaBrain} color="#f43f5e" boxSize="16px" />
              <span>290+ DSA Mastered</span>
            </Box>

            {/* Glowing 3D Avatar Wrapper */}
            <Box
              ref={avatarWrapperRef}
              className="avatar-hologram-wrapper"
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <Box
                className="avatar-inner-stay"
                w={{ base: "210px", sm: "240px", md: "270px" }}
                h={{ base: "210px", sm: "240px", md: "270px" }}
              >
                <Img
                  objectFit="cover"
                  width="100%"
                  height="100%"
                  src={require("../../res/Profile1.png")}
                  alt="Prathamesh Rawool"
                  filter="contrast(1.05) brightness(1.02)"
                />
              </Box>
            </Box>
          </Box>

          {/* About Me & Magnetic CTAs */}
          <VStack width="100%" align={{ base: "center", md: "flex-start" }} spacing={5}>
            <HStack fontSize={["20px", "24px", "28px"]} className="gsap-fade-in gsap-about-title">
              <Heading
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="bold"
                className="shimmer-gradient-text"
              >
                About Me
              </Heading>
            </HStack>

            <Text
              textAlign={{ base: "center", md: "left" }}
              fontSize={["16px", "17px", "19px"]}
              lineHeight="1.8"
              color={useColorModeValue("gray.700", "gray.200")}
              className="gsap-fade-in gsap-about-desc"
            >
              Hi Everyone! I am{" "}
              <strong style={{ color: "#3379b5" }}>Prathamesh Rawool</strong> from{" "}
              <strong style={{ color: "#3379b5" }}>Mumbai, Maharashtra</strong>. I completed
              my Bachelor of Science in Information Technology from Mumbai University. I
              specialize in designing high-performance user interfaces, full-stack microservices,
              and algorithmically intensive web applications.
            </Text>

            {/* Interactive Magnetic CTA Button Group */}
            <HStack
              spacing={4}
              pt={2}
              className="gsap-fade-in gsap-cta-group"
              flexWrap="wrap"
              justify={{ base: "center", md: "flex-start" }}
            >
              <Box
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
                style={{ display: "inline-block" }}
              >
                <a
                  href={BASE_RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("resume_click", { location: "home_hero" })}
                >
                  <Button
                    className="btn-neon-glow"
                    bgGradient="linear(to-r, #3379b5, #10264f)"
                    color="white"
                    size="lg"
                    px={8}
                    py={6}
                    borderRadius="14px"
                    leftIcon={<FaFileAlt />}
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "0 10px 25px rgba(51, 121, 181, 0.5)",
                    }}
                    _active={{ transform: "scale(0.96)" }}
                  >
                    View Resume
                  </Button>
                </a>
              </Box>

              <Box
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
                style={{ display: "inline-block" }}
              >
                <Button
                  onClick={scrollToProjects}
                  variant="outline"
                  borderColor={useColorModeValue("#10264f", "#fffb1c")}
                  color={useColorModeValue("#10264f", "#fffb1c")}
                  size="lg"
                  px={8}
                  py={6}
                  borderRadius="14px"
                  leftIcon={<FaRocket />}
                  _hover={{
                    bg: useColorModeValue("rgba(16, 38, 79, 0.08)", "rgba(255, 251, 28, 0.12)"),
                    transform: "translateY(-2px)",
                    boxShadow: "0 8px 20px rgba(255, 251, 28, 0.3)",
                  }}
                  _active={{ transform: "scale(0.96)" }}
                >
                  Explore Projects
                </Button>
              </Box>
            </HStack>
          </VStack>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Home;
