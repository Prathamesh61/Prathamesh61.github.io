import {
  Box,
  Heading,
  HStack,
  Img,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import TypewriterComponent from "typewriter-effect";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { BASE_RESUME_URL, trackEvent } from "../../util";

function Home() {
  const bg = useColorModeValue("white", "#10264f");
  const color = useColorModeValue("#10264f", "white");
  const containerRef = useRef(null);

  // Magnetic Hover Effect for CTA
  const handleMouseMove = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btn, {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  };

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Set initial states to prevent FOUC (Flash of Unstyled Content)
    gsap.set(".gsap-fade-in", { opacity: 0, y: 30 });
    gsap.set(".gsap-scale-in", { opacity: 0, scale: 0.8 });

    tl.to(".gsap-title-sub", { opacity: 1, y: 0, duration: 0.8 })
      .to(".gsap-title-main", { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
      .to(".gsap-typewriter", { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
      .to(".gsap-desc", { opacity: 1, y: 0, duration: 0.8 }, "-=0.4")
      .to(".gsap-img", { opacity: 1, scale: 1, duration: 1.2, ease: "elastic.out(1, 0.75)" }, "-=0.6")
      .to(".gsap-about-title", { opacity: 1, y: 0, duration: 0.6 }, "-=0.8")
      .to(".gsap-about-desc", { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
      .to(".gsap-btn", { opacity: 1, y: 0, duration: 0.6 }, "-=0.4");
  }, { scope: containerRef });

  return (
    <Box ref={containerRef} bg={bg} color={color} id="Home" py={["30px", "40px", "60px"]}>
      <Box
        width={["95%", "90%", "85%", "80%"]}
        margin="auto"
        px={["10px", "20px", "30px"]}
        textAlign="center"
      >
        <Text
          className="Profile_Name gsap-fade-in gsap-title-sub"
          pt={["10px", "20px", "30px"]}
          fontSize={["25px", "30px", "40px"]}
        >
          Hi, I am
        </Text>
        <Text
          className="Profile_Name gsap-fade-in gsap-title-main"
          fontSize={["25px", "30px", "40px"]}
          color={color}
        >
          Prathamesh <span style={{ color: "#3379b5" }}>Rawool</span>
        </Text>

        <Box className="gsap-fade-in gsap-typewriter">
          <Text
            fontSize={["20px", "25px", "30px"]}
            pb={["20px", "25px", "30px"]}
            color={color}
          >
            <TypewriterComponent
              options={{
                strings: [
                  "A Full Stack Web Developer",
                  "A MERN Stack Developer",
                  "A React Native Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Text>
        </Box>

        <Box width={["100%", "80%", "60%"]} margin="auto" className="gsap-fade-in gsap-desc">
          <Text paddingY="30px" fontSize="18px" wordBreak="break-word">
            An Inquisitive Full Stack Web Developer with knowledge of a wide
            range of programming utilities and languages. Has relevant
            hands-on experience in building websites from scratch. Seeking to
            leverage broad development experience and hands-on technical
            expertise.
          </Text>
        </Box>
      </Box>

      <Box
        width={["95%", "90%", "80%", "70%"]}
        margin="auto"
        py={["20px", "30px", "40px"]}
      >
        <SimpleGrid
          columns={[1, 1, 2]}
          gap={["15px", "20px", "30px"]}
          p={["10px", "15px", "20px"]}
          alignItems="center"
        >
          <Box className="gsap-scale-in gsap-img" display="flex" justifyContent="center">
            <Img
              margin="auto"
              objectFit="cover"
              width="60%"
              src={require("../../res/Profile1.png")}
              alt="profile"
              borderRadius={["15px", "18px", "20px"]}
            />
          </Box>

          <VStack width="100%">
            <HStack fontSize={["18px", "20px", "22px"]} className="gsap-fade-in gsap-about-title">
              <Text className="hvr-underline-from-center" color={color}>
                About Me
              </Text>
            </HStack>
            <Text
              textAlign="center"
              py={["8px", "10px", "12px"]}
              fontSize={["16px", "18px", "20px"]}
              className="gsap-fade-in gsap-about-desc"
            >
              Hi Everyone, I am{" "}
              <span style={{ color: "#3379b5" }}>Prathamesh Rawool</span> from{" "}
              <span style={{ color: "#3379b5" }}>Mumbai, Maharashtra</span>. I
              have completed my graduation in Bachelor of Science in
              Information Technology from Mumbai University, Maharashtra.
            </Text>
            <Box
              className="gsap-fade-in gsap-btn"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ display: "inline-block" }}
            >
              <Box
                className="btn-grad"
                borderRadius="5px"
                border="1px solid"
                borderColor={color}
                p={["8px 16px", "10px 20px", "12px 24px"]}
              >
                <a
                  href={BASE_RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("resume_click", { location: "home" })}
                >
                  Resume
                </a>
              </Box>
            </Box>
          </VStack>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Home;
