import { Divider, Flex, Grid, GridItem, Heading } from "@chakra-ui/react";

export const ExperienceHeader = () => {
  return (
    <Flex
      w="full"
      padding={5}
      bg="gray.900"
      textAlign="center"
      justifyContent="center"
      borderTopRadius={50}
    >
      <Grid templateColumns="repeat(1, 1fr)" gap={1}>
        <GridItem>
          <Heading size="2xl" fontWeight="light">
            Work Experience
          </Heading>
          <Divider w={400} mt={1} bg="white" />
        </GridItem>
      </Grid>
    </Flex>
  );
};
