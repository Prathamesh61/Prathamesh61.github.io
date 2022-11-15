import { Box, color, Heading, HStack, Img, SimpleGrid, Text, useColorModeValue, VStack } from '@chakra-ui/react';

import { Fade } from 'react-reveal';
import { Button } from 'react-scroll';
import TypewriterComponent from 'typewriter-effect';
// import "./res/Prathamesh_Rawool_Resume.pdf"


function Home() {
    const bg = useColorModeValue('white', '#10264f')
    const color = useColorModeValue('#10264f', 'white')
    const handleResume = () => {
        return window.open('https://drive.google.com/file/d/1ASY7FmYH6WRHWDINaDbA1FlvejsjpvDh/view?usp=share_link');
    }
    return (
        <Box bg={bg} color={color} id={"Home"}>
            <Box width={"80%"}
                margin="auto" paddingTop={"60px"} >
                <Text className='Profile_Name' paddingTop={"30px"} color={color} align="center" fontSize={{ sm: '20px', md: '30px', lg: '50px' }}>Hi, I am
                    <Fade top cascade >
                        <span className='Profile_Name'> Prathamesh </span>
                        <span className='Profile_Name'> Rawool </span>
                    </Fade></Text>
                <Text fontSize="30px" paddingBottom={"30px"} color={color} textAlign="center"  >
                    <TypewriterComponent
                        options={{
                            strings: ['A Full Stack Web Developer', 'A Mern Stack Developer',],
                            autoStart: true,
                            loop: true,
                        }}
                    /></Text>
                <div>
                    <Box width={["100%", "80%", "60%"]} margin={"auto"}>
                        <Fade top cascade >
                            <Text paddingY={"30px"} fontSize={"18px"} textAlign="center" wordBreak={"break-word"}>
                                An Inquisitive Full Stack Web Developer with knowledge of a wide
                                range of programming utilities and languages. Has relevant hands-on experience in building websites from scratch. Seeking to leverage
                                broad development experience and hands-on technical expertise.
                            </Text>
                        </Fade>
                    </Box>
                </div>
            </Box>
            <Box width={["80%", "50%"]}
                margin="auto"
                paddingY={"20px"}>
                <HStack gap={"20px"}>
                    <SimpleGrid columns={[1, 1, 1, 2]} padding={"20px"} justifyContent={"space-between"} alignItems={"center"} gap={"20px"}>
                        {/* <Box width={"250px"} box-shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"> */}
                        <Fade left cascade>
                            <Img margin={"auto"} objectFit={"croped"} width={"80%"} src={require('./res/Profile.jpg')} alt="profile" borderRadius={"20px"} />
                        </Fade>
                        {/* </Box> */}
                        <VStack width={"100%"}>
                            <Fade right cascade>
                                <HStack fontSize={"22px"}>
                                    <Text className='hvr-underline-from-center' color={color}>
                                        About Me
                                    </Text>
                                </HStack>
                                <Text textAlign={"center"} paddingY={"10px"} fontSize={"20px"}>Hi Everyone, I am <span style={{ color: "#3379b5" }}>Prathamesh Rawool</span> from <span style={{ color: "#3379b5" }}>Mumbai, Maharashtra</span>. I have completed my graduation in Bachelor of Science in Information Technology from Mumbai University, Maharashtra.</Text>
                                <Box className='btn-grad' borderRadius={"5px"} border={"1px solid"} borderColor={color}><a href="Prathamesh-Rawool-Resume.pdf" target={"_blank"} download >Resume</a></Box>
                            </Fade>
                        </VStack>
                    </SimpleGrid>
                </HStack>
            </Box>
        </Box >
    )
}

export default Home;