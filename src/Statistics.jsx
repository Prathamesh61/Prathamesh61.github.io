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
    <Box bg={bg} color={color} paddingY={"30px"} paddingTop={"80px"} id="stat">
      <Text textAlign={"center"} fontSize="3xl" paddingY={"30px"}>
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
          <Box margin={"auto"} width={"80%"}>
            <SimpleGrid
              columns={[1, 1, 1, 2]}
              width={["100%", "80%", "60%"]}
              margin={"auto"}
              padding={"20px"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Img
                src="https://github-readme-stats.vercel.app/api?username=prathamesh61&show_icons=true&locale=en&theme=tokyonight"
                alt="prathamesh61"
              />
              <Img
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
          width={["70%", "70%", "60%", "20%"]}
          margin={"auto"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
          alignSelf={"center"}
        >
          <Center>
            <Img
              margin={"auto"}
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
