import {
  Box,
  Divider,
  HStack,
  Img,
  Link,
  Text,
  useColorModeValue,
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
    <Box bg={bg} color={color} py="30px" pt="80px" id="Contact">
      {/* Section Header */}
      <Fade direction="up" duration={1000} triggerOnce>
        <Text py="30px" fontSize="3xl" color={color} textAlign="center">
          Get in Touch
        </Text>
      </Fade>

      {/* Social Links */}
      <Fade direction="left" duration={1200} triggerOnce>
        <HStack
          align="center"
          w={["60%", "40%", "40%", "20%"]}
          mx="auto"
          spacing="20px"
          justify="space-between"
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
                maxW="50px"
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
        <Box textAlign="center" pt="30px">
          <Text fontSize="md" color={color}>
            Email:{" "}
            <Link href="mailto:prathameshrawool411@gmail.com" color={color}>
              prathameshrawool411@gmail.com
            </Link>
          </Text>
          <Text fontSize="md" color={color}>
            Contact No.: +91 7083039182
          </Text>
          <Divider color={color} width={"90vw"} m="auto" my="20px" />
          <Text fontSize="xl" color={color}>
            Made By Prathamesh Rawool
          </Text>
        </Box>
      </Fade>
    </Box>
  );
};

export default Contact;
