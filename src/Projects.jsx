import { Box, Button, Flex, HStack, Img, SimpleGrid, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaLink } from 'react-icons/fa'
import { Fade } from 'react-reveal';
import ScrollAnimation from 'react-animate-on-scroll';

const Projects = () => {


    const projectsArr = [
        {
            title: "Boat-LifeStyle Clone",
            banner: "https://i.ibb.co/PmWdx1r/Boat-banner.jpg",
            description: "BoAt is an India-based consumer electronics brand established in 2015 that markets earphones, headphones stereos, travel chargers and premium rugged cables.",
            techYellow: [{
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
            },],
            techBlue: [{
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
            },],
            github: 'https://github.com/hariohmtripathi/Boat-Lifestyle-',
            live: 'https://friendly-cajeta-33faab.netlify.app/'
        },
        {
            title: "Sephora-Collection Clone",
            banner: "https://i.ibb.co/946Rx1T/sephora-banner.jpg",
            description: "Sephora is a French multinational retailer of personal care and beauty products. Sephora offers beauty products including cosmetics, skincare, body, fragrance, and many more.",
            techYellow: [{
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
            },],
            techBlue: [{
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
            },],

            github: 'https://github.com/krajeet35/Project--miscreant-punishment-3547',
            live: "https://euphonious-bubblegum-8add69.netlify.app/"
        },
        {
            title: "Naukri.com Clone",
            banner: "https://i.ibb.co/n8spJdf/naukri-banner.jpg",
            description: "Naukri.com is a recruitment platform that provides hiring-related services to corporates/recruiters, placement agencies, and job seekers in India and overseas.",
            techBlue: [{
                image: "https://i.ibb.co/PYfBtPr/atom.png",
                alt: "React"
            },],
            techYellow: [{
                image: "https://i.ibb.co/TYK8KJd/atom.png",
                alt: "React"
            },],
            github: 'https://github.com/Prathamesh61/sick-dress-4939',
            live: 'https://mynaukri.vercel.app/'
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
    const bg = useColorModeValue('white', '#10264f')
    const color = useColorModeValue('#10264f', 'white')
    return (
        <Box paddingY={"30px"} bg={bg} color={color} id="Projects">
            <Text textAlign={"center"} fontSize="3xl" color={color} >
                Projects
            </Text>
            <VStack paddingY={"30px"} width={"70%"} margin={"auto"} gap={"50px"}>
                {projectsArr.map((elem) => {
                    return <HStack className='hvr-grow-shadow' >
                        <SimpleGrid columns={[1, 1, 1, 2]} padding={"40px"} justifyContent={"center"} alignItems={"center"} gap={"20px"} border={"3px solid"} borderColor={color} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" borderRadius={"15px"}>
                            <Fade left cascade >
                                <Box overflowY={"hidden"} height={"300px"}>
                                    <Img border="3px solid" borderColor={color} borderRadius={"10px"} width={"2500px"} src={elem.banner} alt={elem.title} />
                                </Box>
                            </Fade>
                            <VStack alignSelf={"flex-start"}>
                                <Fade right cascade>
                                    <Text fontSize="2xl" color={color}>
                                        {elem.title}
                                    </Text>
                                </Fade>
                                <Text fontSize={"18px"} align={"center"}>
                                    {elem.description}
                                </Text>
                                <HStack gap={"10px"} paddingY={"20px"} alignSelf={"center"}>{(bg === 'white' ? elem.techBlue : elem.techYellow).map((el) => <Img className='hvr-pop' alignSelf={"start"} width={"30px"} src={el.image} alt={el.alt} />)} </HStack>
                                <HStack align={"end"}>
                                    <a href={elem.github} target={"_blank"} ><Button className='hvr-underline-from-center' leftIcon={<FaLink />}>Github</Button></a>
                                    <a href={elem.live} target={"_blank"} ><Button className='hvr-underline-from-center' leftIcon={<FaLink />}>Live</Button></a>
                                </HStack>
                            </VStack>
                        </SimpleGrid>
                    </HStack>
                })}
            </VStack>
        </Box >
    )
}

export default Projects