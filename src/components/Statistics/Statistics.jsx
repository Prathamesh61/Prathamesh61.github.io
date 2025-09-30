import {
  Box,
  Center,
  Flex,
  Img,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

const Statistics = () => {
  const bg = useColorModeValue("white", "#10264f");
  const color = useColorModeValue("#10264f", "white");

  return (
    <Box
      bg={bg}
      color={color}
      px={["15px", "30px", "50px", "80px"]}
      py={["30px", "40px", "50px"]}
      pt={["60px", "70px", "80px"]}
      id="stat"
    >
      <Text
        textAlign="center"
        fontSize={["2xl", "3xl", "4xl"]}
        fontWeight="bold"
        bgGradient="linear(to-r, #3379b5, #fffb1c)"
        bgClip="text"
        py={["10px", "15px", "20px"]}
      >
        DAYS I CODE
      </Text>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Fade left cascade>
          {/* <GitHubCalendar
            style={{ margin: "auto", width: "80%" }}
            color={color}
            username="Prathamesh61"
            hideColorLegend
            showWeekdayLabels
          /> */}
        </Fade>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Fade right cascade>
          <Box
            margin={"auto"}
            width={["95%", "90%", "85%", "80%"]}
            px={["10px", "15px", "20px"]}
          >
            <SimpleGrid
              columns={[1, 1, 1, 2]}
              width={["100%", "90%", "80%", "70%"]}
              margin={"auto"}
              p={["10px", "15px", "20px"]}
              gap={["15px", "20px", "25px"]}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Img
                width="100%"
                maxW={["350px", "400px", "450px", "500px"]}
                src="https://github-readme-stats.vercel.app/api?username=prathamesh61&show_icons=true&locale=en&theme=tokyonight"
                alt="prathamesh61"
              />
              <Img
                width="100%"
                maxW={["350px", "400px", "450px", "500px"]}
                src="https://github-readme-streak-stats.herokuapp.com/?user=prathamesh61&theme=tokyonight"
                alt="prathamesh61"
              />
            </SimpleGrid>
          </Box>
        </Fade>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <Flex
          width={["95%", "85%", "70%", "50%"]}
          margin={"auto"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
          alignSelf={"center"}
          px={["10px", "15px", "20px"]}
          py={["15px", "20px", "25px"]}
        >
          <Center>
            <Img
              margin={"auto"}
              width="100%"
              maxW={["280px", "320px", "360px", "400px"]}
              src="https://github-readme-stats.vercel.app/api/top-langs?username=prathamesh61&show_icons=true&locale=en&theme=tokyonight"
              alt="prathamesh61"
            />
          </Center>
        </Flex>
      </motion.div>
    </Box>
  );
};

export default Statistics;
