import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Button, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Intro = () => {
  return (
    <Flex w="full" bg="blackAlpha.600" justifyContent="center">
      <Grid justifyContent="center" textAlign="center" gap={5} mb={10}>
        <GridItem>
          <Heading mt="100px" size="4xl" fontWeight="light">
            Welcome to Adam Kwan's Portfolio
          </Heading>
        </GridItem>
        <GridItem>
          <Text color="gray.300">
            <EmailIcon w={5} h={5} mr={2} />
            adam876k@gmail.com
          </Text>
        </GridItem>
        <GridItem>
          <Button bg="blackAlpha.900" leftIcon={<FaGithub />} w="150px">
            GitHub
          </Button>
        </GridItem>
        <GridItem>
          <Button bg="#0e76a8" leftIcon={<FaLinkedin />} w="150px">
            LinkedIn
          </Button>
        </GridItem>
      </Grid>
    </Flex>
  );
};
