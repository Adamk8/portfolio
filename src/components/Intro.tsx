import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
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

export const Intro = () => {
  const openGithub = () => {
    window.open("https://github.com/Adamk8","_blank")
  }

  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/adamjkwan/","_blank")
  }

  return (
    <Flex w="full" bg="blackAlpha.600" justifyContent="center">
      <Grid justifyContent="center" textAlign="center" gap={5} mb={10}>
        <GridItem>
          <Heading mt={20} size="4xl" fontWeight="light">
            Welcome My Portfolio!
          </Heading>
        </GridItem>
        <GridItem>
          <Flex justifyContent='center'>
            <Image borderRadius="full" boxSize="300px" src={portait} />
            
          </Flex>
          <Heading mt={5} size="2xl" fontWeight="light">Adam Kwan</Heading>
        </GridItem>
        <GridItem>
          <Text color="gray.300">
            <EmailIcon w={5} h={5} mr={2} />
            adam876k@gmail.com
          </Text>
        </GridItem>
        <GridItem>
          <Button bg="blackAlpha.900" leftIcon={<FaGithub />} w="150px" onClick={openGithub}>
            GitHub
          </Button>
        </GridItem>
        <GridItem>
          <Button bg="#0e76a8" leftIcon={<FaLinkedin />} w="150px" onClick={openLinkedin}>
            LinkedIn
          </Button>
        </GridItem>
      </Grid>
    </Flex>
  );
};
