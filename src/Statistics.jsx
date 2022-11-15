import { Box, Center, Flex, Img, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import { Fade } from 'react-reveal';

const Statistics = () => {
    const bg = useColorModeValue('white', '#10264f')
    const color = useColorModeValue('#10264f', 'white')
    return (
        <Box bg={bg} color={color} paddingY={"30px"} paddingTop={"80px"} id="stat">
            <Text textAlign={"center"} fontSize="3xl" paddingY={"30px"} >DAYS I CODE</Text>
            <Fade left cascade>
                <GitHubCalendar style={{ margin: "auto", width: "80%" }} color={color} username="Prathamesh61"
                    hideColorLegend showWeekdayLabels />
            </Fade>
            <Fade right cascade>
                <Box margin={"auto"} width={"80%"} >
                    <SimpleGrid columns={[1, 1, 1, 2]} width={["100%", "80%", "60%"]} margin={"auto"} padding={"20px"} justifyContent={"center"} alignItems={"center"} >
                        <Img src="https://github-readme-stats.vercel.app/api?username=prathamesh61&show_icons=true&locale=en&theme=tokyonight" alt="prathamesh61" />
                        <Img src="https://github-readme-streak-stats.herokuapp.com/?user=prathamesh61&theme=tokyonight" alt="prathamesh61" />
                    </SimpleGrid>
                    <Flex width={["70%", "70%", "60%", "20%"]}  margin={"auto"} justifyContent={"center"} alignItems={"center"} textAlign={"center"} alignSelf={"center"}>
                        <Center>
                            <Img  margin={'auto'} src="https://github-readme-stats.vercel.app/api/top-langs?username=prathamesh61&show_icons=true&locale=en&theme=tokyonight" alt="prathamesh61" />
                        </Center>
                    </Flex>
                </Box>
            </Fade>
        </Box>
    )
}

export default Statistics