import { Box, color, Img, SimpleGrid, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import React from 'react'
import { Fade } from 'react-reveal'

const Skills = () => {
    const bg = useColorModeValue('white', '#10264f')
    const color = useColorModeValue('#10264f', 'white')

    const frontendBlue = [

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
            image: require('./res/blue/redux.png'),
            alt: "Redux"
        },
        {
            image: require('./res/blue/chakra-ui.png'),
            alt: "Chakra UI"
        },
        {
            image: require('./res/blue/typescript.png'),
            alt: "TypeScript"
        },
        {
            image: require('./res/blue/material-ui.png'),
            alt: "Material UI"
        },
    ]

    const frontendYellow = [

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
            image: require('./res/yellow/redux.png'),
            alt: "Redux"
        },
        {
            image: require('./res/yellow/chakra-ui.png'),
            alt: "Chakra UI"
        },
        {
            image: require('./res/yellow/typescript.png'),
            alt: "TypeScript"
        },
        {
            image: require('./res/yellow/material-ui.png'),
            alt: "Material UI"
        },
    ]

    const backendBlue = [

        {
            image: require('./res/blue/node-js.png'),
            alt: "Node.js"
        },
        {
            image: require('./res/blue/mongodb.png'),
            alt: "MongoDb"
        },
        {
            image: require('./res/blue/express.png'),
            alt: "Express"
        },
        {
            image: require('./res/blue/mysql.png'),
            alt: "MySql"
        },
    ]

    const backendYellow = [
        {
            image: require('./res/yellow/mongodb.png'),
            alt: "MongoDb"
        },
        {
            image: require('./res/yellow/nodejs.png'),
            alt: "Node.js"
        },
        {
            image: require('./res/yellow/express.png'),
            alt: "Express"
        },
        {
            image: require('./res/yellow/mysql.png'),
            alt: "MySql"
        },
    ]

    const commnuicationsBlue = [
        {
            image: require('./res/blue/teamwork.png'),
            alt: "Teamwork"
        },
    ]

    const commnuicationsYellow = [
        {
            image: require('./res/yellow/teamwork.png'),
            alt: "Teamwork"
        },
    ]

    return (
        <Box bg={bg} color={color} paddingTop={"80px"} id="Skills">
            <Text textAlign={"center"} fontSize="3xl" color={color} paddingY={"20px"}>
                Skills
            </Text>
            <SimpleGrid width={"60%"} margin={"auto"} columns={[1, 2, 2, 3]} padding={"20px"} justifyContent={"space-between"} alignItems={"start"} gap={"20px"}>
                <Fade top cascade >
                    <VStack gap={'10px'}>
                        <Text bg={bg} textAlign={"center"} fontSize="2xl" color={color} paddingY={"20px"}>
                            Frontend Skills
                        </Text>
                        {(bg === 'white' ? frontendBlue : frontendYellow).map((elem) => {
                            return <Box borderColor={bg} className='hvr-grow-shadow' alignItems={"center"} borderRadius={"10px"} gap={'20px'} display={"flex"} width={"100%"} bg={"#3379b5"} padding={"15px"} color={color} key={elem.title}> <Img width={"11%"} src={elem.image} alt={elem.alt} /> <Text fontSize={'xl'}> {elem.alt} </Text> </Box>
                        })}
                    </VStack>
                </Fade>
                <Fade top cascade >
                    <VStack gap={'10px'}>
                        <Text bg={bg} textAlign={"center"} fontSize="2xl" color={color} paddingY={"20px"}>
                            Backend Skills
                        </Text>
                        {(bg === 'white' ? backendBlue : backendYellow).map((elem) => {
                            return <Box borderColor={bg} className='hvr-grow-shadow' alignItems={"center"} borderRadius={"10px"} gap={'20px'} display={"flex"} width={"100%"} bg={"#3379b5"} padding={"15px"} color={color} key={elem.title}> <Img width={"11%"} src={elem.image} alt={elem.alt} /> <Text fontSize={'xl'}> {elem.alt} </Text> </Box>
                        })}
                    </VStack>
                </Fade>
                <Fade top cascade >
                    <VStack gap={'10px'}>
                        <Text bg={bg} textAlign={"center"} fontSize="2xl" color={color} paddingY={"20px"}>
                            Communications Skills
                        </Text>
                        {(bg === 'white' ? commnuicationsBlue : commnuicationsYellow).map((elem) => {
                            return <Box borderColor={bg} className='hvr-grow-shadow' alignItems={"center"} borderRadius={"10px"} gap={'20px'} display={"flex"} width={"100%"} bg={"#3379b5"} padding={"15px"} color={color} key={elem.title}> <Img width={"11%"} src={elem.image} alt={elem.alt} /> <Text fontSize={'xl'}> {elem.alt} </Text> </Box>
                        })}
                    </VStack>
                </Fade>
            </SimpleGrid>
        </Box>
    )
}

export default Skills;