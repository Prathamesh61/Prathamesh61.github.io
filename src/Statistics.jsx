import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import { Fade } from 'react-reveal';

const Statistics = () => {
    const bg = useColorModeValue('white', '#10264f')
    const color = useColorModeValue('#10264f', 'white')
    return (
        <Box bg={bg} color={color} paddingY={"30px"} id="stat">
            <Text textAlign={"center"} fontSize="3xl" paddingY={"30px"} >DAYS I CODE</Text>
            <Fade left cascade>
                <GitHubCalendar style={{ margin: "auto", width: "70%" }} color={color} username="Prathamesh61"
                    hideColorLegend showWeekdayLabels />
            </Fade>
            <Fade right cascade>
                <Box width={"60%"} className={"stat_Div"} margin={"auto"} overflow={"hidden"} height={"300px"} marginY={"50px"} >
                    <div className='stat' >
                        <iframe loading="lazy" className='stat_iframe'
                            src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFMOmVnNtQ&#x2F;view?embed">
                        </iframe>
                    </div>
                </Box>
            </Fade>
        </Box>
    )
}

export default Statistics