import { Divider, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";

export const ProjectsHeader = () => {
  return (
    <Flex w="full" padding={10} bg="151515">
      <Grid templateColumns="repeat(1, 1fr)" gap={1}>
        <GridItem>
          <Heading fontWeight="light">Projects</Heading>
          <Divider w={400} mt={1} bg="white" />
        </GridItem>
      </Grid>
    </Flex>
  );
};
