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
import { BASE_RESUME_URL } from "./util";

function Home() {
  const bg = useColorModeValue("white", "#10264f");
  const color = useColorModeValue("#10264f", "white");

  const handleResume = () => {
    window.open(
      BASE_RESUME_URL
    );
  };

  return (
    <Box bg={bg} color={color} id="Home">
      <Box width="80%" margin="auto" paddingTop="60px" textAlign="center">
        <Fade cascade direction="down">
          <Text
            className="Profile_Name"
            paddingTop="30px"
            fontSize={{ sm: "40px", md: "40px", lg: "50px" }}
          >
            Hi, I am
          </Text>
          <Text
            className="Profile_Name"
            fontSize={{ sm: "40px", md: "40px", lg: "50px" }}
            color={color}
          >
            Prathamesh <span style={{ color: "#3379b5" }}>Rawool</span>
          </Text>
        </Fade>

        <Zoom>
          <Text fontSize="30px" paddingBottom="30px" color={color}>
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
          <Box width={["100%", "80%", "60%"]} margin="auto">
            <Text paddingY="30px" fontSize="18px" wordBreak="break-word">
              An Inquisitive Full Stack Web Developer with knowledge of a wide
              range of programming utilities and languages. Has relevant
              hands-on experience in building websites from scratch. Seeking to
              leverage broad development experience and hands-on technical
              expertise.
            </Text>
          </Box>
        </Bounce>
      </Box>

      <Box width={["80%", "50%"]} margin="auto" paddingY="20px">
        <SimpleGrid
          columns={[1, 1, 2]}
          gap="20px"
          padding="20px"
          alignItems="center"
        >
          <Fade direction="left">
            <Img
              margin="auto"
              objectFit="cover"
              width="80%"
              src={require("./res/Profile.png")}
              alt="profile"
              borderRadius="20px"
            />
          </Fade>

          <VStack width="100%">
            <Fade direction="right" cascade>
              <HStack fontSize="22px">
                <Text className="hvr-underline-from-center" color={color}>
                  About Me
                </Text>
              </HStack>
              <Text textAlign="center" paddingY="10px" fontSize="20px">
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
                  padding="10px 20px"
                >
                  <a
                    href="Prathamesh-Laxman-Rawool-Resume.pdf"
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
