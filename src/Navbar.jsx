import { Box, Button, IconButton, Img, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaTimes, FaBars } from "react-icons/fa";
import { useRef } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-scroll';

export const Navbar = () => {
    const navRef = useRef();
    const bg = useColorModeValue('white', '#10264f')
    const color = useColorModeValue('#10264f', 'white')
    const { colorMode, toggleColorMode } = useColorMode()
    const [show, setShow] = useState(false);
    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
        !show ? setShow(true) : setShow(false)
    }
    return (
        <Box bg={bg} color={color} >
            {/* style={{ color: "#3379b5", fontSize: "18px", letterSpacing: "0.15em" }} */}
            <Box className='header-nav'>
                <Img width={"250px"} src='https://i.ibb.co/b7R6Shh/Prathamesh-Logo.png' />
                <nav ref={navRef} style={{ color: color }} >
                    <Link activeClass="active" to="Home" spy={true} smooth={true} ><a className='hvr-underline-from-center' href="#">Home</a></Link>
                    <Link to="Skills" spy={true} smooth={true} ><a className='hvr-underline-from-center' href="#">Skills</a></Link>
                    <Link to="Projects" spy={true} smooth={true} ><a className='hvr-underline-from-center' href="#">Project</a></Link>
                    <Link to="Contact" spy={true} smooth={true} ><a className='hvr-underline-from-center' href="#">Contact</a></Link>
                    <a href="./res/Prathamesh_Rawool_Resume.pdf" download className='hvr-underline-from-center'>Resume</a>
                    {bg === 'white' ? <IconButton bg={"transparent"} onClick={toggleColorMode} icon={<FaMoon />} /> : <IconButton bg={"transparent"} onClick={toggleColorMode} icon={<FaSun />} />}
                </nav>
                <button className='nav-btn nav-close-btn'>
                    {!show ?
                        <IconButton bg={color} onClick={showNavbar} icon={<FaBars />} colorScheme={color === 'white' ? "#10264f" : 'white'} /> :
                        <IconButton bg={color} onClick={showNavbar} colorScheme={color === 'white' ? "#10264f" : 'white'} icon={<FaTimes />} />}
                </button>
                {/* <Button className='nav-btn' onClick={showNavbar}> <FaBars /> </Button> */}
            </Box>
        </Box >
    )
}

export default Navbar