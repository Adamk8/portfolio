import {
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  UnorderedList,
  ListItem,
  Text,
} from "@chakra-ui/react";
import {
  aboutMe,
  softSkillsList,
  technicalSkillsList,
} from "../stores/descriptions";

export const About = () => {
  return (
    <Flex
      w="full"
      h="500px"
      p={20}
      bg="#202020"
      borderRadius={50}
      justifyContent="center"
    >
      <Grid templateColumns="repeat(2, 1fr)" templateRows="repeat(1, 1fr)">
        <GridItem mr={40}>
          <Heading fontWeight="light">About Me</Heading>
          <Divider w={400} mt={1} mb={3} bg="white" />
          <Text minW="300px" maxW="600px" fontSize={18}>
            {aboutMe}
          </Text>
        </GridItem>
        <GridItem ml={40}>
          <Heading fontWeight="light">Skills</Heading>
          <Divider w={400} mt={1} mb={3} bg="white" />
          <Text fontSize={18}>Technical</Text>
          <Divider w={120} bg="151515" />
          <UnorderedList mb={3} fontSize={18}>
            {technicalSkillsList.map((item, index) => (
              <ListItem key={"techSkill-" + index}>{item}</ListItem>
            ))}
          </UnorderedList>
          <Text fontSize={18}>Non-Technical</Text>
          <Divider w={120} bg="151515" />
          <UnorderedList fontSize={18}>
            {softSkillsList.map((item, index) => (
              <ListItem key={"SoftSkill-" + index}>{item}</ListItem>
            ))}
          </UnorderedList>
        </GridItem>
      </Grid>
    </Flex>
  );
};
