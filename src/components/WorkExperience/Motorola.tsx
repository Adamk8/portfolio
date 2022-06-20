import msImage from "../../images/motorla.jpg";
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
  motorolaResponsiblityList,
} from "../../stores/descriptions";

export const Motorola = () => {
  return (
    <Flex w="full" textAlign="center" bg="#202020" fontWeight="light" p={20}>
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={20}
      >
        <GridItem>
          <Heading fontWeight="light" textAlign="center" fontSize={25} mb={2}>
            Systems Engeering Co-op at Motorola Solutions
          </Heading>
          <Heading fontWeight="light" textAlign="center" mb={2} fontSize={20}>
            Sept 2019 - Apr 2020
          </Heading>
          <Divider orientation="horizontal" mb={2} />
          <Text fontWeight="light" textAlign="left" fontSize={18}>
            {motorolaIntro}
          </Text>
        </GridItem>
        <GridItem>
          <Image borderRadius={30} src={msImage} boxShadow="dark-lg" />
        </GridItem>
        <GridItem>
          <Heading fontWeight="light" textAlign="center" mb={2} fontSize={20}>
            Roles and Responsiblities
          </Heading>
          <Divider orientation="horizontal" mb={2} />
          <UnorderedList fontSize={18} textAlign="left">
            {motorolaResponsiblityList.map((item, index) => (
              <ListItem key={"ms-" + index}>{item}</ListItem>
            ))}
          </UnorderedList>
        </GridItem>
      </Grid>
    </Flex>
  );
};
