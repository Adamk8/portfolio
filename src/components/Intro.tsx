import { EmailIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import portait from "../images/portrait.jpg";
import victoria from "../images/Victoria.jpg";

export const Intro = () => {
  const openGithub = () => {
    window.open("https://github.com/Adamk8", "_blank");
  };

  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/adamjkwan/", "_blank");
  };

  return (
    <Flex
      w="100%"
      h="93vh"
      style={{ backgroundImage: `url(${victoria})` }}
      justifyContent="center"
    >
      <Grid
        justifyContent="center"
        textAlign="center"
        gap={3}
        m={16}
        bg="#202020"
        p={8}
        borderRadius={50}
      >
        <GridItem>
          <Heading m={10} mb={2} size="4xl" fontWeight="light">
            Welcome to My Portfolio!
          </Heading>
        </GridItem>
        <GridItem>
          <Flex justifyContent="center">
            <Image
              borderRadius={50}
              boxSize="300px"
              src={portait}
              boxShadow="dark-lg"
            />
          </Flex>
          <Heading mt={5} size="2xl" fontWeight="light">
            Adam Kwan
          </Heading>
          <Heading mt={5} size="lg" fontWeight="light">
            Software Engineering Student
          </Heading>
        </GridItem>
        <GridItem>
          <Text color="gray.300">
            <EmailIcon w={5} h={5} mr={2} />
            adam876k@gmail.com
          </Text>
        </GridItem>
        <GridItem>
          <Button
            bg="black"
            leftIcon={<FaGithub />}
            w="150px"
            onClick={openGithub}
          >
            GitHub
          </Button>
          <Button
            bg="#0e76a8"
            leftIcon={<FaLinkedin />}
            w="150px"
            onClick={openLinkedin}
            ml={5}
          >
            LinkedIn
          </Button>
        </GridItem>
      </Grid>
    </Flex>
  );
};
