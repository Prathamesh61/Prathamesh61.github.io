import { Box, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FaTimes, FaBars } from "react-icons/fa";
import { useRef } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

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
            <div className='header-nav'>
                <div style={{ color: "#3379b5", fontSize: "18px" }}>Prathamesh Rawool</div>
                <nav ref={navRef} color={bg} >
                    <a href="#">Home</a>
                    <a href="#">My Work</a>
                    <a href="#">Blog</a>
                    <a href="#">About Me</a>
                    <Button onClick={toggleColorMode} bg="transparent">
                        {colorMode === <FaSun color={color} /> ? <FaMoon color={color} /> : <FaSun color={color} />}
                    </Button>
                </nav>
                <Button className='nav-btn nav-close-btn' onClick={showNavbar}> {show ? <FaTimes /> : <FaBars />}</Button>
                {/* <Button className='nav-btn' onClick={showNavbar}> <FaBars /> </Button> */}
            </div>
        </Box >
    )
}

export default Navbar