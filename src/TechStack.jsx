import { Box, Img, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal';

const TechStack = () => {
    const bg = useColorModeValue('white', '#10264f')
    const color = useColorModeValue('#10264f', 'white')
    const imagesYellow = [
        {
            image: "https://i.ibb.co/hg5Xh4C/java-script-Yellow.png",
            alt: "Javascript"
        },
        {
            image: "https://i.ibb.co/YWmMyBr/html.png",
            alt: "HTML"
        },
        {
            image: "https://i.ibb.co/RDqBKy0/css-3.png",
            alt: "CSS"
        },
        {
            image: "https://i.ibb.co/TYK8KJd/atom.png",
            alt: "React"
        },
        {
            image: "https://i.ibb.co/8xRvVcd/mongodb.png",
            alt: "MongoDb"
        },
        {
            image: "https://i.ibb.co/zhtRHHc/nodejs.png",
            alt: "Node-js"
        },
        {
            image: "https://i.ibb.co/fqP1MPC/redux.png",
            alt: "Redux"
        },
        {
            image: "https://i.ibb.co/d0rJcwW/express.png",
            alt: "Express"
        },

    ]

    const imagesBlue = [
        {
            image: "https://i.ibb.co/KXgBjT5/java-script.png",
            alt: "Javascript"
        },
        {
            image: "https://i.ibb.co/Sfj8LR3/html.png",
            alt: "HTML"
        },
        {
            image: "https://i.ibb.co/4289K4T/css-3.png",
            alt: "CSS"
        },
        {
            image: "https://i.ibb.co/PYfBtPr/atom.png",
            alt: "React"
        },
        {
            image: "https://i.ibb.co/rHjfgnF/mongodb.png",
            alt: "MongoDb"
        },
        {
            image: "https://i.ibb.co/2MyRydr/node-js.png",
            alt: "Node-js"
        },
        {
            image: "https://i.ibb.co/Ld0PCpp/redux.png",
            alt: "Redux"
        },
        {
            image: "https://i.ibb.co/0rdPJFJ/express.png",
            alt: "Express"
        },
    ]
    return (
        <Box paddingY={"40px"} paddingTop={"80px"} bg={bg} color={color} height={"max-content"} id="techStack">
            <Text textAlign={"center"} fontSize="3xl" color={color} paddingY={"20px"}>
                Tech Stack
            </Text>
            <Fade left cascade>
                <Box
                    width="60%"
                    margin="auto"
                    padding="50px"
                    display="flex"
                    justifyContent="center"
                    gap="50px"
                    flexWrap="wrap"
                    marginY={"30px"}>
                    {(bg === 'white' ? imagesBlue : imagesYellow).map((elem) => {
                        return <Box className='hvr-pop'
                            border="3px solid " width="120px" borderRadius="15px"
                            box-shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" _hover={{ borderColor: "#3379b5" }}>
                            <ImageWrapper>
                                <Img borderRadius="15px" width={"100%"} padding="20px" src={elem.image} alt={elem.alt} />
                                <Text color={color} textAlign={"center"}>{elem.alt}</Text>
                            </ImageWrapper>
                        </Box>
                    })}
                </Box >
            </Fade>
        </Box >
    )
}
const ImageWrapper = styled.div`
;
padding:10px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
:hover {
 color: #ffee10;
}
Img:hover{
    padding:17px;
}
`
export default TechStack;