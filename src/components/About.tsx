import { Divider, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { aboutMe } from "../stores/descriptions";

export const About = () => {
  return (
    <Flex w="full" h="400px" p={20} bg="gray.900" borderRadius={50}>
      <Grid
        templateColumns="repeat(5, 1fr)"
        templateRows="repeat(1, 1fr)"
        gap={5}
        alignContent="space-evenly"
      >
        <GridItem colSpan={2}>
          <Heading fontWeight="light">About Me</Heading>
          <Divider w={400} mt={1} mb={3} bg="white" />
          <Text minW="300px" maxW="600px">
            {aboutMe}
          </Text>
        </GridItem>
        <GridItem colStart={4} colEnd={6}></GridItem>
      </Grid>
    </Flex>
  );
};
