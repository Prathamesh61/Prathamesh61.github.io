import { Box, Button, IconButton, Img, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaTimes, FaBars } from "react-icons/fa";
import { useRef } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { Prathamesh_Logo } from './res/other/Prathamesh_Logo.png'

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
    const handleResume = () => {
        return window.open('https://drive.google.com/file/d/1ASY7FmYH6WRHWDINaDbA1FlvejsjpvDh/view?usp=share_link');
    }
    return (
        <Box bg={bg} color={color} position={"sticky"} top="0" zIndex="10" borderBottom={"1px solid"} borderBottomColor={color}>
            {/* style={{ color: "#3379b5", fontSize: "18px", letterSpacing: "0.15em" }} */}
            <Box className='header-nav' >
                <Img width={"250px"} src={require('./res/other/Prathamesh_Logo.png')} />
                <nav ref={navRef} style={{ color: color }} >
                    <Link activeClass="active" to="Home" spy={true} smooth={true} ><a className='hvr-underline-from-center' href="#">Home</a></Link>
                    <Link to="techStack" spy={true} smooth={true} ><a className='hvr-underline-from-center' href="#">Tech Stack</a></Link>
                    <Link to="Skills" spy={true} smooth={true} ><a className='hvr-underline-from-center' href="#">Skills</a></Link>
                    <Link to="Projects" spy={true} smooth={true} ><a className='hvr-underline-from-center' href="#">Project</a></Link>
                    <Link to="Contact" spy={true} smooth={true} ><a className='hvr-underline-from-center' href="#">Contact</a></Link>
                    {/* <Link to='https://drive.google.com/uc?export=download&id=1ASY7FmYH6WRHWDINaDbA1FlvejsjpvDh' download className='hvr-underline-from-center'>Resume </Link> */}

                    <a href="Prathamesh-Rawool-Resume.pdf" target={"_blank"} download className='hvr-underline-from-center'><Button color={color} onClick={handleResume}>Resume</Button></a>

                    {bg === 'white' ? <IconButton borderRadius={"50%"} bg={color} colorScheme={bg === 'white' ? "#10264f" : 'white'} onClick={toggleColorMode} icon={<FaMoon />} /> : <IconButton bg={color} colorScheme={bg === 'white' ? "#10264f" : 'white'} onClick={toggleColorMode} borderRadius={"50%"} icon={<FaSun />} />}
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