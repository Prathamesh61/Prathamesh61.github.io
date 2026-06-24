import {
  Box,
  Divider,
  HStack,
  Img,
  Link,
  Text,
  useColorModeValue,
  Flex,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  const bg = useColorModeValue("white", "#10264f");
  const color = useColorModeValue("#10264f", "white");

  const contactImages =
    bg === "white"
      ? [
          {
            image: require("../../res/blue/linkedin.png"),
            alt: "Linkedin",
            link: "https://www.linkedin.com/in/prathamesh-rawool411/",
          },
          {
            image: require("../../res/blue/github.png"),
            alt: "Github",
            link: "https://github.com/Prathamesh61",
          },
          {
            image: require("../../res/blue/email.png"),
            alt: "Email",
            link: "mailto:prathameshrawool411@gmail.com",
          },
        ]
      : [
          {
            image: require("../../res/yellow/linkedin.png"),
            alt: "Linkedin",
            link: "https://www.linkedin.com/in/prathamesh-rawool411/",
          },
          {
            image: require("../../res/yellow/github.png"),
            alt: "Github",
            link: "https://github.com/Prathamesh61",
          },
          {
            image: require("../../res/yellow/email.png"),
            alt: "Email",
            link: "mailto:prathameshrawool411@gmail.com",
          },
        ];

  return (
    <Box bg={bg} color={color} pt="80px" pb={{ base: "60px", md: "80px" }} id="Contact">
      <Flex direction="column" align="center" justify="center" mb={10}>
        <Heading
          fontSize={{ base: "3xl", md: "5xl" }}
          fontWeight="bold"
          mb={4}
          color={color}
          textAlign="center"
        >
          Get in Touch
        </Heading>
        <Text
          fontSize={{ base: "sm", md: "lg" }}
          color={useColorModeValue("gray.600", "gray.300")}
          maxW="600px"
          textAlign="center"
          px={4}
        >
          Feel free to reach out for collaborations, job opportunities, or just to say hello!
        </Text>
      </Flex>

      {/* Social Links */}
      <Fade direction="left" duration={1200} triggerOnce>
        <HStack
          align="center"
          w={["80%", "60%", "40%", "30%"]}
          mx="auto"
          spacing={["15px", "20px", "25px"]}
          justify="space-between"
          px={["10px", "15px", "20px"]}
        >
          {contactImages.map((el, index) => (
            <Link
              key={el.alt}
              href={el.link}
              target="_blank"
              _hover={{ transform: "scale(1.1)", transition: "0.3s ease" }}
            >
              <Img
                w="100%"
                maxW={["40px", "45px", "50px"]}
                mx="auto"
                src={el.image}
                alt={el.alt}
                className="hvr-pop"
              />
            </Link>
          ))}
        </HStack>
      </Fade>

      {/* Contact Details */}
      <Fade direction="up" duration={1400} triggerOnce>
        <Box
          textAlign="center"
          pt={["20px", "25px", "30px"]}
          px={["10px", "15px", "20px"]}
        >
          <Text fontSize={["sm", "md", "lg"]} color={color}>
            Email:{" "}
            <Link href="mailto:prathameshrawool411@gmail.com" color={color}>
              prathameshrawool411@gmail.com
            </Link>
          </Text>
          <Text fontSize={["sm", "md", "lg"]} color={color}>
            Contact No.: +91 7083039182
          </Text>
          <Divider
            color={color}
            width={["95vw", "90vw", "85vw"]}
            m="auto"
            my={["15px", "18px", "20px"]}
          />
          <Text fontSize={["lg", "xl", "2xl"]} color={color}>
            Made By Prathamesh Rawool
          </Text>
        </Box>
      </Fade>
    </Box>
  );
};

export default Contact;
