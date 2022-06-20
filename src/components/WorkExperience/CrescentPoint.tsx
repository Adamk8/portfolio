import cpImage from "../../images/crescentpoint.jpg";
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
  crescentpointIntro,
  crescentpointResponsiblityList,
} from "../../stores/descriptions";

export const CrescentPoint = () => {
  return (
    <Flex
      w="full"
      textAlign="center"
      bg="#202020"
      fontWeight="light"
      p={20}
      borderBottomRadius={50}
    >
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={20}
      >
        <GridItem>
          <Heading fontWeight="light" textAlign="center" fontSize={25} mb={2}>
            System Administrator at Crescent Point Energy
          </Heading>
          <Heading fontWeight="light" textAlign="center" mb={2} fontSize={20}>
            May 2018 - Aug 2018
          </Heading>
          <Divider orientation="horizontal" mb={2} />
          <Text fontWeight="light" textAlign="left" fontSize={18}>
            {crescentpointIntro}
          </Text>
        </GridItem>
        <GridItem>
          <Heading fontWeight="light" textAlign="center" mb={2} fontSize={20}>
            Roles and Responsiblities
          </Heading>
          <Divider orientation="horizontal" mb={2} />
          <UnorderedList fontSize={18} textAlign="left">
            {crescentpointResponsiblityList.map((item, index) => (
              <ListItem key={"cp-" + index}>{item}</ListItem>
            ))}
          </UnorderedList>
        </GridItem>
        <GridItem>
          <Image borderRadius={20} src={cpImage} boxShadow="dark-lg" />
        </GridItem>
      </Grid>
    </Flex>
  );
};
