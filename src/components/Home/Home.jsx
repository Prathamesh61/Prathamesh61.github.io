import {
  Box,
  Heading,
  HStack,
  Img,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Fade, Zoom, Bounce } from "react-awesome-reveal";
import TypewriterComponent from "typewriter-effect";
import { BASE_RESUME_URL } from "../../util";

function Home() {
  const bg = useColorModeValue("white", "#10264f");
  const color = useColorModeValue("#10264f", "white");

  const handleResume = () => {
    window.open(BASE_RESUME_URL);
  };

  return (
    <Box bg={bg} color={color} id="Home" py={["30px", "40px", "60px"]}>
      <Box
        width={["95%", "90%", "85%", "80%"]}
        margin="auto"
        px={["10px", "20px", "30px"]}
        textAlign="center"
      >
        <Fade cascade direction="down">
          <Text
            className="Profile_Name"
            pt={["10px", "20px", "30px"]}
            fontSize={["25px", "30px", "40px"]}
          >
            Hi, I am
          </Text>
          <Text
            className="Profile_Name"
            fontSize={["25px", "30px", "40px"]}
            color={color}
          >
            Prathamesh <span style={{ color: "#3379b5" }}>Rawool</span>
          </Text>
        </Fade>

        <Zoom>
          <Text
            fontSize={["20px", "25px", "30px"]}
            pb={["20px", "25px", "30px"]}
            color={color}
          >
            <TypewriterComponent
              options={{
                strings: [
                  "A Full Stack Web Developer",
                  "A MERN Stack Developer",
                  "A React Native Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </Text>
        </Zoom>

        <Bounce>
          <Box width={["100%", "90%", "80%", "60%"]} margin="auto">
            <Text
              py={["20px", "25px", "30px"]}
              fontSize={["16px", "17px", "18px"]}
              wordBreak="break-word"
            >
              An Inquisitive Full Stack Web Developer with knowledge of a wide
              range of programming utilities and languages. Has relevant
              hands-on experience in building websites from scratch. Seeking to
              leverage broad development experience and hands-on technical
              expertise.
            </Text>
          </Box>
        </Bounce>
      </Box>

      <Box
        width={["95%", "90%", "80%", "70%"]}
        margin="auto"
        py={["20px", "30px", "40px"]}
      >
        <SimpleGrid
          columns={[1, 1, 2]}
          gap={["15px", "20px", "30px"]}
          p={["10px", "15px", "20px"]}
          alignItems="center"
        >
          <Fade direction="left">
            <Img
              margin="auto"
              objectFit="cover"
              width={["70%", "60%", "50%", "45%"]}
              maxW={["200px", "250px", "300px", "350px"]}
              src={require("../../res/Profile.png")}
              alt="profile"
              borderRadius={["15px", "18px", "20px"]}
            />
          </Fade>

          <VStack width="100%">
            <Fade direction="right" cascade>
              <HStack fontSize={["18px", "20px", "22px"]}>
                <Text className="hvr-underline-from-center" color={color}>
                  About Me
                </Text>
              </HStack>
              <Text
                textAlign="center"
                py={["8px", "10px", "12px"]}
                fontSize={["16px", "18px", "20px"]}
              >
                Hi Everyone, I am{" "}
                <span style={{ color: "#3379b5" }}>Prathamesh Rawool</span> from{" "}
                <span style={{ color: "#3379b5" }}>Mumbai, Maharashtra</span>. I
                have completed my graduation in Bachelor of Science in
                Information Technology from Mumbai University, Maharashtra.
              </Text>
              <Bounce>
                <Box
                  className="btn-grad"
                  borderRadius="5px"
                  border="1px solid"
                  borderColor={color}
                  p={["8px 16px", "10px 20px", "12px 24px"]}
                >
                  <a
                    href={BASE_RESUME_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    Resume
                  </a>
                </Box>
              </Bounce>
            </Fade>
          </VStack>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Home;
