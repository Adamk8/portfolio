import sgImage from "../../images/suregrip.jpg";
import {
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import {
  motorolaIntro,
  suregripIntro,
  suregripResponsiblityList,
} from "../../stores/descriptions";

export const SureGripControls = () => {
  return (
    <Flex w="full" textAlign="center" bg="gray.900" fontWeight="light" p={20}>
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={20}
      >
        <GridItem>
          <Image
            ml="15%"
            boxSize="400px"
            borderRadius={20}
            src={sgImage}
            boxShadow="dark-lg"
          />
        </GridItem>
        <GridItem>
          <Heading fontWeight="light" textAlign="center" fontSize={30}>
            Full Stack Developer Co-op at Sure Grip Controls
          </Heading>
          <Heading fontWeight="light" textAlign="center" mb={2} fontSize={20}>
            Sept 2019 - Apr 2020
          </Heading>
          <Divider orientation="horizontal" mb={2} />
          <Text fontWeight="light" textAlign="left" fontSize={18}>
            {suregripIntro}
          </Text>
        </GridItem>
        <GridItem>
          <Heading fontWeight="light" textAlign="center" mb={2} fontSize={20}>
            Roles and Responsiblities
          </Heading>
          <Divider orientation="horizontal" mb={2} />
          <UnorderedList fontSize={18} textAlign="left">
            {suregripResponsiblityList.map((item) => (
              <ListItem>{item}</ListItem>
            ))}
          </UnorderedList>
        </GridItem>
      </Grid>
    </Flex>
  );
};
