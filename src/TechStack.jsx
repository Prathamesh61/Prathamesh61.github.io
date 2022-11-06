import { Box, Img, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal';



const TechStack = () => {
    const bg = useColorModeValue('white', '#10264f')
    const color = useColorModeValue('#10264f', 'white')
    const imagesYellow = [
        {
            image: require('./res/yellow/java-script.png'),
            alt: "Javascript"
        },
        {
            image: require('./res/yellow/html.png'),
            alt: "HTML"
        },
        {
            image: require('./res/yellow/css-3.png'),
            alt: "CSS"
        },
        {
            image: require('./res/yellow/atom.png'),
            alt: "React"
        },
        {
            image: require('./res/yellow/mongodb.png'),
            alt: "MongoDb"
        },
        {
            image: require('./res/yellow/nodejs.png'),
            alt: "Node-js"
        },
        {
            image: require('./res/yellow/redux.png'),
            alt: "Redux"
        },
        {
            image: require('./res/yellow/express.png'),
            alt: "Express"
        },

    ]

    const imagesBlue = [
        {
            image: require('./res/blue/java-script.png'),
            alt: "Javascript"
        },
        {
            image: require('./res/blue/html.png'),
            alt: "HTML"
        },
        {
            image: require('./res/blue/css-3.png'),
            alt: "CSS"
        },
        {
            image: require('./res/blue/atom.png'),
            alt: "React"
        },
        {
            image: require('./res/blue/mongodb.png'),
            alt: "MongoDb"
        },
        {
            image: require('./res/blue/node-js.png'),
            alt: "Node-js"
        },
        {
            image: require('./res/blue/redux.png'),
            alt: "Redux"
        },
        {
            image: require('./res/blue/express.png'),
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