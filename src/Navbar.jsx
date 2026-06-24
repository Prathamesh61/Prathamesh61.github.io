import {
  Box,
  Button,
  IconButton,
  Img,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { useRef } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-scroll";
import Prathamesh_Logo from "./res/other/Prathamesh_Logo.png";
import { BASE_RESUME_URL } from "./util";

export const Navbar = () => {
  const navRef = useRef();
  const bg = useColorModeValue("rgba(255, 255, 255, 0.85)", "rgba(16, 38, 79, 0.85)");
  const color = useColorModeValue("#10264f", "white");
  const borderColor = useColorModeValue("rgba(16, 38, 79, 0.1)", "rgba(255, 255, 255, 0.15)");
  const { colorMode, toggleColorMode } = useColorMode();
  const [show, setShow] = useState(false);
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    !show ? setShow(true) : setShow(false);
  };
  return (
    <Box
      bg={bg}
      color={color}
      position={"sticky"}
      top="0"
      zIndex="10"
      borderBottom={"1px solid"}
      borderBottomColor={borderColor}
      backdropFilter="blur(12px)"
      transition="background-color 0.3s ease, border-color 0.3s ease"
    >
      {/* style={{ color: "#3379b5", fontSize: "18px", letterSpacing: "0.15em" }} */}
      <Box className="header-nav">
        <Img
          src={Prathamesh_Logo}
          width={{ base: "120px", sm: "150px", md: "200px", lg: "250px" }}
          minW={{ base: "80px" }}
          flexShrink={0}
        />
        <nav ref={navRef} style={{ color: color }}>

          <Link
            activeClass="active"
            to="Home"
            spy={true}
            smooth={true}
            offset={-80}
            onClick={showNavbar}
          >
            <a className="hvr-underline-from-center" href="#">
              Home
            </a>
          </Link>
          <Link
            activeClass="active"
            to="workExperience"
            spy={true}
            smooth={true}
            offset={-80}
            onClick={showNavbar}
          >
            <a className="hvr-underline-from-center" href="#">
              Work Experience
            </a>
          </Link>
          <Link
            activeClass="active"
            to="techStack"
            spy={true}
            smooth={true}
            offset={-80}
            onClick={showNavbar}
          >
            <a className="hvr-underline-from-center" href="#">
              Tech Stack
            </a>
          </Link>
          <Link
            activeClass="active"
            to="Skills"
            spy={true}
            smooth={true}
            offset={-80}
            onClick={showNavbar}
          >
            <a className="hvr-underline-from-center" href="#">
              Skills
            </a>
          </Link>
          <Link
            activeClass="active"
            to="Projects"
            spy={true}
            smooth={true}
            offset={-80}
            onClick={showNavbar}
          >
            <a className="hvr-underline-from-center" href="#">
              Projects
            </a>
          </Link>
          <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-80}
            onClick={showNavbar}
          >
            <a className="hvr-underline-from-center" href="#">
              Contact
            </a>
          </Link>

          {/* Resume link — inside the overlay */}
          <a
            href={BASE_RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hvr-underline-from-center"
          >
            <Button color={color}>
              Resume
            </Button>
          </a>

          {colorMode === "light" ? (
            <IconButton
              borderRadius={"50%"}
              bg="blackAlpha.100"
              color="#10264f"
              _hover={{ bg: "blackAlpha.200" }}
              onClick={toggleColorMode}
              icon={<FaMoon />}
              aria-label="Switch to dark mode"
            />
          ) : (
            <IconButton
              bg="whiteAlpha.200"
              color="white"
              _hover={{ bg: "whiteAlpha.300" }}
              onClick={toggleColorMode}
              borderRadius={"50%"}
              icon={<FaSun />}
              aria-label="Switch to light mode"
            />
          )}
        </nav>

        {/* Hamburger — in normal flex flow, vertically centered by flexbox */}
        {!show && (
          <button className="nav-btn nav-hamburger" onClick={showNavbar} aria-label="Open menu">
            <IconButton
              bg={colorMode === "dark" ? "whiteAlpha.200" : "blackAlpha.100"}
              color={colorMode === "dark" ? "white" : "#10264f"}
              _hover={{ bg: colorMode === "dark" ? "whiteAlpha.300" : "blackAlpha.200" }}
              icon={<FaBars />}
              borderRadius="10px"
              size="md"
              pointerEvents="none"
            />
          </button>
        )}

        {/* Close button — fixed over the overlay, color-mode aware */}
        {show && (
          <button className="nav-btn nav-close-btn" onClick={showNavbar} aria-label="Close menu">
            <IconButton
              bg={colorMode === "dark" ? "whiteAlpha.200" : "blackAlpha.100"}
              color={colorMode === "dark" ? "white" : "#10264f"}
              _hover={{ bg: colorMode === "dark" ? "whiteAlpha.300" : "blackAlpha.200" }}
              icon={<FaTimes />}
              borderRadius="10px"
              size="md"
              pointerEvents="none"
            />
          </button>
        )}

      </Box>
    </Box>
  );
};

export default Navbar;
