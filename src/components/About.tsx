import { Divider, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";

export const About = () => {
  return (
    <Flex w="full" h="400px" padding={20} bg="gray.800">
      <Grid templateColumns="repeat(1, 1fr)" gap={1}>
        <GridItem>
          <Heading fontWeight="light">About Me</Heading>
          <Divider w={400} mt={1} bg='white' />
        </GridItem>
      </Grid>
    </Flex>
  );
};
