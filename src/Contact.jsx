import { Box, HStack, Img, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Fade } from 'react-reveal';


const Contact = () => {
    const bg = useColorModeValue('white', '#10264f')
    const color = useColorModeValue('#10264f', 'white')
    //     <a href="https://imgbb.com/"><img src="https://i.ibb.co/TYK8KJd/atom.png" alt="atom" border="0"></a>
    // <a href="https://imgbb.com/"><img src="https://i.ibb.co/RDqBKy0/css-3.png" alt="css-3" border="0"></a>
    // <a href="https://imgbb.com/"><img src="https://i.ibb.co/d0rJcwW/express.png" alt="express" border="0"></a>
    // <a href="https://imgbb.com/"><img src="https://i.ibb.co/54Z8qyt/github.png" alt="github" border="0"></a>
    // <a href="https://imgbb.com/"><img src="https://i.ibb.co/YWmMyBr/html.png" alt="html" border="0"></a>
    // <a href="https://imgbb.com/"><img src="https://i.ibb.co/hg5Xh4C/java-script-Yellow.png" alt="java-script-Yellow" border="0"></a>
    // <a href="https://imgbb.com/"><img src="https://i.ibb.co/WGx666G/linkedin.png" alt="linkedin" border="0"></a>
    // <a href="https://imgbb.com/"><img src="https://i.ibb.co/8xRvVcd/mongodb.png" alt="mongodb" border="0"></a>
    // <a href="https://imgbb.com/"><img src="https://i.ibb.co/fqP1MPC/redux.png" alt="redux" border="0"></a>
    const contactImagesYellow = [
        {
            image: "https://i.ibb.co/WGx666G/linkedin.png",
            alt: "Linkedin",
        },
        {
            image: "https://i.ibb.co/54Z8qyt/github.png",
            alt: "Github",
        },
        {
            image: "https://i.ibb.co/xf8bBbk/email.png",
            alt: "Email",
        },
    ]
    //     [url=https://imgbb.com/][img]https://i.ibb.co/PYfBtPr/atom.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/4289K4T/css-3.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/LxNQYxN/email.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/0rdPJFJ/express.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/jf27KLs/github.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/Sfj8LR3/html.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/KXgBjT5/java-script.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/3yBv9h4/linkedin.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/rHjfgnF/mongodb.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/2MyRydr/node-js.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/Ld0PCpp/redux.png[/img][/url]
    const contactImagesBlue = [
        {
            image: "https://i.ibb.co/3yBv9h4/linkedin.png",
            alt: "Linkedin",
        },
        {
            image: "https://i.ibb.co/jf27KLs/github.png",
            alt: "Github",
        },
        {
            image: "https://i.ibb.co/LxNQYxN/email.png",
            alt: "Email",
        },
    ]

    return (
        <Box bg={bg} color={color} paddingY={"30px"}>
            <Text paddingY={"30px"} fontSize="3xl" color={color} textAlign={"center"}>
                Get in Touch
            </Text>
            <Fade left cascade>
                <HStack width={"60%"} margin={"auto"} gap={"50px"} border={"1px solid green"} justifyContent={"center"} >
                    {(bg === 'white' ? contactImagesBlue : contactImagesYellow).map((el) => {
                        return <Img _hover={{ width: "35px" }} alignSelf={"start"} width={"30px"} src={el.image} alt={el.alt} />
                    })}
                </HStack>
            </Fade>
            <Text></Text>
        </Box>
    )
}

export default Contact