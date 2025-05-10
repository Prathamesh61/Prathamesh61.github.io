import {
  Box,
  Flex,
  Text,
  Icon,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";
import { FaBuilding } from "react-icons/fa";

const WorkExperience = () => {
  const bg = useColorModeValue("white", "#10264f");
  const color = useColorModeValue("#10264f", "white");

  const experiences = [
    {
      company: "86 Agency",
      role: "Software Development Engineer",
      duration: "May 2023 - Present",
      achievements: [
        "Worked as a full-stack web developer in a fast-paced startup environment.",
        "Developed and maintained web applications using a combination of front-end and back-end technologies.",
        "Conducted thorough testing and debugging to identify and fix software defects.",
        "Done Unit Testing and Automation Testing with testing tools in order to deliver a good code quality.",
        "Assisted in deploying applications to production environments and provided ongoing support.",
      ],
      skills: [
        "React",
        "React Native",
        "NodejS",
        "Serverless",
        "Express",
        "AWS",
        "Automation Testing",
        "Unit Testing",
        "Playwright Testing",
        "Storybook",
      ],
    },
  ];

  return (
    <Box
      p={["10px", "20px", "30px"]}
      pt="80px"
      bg={bg}
      color={color}
      id="workExperience"
    >
      <Text textAlign="center" fontSize="3xl" color={color} mb="20px">
        Work Experience
      </Text>
      <Flex direction="column" align="center" gap="20px" py="20px">
        {experiences.map((exp, index) => (
          <Fade
            direction={index % 2 === 0 ? "left" : "right"}
            cascade
            triggerOnce={false}
            damping={0.2}
          >
            <Box
              key={index}
              w={["90%", "100%"]}
              m={"auto"}
              p={["20px", "30px", "50px"]}
              borderWidth="1px"
              bg={bg}
              border="2px solid"
              borderColor={color}
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              borderRadius="15px"
              _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
            >
              <Flex
                justify="space-between"
                flexDirection={["column", "row", "row"]}
                align="left"
                mb="10px"
              >
                <Flex align="center">
                  <Icon as={FaBuilding} mr="10px" fontSize={"xl"} />
                  <Text fontSize={["xl", "2xl", "3xl"]} fontWeight="bold">
                    {exp.company}
                  </Text>
                </Flex>
                <Text fontSize="lg">{exp.duration}</Text>
              </Flex>
              <Text fontSize={"xl"} fontWeight="medium">
                {exp.role}
              </Text>
              <Box mt="10px">
                {exp.achievements.map((ach, idx) => (
                  <Text key={idx} fontSize="md" mb="5px">
                    - {ach}
                  </Text>
                ))}
              </Box>
              <Flex mt="10px" gap="5px" wrap="wrap">
                {exp.skills.map((skill, idx) => (
                  <Tag key={idx} colorScheme="blue">
                    {skill}
                  </Tag>
                ))}
              </Flex>
            </Box>
          </Fade>
        ))}
      </Flex>
    </Box>
  );
};

export default WorkExperience;
