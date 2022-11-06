import { Box, HStack, Img, Link, Text, useColorModeValue } from '@chakra-ui/react'
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
            image: require('./res/yellow/linkedin.png'),
            alt: "Linkedin",
            link: "https://www.linkedin.com/in/prathamesh-rawool411/"
        },
        {
            image: require('./res/yellow/github.png'),
            alt: "Github",
            link: "https://github.com/Prathamesh61"
        },
        {
            image: require('./res/yellow/email.png'),
            alt: "Email",
            link: "mailto:prathameshrawool411@gmail.com"
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
            image: require('./res/blue/linkedin.png'),
            alt: "Linkedin",
            link: "https://www.linkedin.com/in/prathamesh-rawool411/"
        },
        {
            image: require('./res/blue/github.png'),
            alt: "Github",
            link: "https://github.com/Prathamesh61"
        },
        {
            image: require('./res/blue/email.png'),
            alt: "Email",
            link: "mailto:prathameshrawool411@gmail.com"

        },
    ]

    return (
        <Box bg={bg} color={color} paddingY={"30px"} paddingTop={"80px"} id="Contact">
            <Text paddingY={"30px"} fontSize="3xl" color={color} textAlign={"center"}>
                Get in Touch
            </Text>
            <Fade left cascade>
                <HStack align={"center"} width={["60%", "40%", "40%", "20%"]} margin={"auto"} gap={"10px"} justifyContent={"space-between"} >
                    {(bg === 'white' ? contactImagesBlue : contactImagesYellow).map((el) => {
                        return <Link width={"15%"} justifyContent={"center"} alignItems={"center"} href={el.link} target={"_blank"}><Img width={"fit-content"} margin={"auto"} className='hvr-pop' src={el.image} alt={el.alt} /> </Link>
                    })}
                </HStack>
            </Fade>
            <Text paddingTop={"30px"} fontSize="md" color={color} textAlign={"center"}>
                Email : prathameshrawool411@gmail
            </Text>
            <Text paddingBottom={"30px"} fontSize="md" color={color} textAlign={"center"}>
                contact no. : +91 7083039182
            </Text>
            <Text paddingBottom={"30px"} fontSize="xl" color={color} textAlign={"center"}>
                Made By Prathamesh Rawool
            </Text>
        </Box>
    )
}

export default Contact