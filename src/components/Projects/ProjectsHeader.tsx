import { Divider, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";

export const ProjectsHeader = () => {
  return (
    <Flex
      w="full"
      pt={10}
      bg="#202020"
      textAlign="center"
      justifyContent="center"
      borderTopRadius={50}
    >
      <Grid templateColumns="repeat(1, 1fr)" gap={1}>
        <GridItem>
          <Heading fontWeight="light" size="2xl">
            Projects
          </Heading>
          <Divider w={400} mt={1} bg="white" />
        </GridItem>
      </Grid>
    </Flex>
  );
};
