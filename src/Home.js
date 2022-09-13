import { Box, color, Heading, HStack, Img, SimpleGrid, Text, useColorModeValue, VStack } from '@chakra-ui/react';

import { Fade } from 'react-reveal';
import TypewriterComponent from 'typewriter-effect';


function Home() {
    const bg = useColorModeValue('white', '#10264f')
    const color = useColorModeValue('#10264f', 'white')
    return (
        <Box bg={bg} color={color}>
            <Box width="60%"
                margin="auto" paddingTop={"100px"}>
                <Text className='Profile_Name' paddingTop={"30px"} color={color} textAlign="center">Hi, I am
                    <Fade top cascade >
                        <span className='Profile_Name'> Prathamesh Rawool</span>
                    </Fade></Text>
                <Text fontSize="30px" paddingBottom={"30px"} color={color} textAlign="center" >
                    <TypewriterComponent
                        options={{
                            strings: ['A Full Stack Web Developer', 'A Mern Stack Developer',],
                            autoStart: true,
                            loop: true,
                        }}
                    /></Text>
                <div>
                    <Box width={"80%"} margin={"auto"}>
                        <Fade top cascade >
                            <Text paddingY={"30px"} fontSize={"18px"} textAlign="center" >
                                An Inquisitive Full Stack Web Developer with knowledge of a wide
                                range of programming utilities and languages. Has relevant hands-on experience in building websites from scratch. Seeking to leverage
                                broad development experience and hands-on technical expertise.
                            </Text>
                        </Fade>
                    </Box>
                </div>
            </Box>
            <Box width="50%"
                margin="auto"
                paddingY={"20px"}>
                <HStack gap={"20px"}>
                    <SimpleGrid columns={[1, 1, 1, 2]} padding={"20px"} justifyContent={"center"} alignItems={"center"} gap={"20px"}>
                        <Box width={"250px"} box-shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
                            <Img objectFit={"croped"} width={"100%"} src="../profile.jpg" alt="profile" borderRadius={"20px"} />
                        </Box>
                        <VStack width={"100%"}>
                            <HStack fontSize={"22px"}>
                                <Text color={color}>
                                    About
                                </Text>
                                <Text color={color}>
                                    Me
                                </Text>
                            </HStack>
                            <Text textAlign={"center"} paddingY={"10px"} fontSize={"20px"}>Hi Everyone, I am <span style={{ color: "#3379b5" }}>Prathamesh Rawool</span> from <span style={{ color: "#3379b5" }}>Mumbai, Maharashtra</span>. I have completed my graduation in Bachelor of Science in Information Technology from Mumbai University, Maharashtra.</Text>
                            <Text>
                            </Text>
                        </VStack>
                    </SimpleGrid>
                </HStack>
            </Box>
        </Box >
    )
}
{/* <a href="./resources/Aniket Bhandarkar.pdf" download="" id="btn_anchor"><button id="d_resume">Resume <i class="fa fa-download"></i></button></a> */ }
export default Home;