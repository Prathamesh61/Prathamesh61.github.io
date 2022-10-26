import { Box, color, Img, SimpleGrid, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import React from 'react'
import { Fade } from 'react-reveal'

const Skills = () => {
    const bg = useColorModeValue('white', '#10264f')
    const color = useColorModeValue('#10264f', 'white')

    const frontendBlue = [

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
            image: "https://i.ibb.co/2MyRydr/node-js.png",
            alt: "Node.js"
        },
        {
            image: "https://i.ibb.co/Ld0PCpp/redux.png",
            alt: "Redux"
        },
        {
            image: "https://i.ibb.co/5xb70gw/icons8-chakra-ui-512.png",
            alt: "Chakra UI"
        },
        {
            image: "https://i.ibb.co/mqyBN0Z/icons8-typescript-512.png",
            alt: "TypeScript"
        },
        {
            image: "https://i.ibb.co/z8WvydS/icons8-material-ui-512.png",
            alt: "Material UI"
        },
    ]

    const frontendYellow = [

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
            image: "https://i.ibb.co/fqP1MPC/redux.png",
            alt: "Redux"
        },
        {
            image: "https://i.ibb.co/4pgQy9f/icons8-chakra-ui-512-1.png",
            alt: "Chakra UI"
        },
        {
            image: "https://i.ibb.co/6NNRkc0/icons8-typescript-512-1.png",
            alt: "TypeScript"
        },
        {
            image: "https://i.ibb.co/KXDNqs3/icons8-material-ui-512-1.png",
            alt: "Material UI"
        },
    ]

    const backendBlue = [

        {
            image: "https://i.ibb.co/2MyRydr/node-js.png",
            alt: "Node.js"
        },
        {
            image: "https://i.ibb.co/rHjfgnF/mongodb.png",
            alt: "MongoDb"
        },
        {
            image: "https://i.ibb.co/0rdPJFJ/express.png",
            alt: "Express"
        },
        {
            image: "https://i.ibb.co/m8CgpF6/icons8-mysql-logo-512.png",
            alt: "MySql"
        },
    ]

    const backendYellow = [
        {
            image: "https://i.ibb.co/8xRvVcd/mongodb.png",
            alt: "MongoDb"
        },
        {
            image: "https://i.ibb.co/zhtRHHc/nodejs.png",
            alt: "Node.js"
        },
        {
            image: "https://i.ibb.co/d0rJcwW/express.png",
            alt: "Express"
        },
        {
            image: "https://i.ibb.co/0GKS2G6/icons8-mysql-logo-512-1.png",
            alt: "MySql"
        },
    ]

    const commnuicationsBlue = [
        {
            image: "https://i.ibb.co/GvpNv4v/icons8-teamwork-64.png",
            alt: "Teamwork"
        },
    ]

    const commnuicationsYellow = [
        {
            image: "https://i.ibb.co/0mHp2Gn/icons8-teamwork-64-1.png",
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